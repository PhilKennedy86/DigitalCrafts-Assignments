print("This program will tell you if the number you provide is prime or not")

number = int(input("Please enter a number: "))

if number > 1:
    for y in range(2,number):
        if ((number % y) == 0):
            print(f"{number} is not a prime number")
            break
    else:
        print(f"{number} is a prime number")
else:
    print(f"{number} is a prime number")