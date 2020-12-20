# class Dog:
#     def __init__(self, name, age):
#         print("Wouvv")
#         self.name = name
#         self.age = age
#     def speak(self):
#         print("Hi I'm ", self.name, " and I'm ", self.age, " years old")
    

# dog_1 = Dog("lessi", 5)
# dog_2 = Dog("pablo", 6)

# print(dog_1.speak())
# print(Dog.speak(dog_1))

# ------------------------------------------------------------------------

# class Mouse:
#     def __init__(self, name, age):
#         print("Wouvv")
#         self.name = name
#         self.age = age
#     def speak(self):
#         print("Hi I'm ", self.name, " and I'm ", self.age, " years old")

# class Cat:
#     def __init__(self, name, age, color):
#         print("Wouvv")
#         self.name = name
#         self.age = age
#         self.color = color

#     def speak(self):
#         print("Hi I'm ", self.name, " and I'm ", self.age, " years old")

# class Deve(Cat):
#     pass

# deve = Deve("Pammuk", 5, "blue")
# print(deve.color)

# ------------------------------------------------------------
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def speak(self):
        print("Hi I'm", self.name, "and I'm", self.age, "years old.")
# class Cat:
#     def __init__(self, name, age, color):
#         self.name = name
#         self.age = age
#         self.color = color
#     def speak(self):
#         print("Hi I'm", self.name, "and I'm", self.age, "years old.", self.color)
class Pitbull(Dog):
    def __init__(self, name, age, color):
        super().__init__(name, age)
        self.color = color
pdog_1 = Pitbull("kangal", 5, "red")
pdog_1.speak()