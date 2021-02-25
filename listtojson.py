import os
import json

data = {}

def listd(pth):
    pth = pth.replace('/', '\\')
    return( os.listdir(pth))

def filList(lc, subf):
    global data
    data[lc] = []

    for i in listd(primfol+"/"+subf):
        data[lc].append(i)

# fol = os.listdir("/resources/Clients")
primfol = "./resources/Clients"



filList('mu', 'Makeup')
filList('hr', 'Hair')
filList('nls', 'Nails')
filList('so', 'so_s')
filList('ws', 'Workshop')

with open('./resources/Clients/list.json'.replace('/', '\\'), 'w') as outfile:
    json.dump(data, outfile)




