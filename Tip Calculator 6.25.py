print("Tip Calculator")
bill = float(input("What was your bill?: "))
tip_percent = float(input("What percent would you like to tip?: "))

def total_tip(bill, tip_percent):
    tip = (tip_percent / 100) * bill
    return(tip)

totalbill = bill + total_tip(bill, tip_percent)   

print(f"Your total bill including tip is: {totalbill}")