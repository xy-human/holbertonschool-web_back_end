#!/usr/bin/env python3
'''
Return a list of tuples containing elements and lengths
'''
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    ''' Return a list of tuples containing elements and lengths '''
    return [(i, len(i)) for i in lst]
