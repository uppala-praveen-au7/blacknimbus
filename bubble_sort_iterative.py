list_bubble = list(map(int,input('enter list of numbers: ').rstrip().split()))
size_list = len(list_bubble)
swapped = False
for i in range(size_list-1):
    swapped = False
    for j in range(size_list-1):
        if list_bubble[j] > list_bubble[j+1]:
            list_bubble[j],list_bubble[j+1] = list_bubble[j+1],list_bubble[j]
            swapped = True
    if not swapped: break

print('sorted list: ',*list_bubble)
