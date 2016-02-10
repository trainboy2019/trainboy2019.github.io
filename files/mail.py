import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import time
import sys, pyperclip, cryptomath, random
#from termcolor import colored




#Spam Numbers
#@txt.att.net
#@messaging.sprintpcs.com
#@tmomail.net
#@vtext.com



print('How many times do you want to spam someone?')
while True:
    try:
        timestosend=int(input())
        break;
    except:
        print('Error')
        sys.exit('NO!')

fromaddr = 'xxfreestuffforyouxx@gmail.com'
print ('Who do you want to spam?')
toaddrs = input()
sub = 'CONGRATULATIONS YOU WIN!'
msg = 'You won a free tree! Come to Mexico City now!'

# Credentials (if needed)
username = 'xxfreestuffforyouxx@gmail.com'
password = 'Xx_Spambot8000_xX'

passworduse=password




## 
##mode = 'decrypt' # set to 'encrypt' or 'decrypt'
## 
##key = 23
##    
##
##message = password
##    
##
##LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\'., '
##
## 
##translated = ''
##
##
##message = message.upper()
##
## 
##for symbol in message:
##    if symbol in LETTERS:
##        num = LETTERS.find(symbol) # get the number of the symbol
##        if mode == 'encrypt':
##            num = num + int(key)
##        elif mode == 'decrypt':
##            num = num - int(key)
##
##        if num >= len(LETTERS):
##            num = num - len(LETTERS)
##        elif num < 0:
##            num = num + len(LETTERS)
##
##        translated = translated + LETTERS[num]
##
##        passworduse=translated
##    else:
##        
##        translated = translated + symbol
##
##

#Subject setter
message = 'Subject: %s\n\n%s' % (sub, msg)

# The actual mail send
server = smtplib.SMTP('smtp.gmail.com:587')
server.starttls()
server.login(username,passworduse)
timessent=0
while timessent < timestosend:
    server.sendmail(fromaddr, toaddrs, 'Subject: '+sub+"\n"+msg)
    timessent =timessent +1
    print ('Sent ' + str(timessent) + ' of ' + str(timestosend) +' emails to ' + toaddrs +'.')
    if timessent==timestosend:
        print('Done!')

server.quit()

#else:
#time.sleep(10)
    

