def bubble_sort(list_bubble,length):
    n = length
    swapped = False
    for i in range(n-1):
        if list_bubble[i] > list_bubble[i+1]:
            list_bubble[i],list_bubble[i+1] = list_bubble[i+1],list_bubble[i]
            swapped = True
    if not swapped: return list_bubble
    else: return bubble_sort(list_bubble,n)

list_bubble = list(map(int, input('enter input list: ').rstrip().split()))
length = len(list_bubble)
res = bubble_sort(list_bubble,length)
print('sorted list: ',*res)
            
    







