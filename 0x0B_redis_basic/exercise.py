#!/usr/bin/env python3
'''
Project of basic redis
'''
import redis
import uuid
from typing import Union, Optional, Callable
from functools import wraps


def count_calls(method: Callable) -> Callable:
    '''
    Count calls of method
    '''
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwds):
        '''
        Wrapper function
        '''
        self._redis.incr(key)
        return method(self, *args, **kwds)
    return wrapper


def call_history(method: Callable) -> Callable:
    '''
    History calls
    '''
    @wraps(method)
    def wrapper(self, *args, **kwds):
        '''
        Wrapper function
        '''
        self._redis.rpush(method.__qualname__ + ':inputs', str(args))
        output = method(self, *args, **kwds)
        self._redis.rpush(method.__qualname__ + ':outputs', output)
        return output
    return wrapper


def replay(method: Callable):
    '''
    Calls of specific function
    '''
    r = redis.Redis()
    name = method.__qualname__
    count = r.get(name).decode('utf-8')
    inputs = r.lrange(name + ':inputs', 0, -1)
    outputs = r.lrange(name + ':outputs', 0, -1)
    print('{} was called {} times:'.format(name, count))
    for i, o in zip(inputs, outputs):
        print('{}(*{}) -> {}'.format(name, i.decode('utf-8'),
                                     o.decode('utf-8')))


class Cache:
    '''
    Class object
    '''

    def __init__(self):
        '''
        Init
        '''
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
    def store(self, data: Union[str, bytes, int, float]) -> str:
        '''
        Store data
        '''
        key = str(uuid.uuid4())
        self._redis.mset({key: data})
        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[
            str, bytes, int, float]:
        '''
        Convert data to the desired format
        '''
        if fn:
            return fn(self._redis.get(key))
        return self._redis.get(key)

    def get_str(self, data: str) -> str:
        '''
        Convert data to string
        '''
        return self._redis.get(data).decode('utf-8')

    def get_int(self, data: str) -> int:
        '''
        Convert data to int
        '''
        return int(self._redis.get(data))
