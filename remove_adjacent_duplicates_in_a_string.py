# Remove adjacent duplicates in a string

string = input('enter the input string: ')
size = len(string)
l = []
for i in range(size):
    l.append(string[i])
index_list=[]
n = len(l)
duplicate_found = False
i = 0
while i < n-1:
    
    duplicate_found = False
    for j in range(i+1,n):
        if l[i] != l[j]: break
        else:
            index_list.append(j)
            duplicate_found = True       
    if duplicate_found: index_list.append(i)
    i = j  
index_list.sort()
for i in index_list:
    l[i] = 'remove'
'''
for i in range(len(index_list)):
    l.remove('remove')
'''
while 'remove' in l:
    l.remove('remove')
print(''.join(l))


    
        
