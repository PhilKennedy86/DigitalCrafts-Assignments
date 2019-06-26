print("This program will give you the factorial of your number.")
number = int(input("What is your number?: "))

factorial = 1

for i in range(number):
    factorial = factorial * (i+1)

print(f"Your number's factorial is: {factorial}")