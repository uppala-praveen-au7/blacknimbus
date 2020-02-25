# 4)Build a very basic login system that takes in input from the username password. 
# checks if username is "Priyesh" and password is "password" and responds with:
#   Username Doesnot Exist
#   Passwords donot match
#   Entered the System

username=input('Enter your username here: ')
if username == 'Priyesh':
    password=input('Enter your password here: ')
    if password =='password':
        print('Entered the system')
    else:
        print('Password does not match')
else:
    print('Username does not exist')
