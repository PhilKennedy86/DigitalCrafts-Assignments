print("Please provide the program 5 numbers.")
number_1 = int(input("What is number 1?: "))
number_2 = int(input("What is number 2?: "))
number_3 = int(input("What is number 3?: "))
number_4 = int(input("What is number 4?: "))
number_5 = int(input("What is number 5?: "))

numbers = [number_1,number_2,number_3,number_4,number_5]

highest_number = 0

for i in numbers:
    if i > highest_number:
        highest_number = i

print(f"The highest number that you entered is:")
print(highest_number)

lowest_number = highest_number

for n in numbers:
    if n < lowest_number:
        lowest_number = n

print("The lowest number that you entered is:")
print(lowest_number)