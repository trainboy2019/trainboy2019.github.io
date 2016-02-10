# Caesar Cipher
# http://inventwithpython.com/hacking (BSD Licensed)

import pyperclip

# the string to be encrypted/decrypted
message = ''

# the encryption/decryption key
key = ''

# tells the program to encrypt or decrypt
mode = '' # set to 'encrypt' or 'decrypt'
while mode != 'encrypt' and mode != 'decrypt':
    print ('Enter "encrypt" or "decrypt"')
    mode = input()

while key == '' and mode != '':
    print ('Enter key.')
    key = input()
    
if message == '' and mode == 'encrypt':
    print('Enter the message to encrypt.')
    message = input()
elif message == '' and mode == 'decrypt':
    print('Enter the message to decrypt.')
    message = input()

# every possible symbol that can be encrypted
LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\'., '

# stores the encrypted/decrypted form of the message
translated = ''

# capitalize the string in message
#message = message.upper()

# run the encryption/decryption code on each symbol in the message string
for symbol in message:
    if symbol in LETTERS:
        # get the encrypted (or decrypted) number for this symbol
        num = LETTERS.find(symbol) # get the number of the symbol
        if mode == 'encrypt':
            num = num + int(key)
        elif mode == 'decrypt':
            num = num - int(key)

        # handle the wrap-around if num is larger than the length of
        # LETTERS or less than 0
        if num >= len(LETTERS):
            num = num - len(LETTERS)
        elif num < 0:
            num = num + len(LETTERS)

        # add encrypted/decrypted number's symbol at the end of translated
        translated = translated + LETTERS[num]

    else:
        # just add the symbol without encrypting/decrypting
        translated = translated + symbol

# print the encrypted/decrypted string to the screen
print(translated)
print('Key:')
print(key)

# copy the encrypted/decrypted string to the clipboard
pyperclip.copy(translated)
