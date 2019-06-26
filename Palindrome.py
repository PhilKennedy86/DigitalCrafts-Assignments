word = str(input("Enter a word: "))

reverse_word = ""

for i in range(len(word)-1,-1,-1):
    reverse_word = reverse_word + word[i] 

if word == reverse_word:
    print("Your word is a palindrome.")
else:
    print("Your word is not a palindrome.")