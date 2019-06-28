height = int(input("How many rows is your pyramid?: "))

bottom_length = (height*2)-1

for i in range(0,height):
    row_length = (i*2)-1
    spaces = int(bottom_length - row_length / 2)
    print(" " * spaces + "*" * row_length + " " * spaces)
