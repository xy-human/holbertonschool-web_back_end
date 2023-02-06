#!/usr/bin/env python3
""" Encrypting passwords """
import bcrypt


def hash_password(password: str) -> bytes:
    """
        Returns a salted, hashed password,
        which is a byte string.
    """
    encoded_psw = bytes(password, 'utf-8')
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(encoded_psw, salt)
    return hashed


def is_valid(hashed_password: bytes, password: str) -> bool:
    """
        Validate that the provided password
    """
    encoded_psw = bytes(password, 'utf-8')
    if bcrypt.checkpw(encoded_psw, hashed_password) is True:
        return True
    return False
