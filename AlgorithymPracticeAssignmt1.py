dup_names = ["Alex","John","Mary","Steve","John","Steve"]

print("The original list is:")
print(dup_names)

non_dup_names = []

for i in dup_names:
    if i not in non_dup_names:
        non_dup_names.append(i)

print("Your list without duplicates is:")
print(non_dup_names)