'''
A war has been declared between the countries of Geekyland1 and Geekyland2.
The former’s army has already occupied the battleground, which is an N * N grid.
Only one soldier can stay in a single square. Each soldier is denoted by an uppercase
English alphabet. However, it is suspected that three Geekyland2 spies have
infiltrated into the battleground as soldiers. Intelligence reports suggest that
if any such infiltration has happened, the three spies are in a single line
(a line can be horizontal, vertical, or diagonal).

You have to determine the number of triplets of soldiers that may correspond
to the Geekyland2 spies, i.e. they lie on the same line.

Input:
The first line of input contains T denoting the number of testcases.
T testcases follow. Each testcase contains N+1 lines of input.
The first line contains N, and the next N lines contain
N space-separated characters – uppercase English letters and the character ‘.’,
which denotes an empty square. Each letter can appear only once in the grid.

Output:
For each testcase, in a new line, print the number of triplets
that may correspond to the spies.

Constraints:
1 <= T <= 100
1 <= N <= 200

Examples:
Input:
2
4
...P
..Q.
.R..
S...
3
ABF
.CD
..E
Output:
4
3

Explanation:
Testcase 1: There are 4 spies so number of triplets that can be made are 4 that
is 4C3 = 4.
Testcase 2: ABF has 1 triplet, ACE has 1 triplet, FDE has 1 triplet,
so the answer is 1+1+1=3

'''
def factorial(n):
    if n <=1:
        return 1
    else:
        return n*factorial(n-1)
def rowCheck(l):
    arr = []
    temp = 0
    for i in range(len(l)):
        count = 0
        for j in range(len(l)):
            if l[i][j] != '.':
                count += 1
        if count>=3:
            temp = factorial(count)/((factorial(3))*(factorial(count-3)))
            arr.append(temp)
        else: arr.append(0)
    return sum(arr)
def columnCheck(l):
    arr = []
    temp = 0
    for i in range(len(l)):
        count = 0
        for j in range(len(l)):
            if l[j][i] != '.':
                count += 1
        if count >= 3:
            temp = factorial(count)/((factorial(3))*(factorial(count-3)))
            arr.append(temp)
        else: arr.append(0)
    return sum(arr)
def forwardDiagCheck(l):
    count = 0
    temp = 0
    for i in range(len(l)):
        if l[i][i] != '.':
            count += 1
    if count >= 3:
        temp = factorial(count)/((factorial(3))*(factorial(count-3)))
    else: temp = 0
    return temp
def backwardDiagCheck(l):
    count = 0
    temp = 0
    for i in range(len(l)-1,-1,-1):
        if l[i][len(l)-i-1] != '.':
            count += 1
    if count >= 3:
        temp = factorial(count)/((factorial(3))*(factorial(count-3)))
    else: temp = 0
    return temp
def warGame(l):
    row = rowCheck(l)
    column = columnCheck(l)
    forwardDiag = forwardDiagCheck(l) 
    backwardDiag = backwardDiagCheck(l)
    return int(row+column+forwardDiag+backwardDiag)
arr = []
t = int(input())
for i in range(t): 
    l = []  
    n = int(input())
    for i in range(n):
        m = list(map(str,input()))
        l.append(m)
    res = warGame(l)
    arr.append(res)
for i in range(len(arr)):
    print(arr[i])
