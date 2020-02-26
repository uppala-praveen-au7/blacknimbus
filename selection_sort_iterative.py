input_list = list(map(int,input('enter input list: ').rstrip().split()))
length = len(input_list)

for i in range(length):
    min_index = i
    for j in range(i+1,length):
        if input_list[min_index] > input_list[j]: min_index = j
    input_list[i],input_list[min_index] = input_list[min_index],input_list[i]
print(*input_list)

