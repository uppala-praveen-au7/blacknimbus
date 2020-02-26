input_list = list(map(int,input('enter input list: ').rstrip().split()))
sorted_list = []
length = len(input_list)
while length:
    sorted_list.append(min(input_list))
    input_list.pop(input_list.index(min(input_list)))
    length = len(input_list)
del input_list
print(*sorted_list)

    
