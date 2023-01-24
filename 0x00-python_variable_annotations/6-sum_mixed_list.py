#!/usr/bin/env python3
'''
sum list of int and floats
'''
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    ''' sum list of int and floats '''
    return sum(mxd_lst)
