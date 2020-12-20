# Minner noe / oppsummering

# print("Hello World")

# not and or (priotiere)
# print([] or 1 and 0 and [1] or not 0)

# a = "henry"
# b = a.rstrip("y")
# c = a.rs
# print(a)
# ----------------------------
## List
## Dictionary
## Tuple
## Set

a = list()
b = ["ali", 1, -1, True, [1,2]]
print(type(a))
print(type(b))
print(b[1:4])
print(b[::-1])
# ----------------------------
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
thislist.pop(1)
print(thislist)
# ----------------------------
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model", "YOK")
print(x)

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)

# ----------------------------

thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)

thisset.add("orange")

print(thisset)

thisset.discard("bananaa")  # hata yok

print(thisset)

# ---------------------------
a = {1,2,3,10,32,100}
b = {1,2,32}
print(a.difference(b))
print(a.intersection(b))
print(a.union(b))

g = []
if g:
    print("yaz")
else:
    print("g er tom")

    # ---------------------------
# antall = int(input("Skriv det siste nummeret av Fibonacci-listen du vil se: "))
# listeen= []
# a = 1
# b = 1
# while True:
#     if a > antall: break
#     listeen.append(a)
#     if b > antall : break
#     listeen.append(b)
#     a = a+b
#     b = a+b

# print(listeen)
# if listeen[-1] != antall : print("{} er ikke et fibonacci nummer".format(antall))

# ----------------
def my_function():
    print("Hello world")
    return print("Hello world")

my_function()

def my_func2(*a):
    print(a)
    # return c
my_func2(2,3)

def my_func(**c):
    print(c)
    # return c
my_func(a=1,b=3)

# -------------------------
# def is_palindrom(string):
#     return string[::-1].upper() == string.upper()
# def palindrom(sentences):
#     string =""
#     for chr in sentences:
#         if chr.isalnum():
#             string += chr
#     print(string)
#     return is_palindrom(string)

from deneme import is_palindrom, palindrom

sentences = "ahmet"
# sentences = input("Please Enter a word or sentences: ")
if palindrom(sentences):
    print("{} is a palindrom".format(sentences))
else:
    print("{} is not a palindrom".format(sentences))

username = ",,,,...!!henry***"
x = username.strip(',.!*')
print("my name is: " +  x)

# ------------------------------------
l= (lambda x: x**2) (2)
print(l)

# -------------------------------
listem = [1,2,3,4,5,6,7,8,9]
even = filter(lambda x: x%2 == 0, listem)
print(list(even))