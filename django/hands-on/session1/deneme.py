def is_palindrom(string):
    return string[::-1].upper() == string.upper()
def palindrom(sentences):
    string =""
    for chr in sentences:
        if chr.isalnum():
            string += chr
    print(string)
    return is_palindrom(string)