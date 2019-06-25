print("This app will add your two numbers together")

num_1 = int(input("What is your first number?: "))
num_2 = int(input("What is your second number?: "))

def addnumbers(num_1, num_2):
    funcsum = num_1 + num_2
    return(funcsum)

sum = addnumbers(num_1, num_2)

print(f"The sum of your two numbers is {sum}")