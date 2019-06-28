array = [0,1,2,3,4,5,6,7,8]

sum_array = 0
sum = 0
for i in range(0,10):
    sum += i
for i in range(0,len(array)):
    sum_array += array[i]


print("The number missing (0-9) is:")
print(sum - sum_array)