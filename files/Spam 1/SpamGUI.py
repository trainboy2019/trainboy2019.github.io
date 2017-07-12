from tkinter import *
from tkinter import ttk
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import time
import sys, pyperclip, cryptomath, random
import tweepy
import string
#from applescript2 import asrun, asquote
from subprocess import check_output

def getVarFromFile(filename):
    import imp
    f= open(filename)
    global data
    data = imp.load_source('data', '', f)
    f.close()

def tweet():
    
    
    getVarFromFile('config.txt')
    consumer_key = data.consumer_key
    consumer_secret = data.consumer_secret
    access_token = data.access_token
    access_token_secret = data.access_token_secret
    word_file='dictionary.txt'
    WORDS=open(word_file).read().splitlines()
    word1=random.choice(WORDS)
    word2=random.choice(WORDS)
    word3=random.choice(WORDS)
    word4=random.choice(WORDS)
    word5=random.choice(WORDS)
    word6=random.choice(WORDS)
    random1=word1+' '+word2+' '+word3+' '+word4+' '+word5+' '+word6
    length=len(random1)
    while length>140:
        word1=random.choice(WORDS)
        word2=random.choice(WORDS)
        word3=random.choice(WORDS)
        word4=random.choice(WORDS)
        word5=random.choice(WORDS)
        word6=random.choice(WORDS)
        random1=word1+' '+word2+' '+word3+' '+word4+' '+word5+' '+word
        length=len(random1)
    
    while True:
        try:
            timestosend=int(feet.get())
            break;
        except:
            print('Error')
            sys.exit('NO!')
    timessent=0
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)
    while(timessent<timestosend):
        api.update_status(random1)
        timessent=timessent+1
        print('Tweeted ' + str(random1)+ ' '+str(timessent)+'/'+str(timestosend)+' times.')
        word1=random.choice(WORDS)
        word2=random.choice(WORDS)
        word3=random.choice(WORDS)
        word4=random.choice(WORDS)
        word5=random.choice(WORDS)
        word6=random.choice(WORDS)
        random1=word1+' '+word2+' '+word3+' '+word4+' '+word5+' '+word6
        length=len(random1)
        while length>140:
            word1=random.choice(WORDS)
            word2=random.choice(WORDS)
            word3=random.choice(WORDS)
            word4=random.choice(WORDS)
            word5=random.choice(WORDS)
            word6=random.choice(WORDS)
            random1=word1+' '+word2+' '+word3+' '+word4+' '+word5+' '+word6
            length=len(random1)

def massMail():
    word_file='MailList.txt'
    WORDS=open(word_file).read().splitlines()
    urlFile = open("MailList.txt", "r+")
    mailList = [i.strip() for i in urlFile.readlines()]
    
    while True:
        try:
            timestosend=int(feet.get())
            break;
        except:
            print('Error')
            sys.exit('NO!')
    
    getVarFromFile('config.txt')
    fromaddr = data.fromaddr
    toaddrs = mailList
    sub = 'CONGRATULATIONS YOU WIN!'
    msg = 'You won a free tree! Come to Mexico City now!'
    
    username = data.username
    
    password = data.password
    passworduse=password
    message = 'Subject: %s\n\n%s' % (sub, msg)
    
    server = smtplib.SMTP(data.smtpserver)
    server.starttls()
    server.login(username,passworduse)
    timessent=0
    while timessent < timestosend:
        server.sendmail(fromaddr, toaddrs, 'Subject: '+sub+"\n"+msg)
        timessent =timessent +1
        print ('Sent ' + str(timessent) + ' of ' + str(timestosend) +' emails to ' + str(toaddrs) +'.')
        if timessent==timestosend:
            print('Done!')
    server.quit()



def mail():
    
    while True:
        try:
            timestosend=int(feet.get())
            break;
        except:
            print('Error')
            sys.exit('NO!')
    
    getVarFromFile('config.txt')
    fromaddr = data.fromaddr
    
    toaddrs = totext.get()
    sub = 'CONGRATULATIONS YOU WIN!'
    msg = 'You won a free tree! Come to Mexico City now!'
    
    username = data.username
    
    password = data.password
    passworduse=password
    message = 'Subject: %s\n\n%s' % (sub, msg)
    
    server = smtplib.SMTP(data.smtpserver)
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




    
root = Tk()
root.title("Spam Central")

mainframe = ttk.Frame(root, padding="3 3 12 12")
mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
mainframe.columnconfigure(0, weight=1)
mainframe.rowconfigure(0, weight=1)

feet = StringVar()
totext = StringVar()
meters = StringVar()
emailLabel="E-Mail"
timestosendLabel="Times To Send"


ttk.Label(mainframe, text="E-mail").grid(column=1, row=1, sticky=W)
ttk.Label(mainframe, text="Times To Send").grid(column=2, row=1, sticky=W)


feet_entry = ttk.Entry(mainframe, width=7, textvariable=feet)
feet_entry.grid(column=2, row=2, sticky=(W, E))

totext_entry = ttk.Entry(mainframe, width=7, textvariable=totext)
totext_entry.grid(column=1, row=2, sticky=(W, E))


ttk.Button(mainframe, text="Tweet", command=tweet).grid(column=3, row=3, sticky=W)
ttk.Button(mainframe, text="Mail", command=mail).grid(column=2, row=3, sticky=W)
ttk.Button(mainframe, text="Mass Mail", command=massMail).grid(column=1, row=3, sticky=W)


for child in mainframe.winfo_children(): child.grid_configure(padx=5, pady=5)

feet_entry.focus()

root.mainloop()
