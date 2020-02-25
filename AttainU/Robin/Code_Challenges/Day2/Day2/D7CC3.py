# 3) write a program that takes input from the user as marks in 5 subjects and assigns a grade according to the following rules:
# Perc = (s1+s2+s3+s4+s5)/5.
# A, if Perc is 90 or more
# B, if Perc is between 70 and 90(not equal to 90)
# C, if Perc is between 50 and 70(not equal to 90)
# D, if Perc is between 30 and 50(not equal to 90)
# E, if Perc is less than 30

# Defining a function to check a number contains no characters
# and the marks less than 100
def my_func(a):
# Defining a list for reference to compare the characters of the input
    list=['0','1','2','3','4','5','6','7','8','9','.']
    for i in range(0,len(a)):
        if a[i] in list:
            continue
        else:
            a=input('Enter valid marks: ')
            continue
# after confirming the entered input contains only numbers 
# checking whether the given number is greater than 100
# and if it is greater than 100 asking the student to enter
# the marks scaled to 100    
    if float(a)>100:
        a=input('please enter your marks scaled to 100: ')
        my_func(a)
    else:
        pass
    
    return float(a)
# getting the individual subject marks from a student
subject1=(input('enter the subject1 marks out of 100 here: '))
sub1=my_func(subject1)
subject2=(input('enter the subject2 marks out of 100 here: '))
sub2=my_func(subject2)
subject3=(input('enter the subject3 marks out of 100 here: '))
sub3=my_func(subject3)
subject4=(input('enter the subject4 marks out of 100 here: '))
sub4=my_func(subject4)
subject5=(input('enter the subject5 marks out of 100 here: '))
sub5=my_func(subject5)

total= sub1+sub2+sub3+sub4+sub5
print('Total: ',total)
perc =(sub1+sub2+sub3+sub4+sub5)/5
print('Average: ',perc)

if perc>=90:
    print('Your grade is \'A\'')
elif perc>=70 and perc<90:
    print('your grade is \'B\'')
elif perc>=50 and perc<70:
    print('Your grade is \'C\'')
elif perc>=30 and perc<50:
    print('Your grade is \'D\'')
else:
    print('Your grade is \'E\'')

    



