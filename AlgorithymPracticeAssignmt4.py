array = [1,2,3,4,5]

new_array = []

def doublearray(array):
    new_array = array + array
    return new_array

new_array = doublearray(array)

print(new_array)