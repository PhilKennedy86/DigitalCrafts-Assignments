tasklist = []

print("What would you like to do?")
print("- 1 will allow you to add a task")
print("- 2 will allow you to delete a task")
print("- 3 will display all tasks")
print("- q will exit this program")
status = input("Please enter your selection here: ")

while status != "q":
    if status == "1":
        print("-----------------------------")
        task_title = input("What is the title of your task: ")
        priority = input("What is the priority of the task (high/medium/low): ")
        task = {"Title": task_title, "Priority":priority}
        tasklist.append(task)
        print("-----------------------------")
        print("What would you like to do next\n1 - add a task \n2 - delete a task \n3 - display all task \nq - quit program")
        status = input("Enter selection here: ")
    elif status == "2":
        print("-----------------------------")
        for i in range(len(tasklist)):
            print(i+1,tasklist[i])
        print("Which task would you like to delete?")
        del_task = int(input("Enter the task number: "))
        del tasklist[del_task - 1]
        print("-----------------------------")
        print("What would you like to do next\n1 - add a task \n2 - delete a task \n3 - display all task \nq - quit program")
        status = input("Enter selection here: ")
    elif status == "3":
        print("-----------------------------")
        for i in range(len(tasklist)):
            print(i+1,tasklist[i]["Title"], " - ", tasklist[i]["Priority"])
        print("-----------------------------")
        print("What would you like to do next\n1 - add a task \n2 - delete a task \n3 - display all task \nq - quit program")
        status = input("Enter selection here: ")
    else:
        print("You have entered an unknown answer")
        print("What would you like to do next\n1 - add a task \n2 - delete a task \n3 - display all task \nq - quit program")
        status = input("Enter selection here: ")
