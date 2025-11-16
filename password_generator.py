import random
import string


def generate_password(length=12, use_letters=True, use_numbers=True, use_symbols=True):
    characters = ""
    if use_letters:
        characters += string.ascii_letters
    if use_numbers:
        characters += string.digits
    if use_symbols:
        characters += string.punctuation

    if not characters:
        print("You must select at least one type of character!")
        return None

    password = ''.join(random.choice(characters) for _ in range(length))
    return password


def password_strength(password):
    length = len(password)
    strength = "Weak"
    if length >= 12 and any(c.isupper() for c in password) and any(c.islower() for c in password) and any(c.isdigit() for c in password) and any(c in string.punctuation for c in password):
        strength = "Strong"
    elif length >= 8:
        strength = "Moderate"
    return strength


# User input
length = int(input("Enter password length: "))
num_passwords = int(input("How many passwords to generate? "))
use_letters = input("Include letters? (y/n): ").lower() == 'y'
use_numbers = input("Include numbers? (y/n): ").lower() == 'y'
use_symbols = input("Include symbols? (y/n): ").lower() == 'y'

# Generate and save passwords
with open("passwords.txt", "a") as file:
    for _ in range(num_passwords):
        pwd = generate_password(length, use_letters, use_numbers, use_symbols)
        if pwd:
            strength = password_strength(pwd)
            print(f"{pwd} (Strength: {strength})")
            file.write(f"{pwd} (Strength: {strength})\n")

print(f"\nAll passwords saved to passwords.txt")
