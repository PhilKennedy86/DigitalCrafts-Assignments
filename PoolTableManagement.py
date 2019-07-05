import datetime

class TableGame:
    def __init__(self,table_number):
        self.table_number = table_number
        self.client_name = client_name
        self.available = True
        self.start_time = None
        self.end_time = None
        self.total_time = None
        self.cost = None

def table_request():
    table_number = int(input("What table did they receive?: "))
    client_name = input("What was the customer's name?: ")
    return table_number,client_name

def table_closeout():
    table_number = int(input("What table are you closing out?: "))
    return table_number

def clear_table(table_number):
    tables[table_number-1].client_name = None
    tables[table_number-1].available = True
    tables[table_number-1].start_time = None
    tables[table_number-1].end_time = None
    tables[table_number-1].total_time = None
    tables[table_number-1].cost = None

def prompt_menu():
    print("--------------------------------------------")
    print("Please select an option from the list below.")
    print("1 - Check out a table")
    print("2 - Close out a table")
    print("3 - Check the status of your tables")
    print("q - QUIT the program")
    answer = input("Enter your selection here: ")
    return answer

def print_table_status():
    for index in range(0,len(tables)):
        tables = tables[index]
        display_message = f"{index} - {tables[table_number]} - {tables[available]} - {tables[total_time]}"

table = ""
tables = []

for i in range(12):
    table = TableGame(i+1)
    tables.append(table)

answer = prompt_menu()
while answer != "q":
    if answer == "1":
        table_number,client_name = table_request()
        tables[table_number-1].client_name = client_name
        tables[table_number-1].available = False
        tables[table_number-1].start_time = datetime.datetime.now()
    elif answer == "2":
        table_number = table_closeout()
        tables[table_number-1].end_time = datetime.datetime.now()
        #tables[table_number-1].total_time = 
        #tables[table_number-1].cost = 
        #print(f"Table {table_number} was closed out. Their total time  played was {tables[table_number-1].total_time}")
        #print(f"Their bill is {tables[table_number-1].cost}")
        clear_table()
    elif answer == "3":
        print_table_status()
    else:
        print("Thank you. Please open the app again on the next business day to continue.")
