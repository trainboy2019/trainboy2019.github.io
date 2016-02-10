import tweepy
import sys
import time
import random
import string
 
# Consumer keys and access tokens, used for OAuth
consumer_key = 'MafNCTqW1NqfJdoIWjLrZo8bX'
consumer_secret = '06Llvm29GIy4zn35Qyu2IC5kRSTXgXj0hgmJjOp9lGWbGMGiXj'
access_token = '4828103278-mmnPPfTfHIFQdsAxgUUHsDQ5kpWRJJzwwHACJdm'
access_token_secret = '3idCPeKJL9u3hE4FNza4dr2dbcHytKDk4HHmAmN7GEWCV'


#print('What do you want to tweet?')
#message=input()
#if len(message)>138:
#    print('Too long!')
#    sys.exit('Too Long!')
random1 = (''.join([random.choice(string.ascii_letters + string.digits) for n in range(100)]))

print('How many times do you want to tweet '+random1+'?')
while True:
    try:
        timestosend=int(input())
        
        break;
    except:
        print('Error')
        sys.exit('NO!')
#if(timestosend%2!=0):
#    print('Not an even number!')
#    sys.exit('NO!')
        

#timestosend1=timestosend/2
timessent=0
#OAuth process, using the keys and tokens
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
 
# Creation of the actual interface, using authentication
api = tweepy.API(auth)


    
# Sample method, used to update a status
#api.update_status('Hello Python Central!')
while(timessent<timestosend):
    api.update_status(random1)
    timessent=timessent+1
    print('Tweeted ' + str(random)+ ' '+str(timessent)+'/'+str(timestosend)+' times.')
    
    random1 = (''.join([random.choice(string.ascii_letters + string.digits) for n in range(100)]))
    #message1=('.'+message)
    #time.sleep(3)
    #api.update_status(message1)
    #timessent=timessent+1
    #print('Tweeted ' + message+ ' '+str(timessent)+'/'+str(timestosend)+' times.')
    
        
    
    
