#!/usr/bin/env python3
'''
Run time for four parallel comprehensions
'''
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
    Measure the total runtime for executing async_comprehension four times in
    parallel using asynio.gather
    '''
    init = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.perf_counter()
    return end - init
