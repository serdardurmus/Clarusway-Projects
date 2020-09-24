// Bare Test
{
    var colors = ["Red", "Green", "Yellow", "Green" , "Blue", "Green", "Pink", "Green", "Black", "Green"];
    var x = colors.lastIndexOf("Green", 8);
    console.log(x);
}
{
    var x = ["9","25","111","John","James","Aaron"];
    console.log (x.sort());
}
{
    var colors = ["Red", "Yellow", "Green"];
    colors.push("Red");
    colors.shift();
    document.write(colors);
}
{
    function test(x, y) {
        if(x>y) {
        document.write(x);
        } else {
        document.write(y);
        }
        }
        test(7, 3) // 7
}
{
    function num() {
        return 5 + 7;
        }
    console.log(typeof(num));
}

// så rart :)
{
    var num = [7, 12, 143, 54, 37]
    num.sort(function (a,b){
    return b - a});
    console.log(num);
}


// bare prøv
{
    var dog = {
        name:"Rocky",
        legs: 4,
        tail: 1,
        qualities: ["loyalty","companionship"],
        bark: function() {
            console.log("woof");
        },
        result: function() {
            return this.name +" has "+ this.legs + " legs.";
        }
    };
    console.log("");
    console.log(dog.name);
    dog.bark();
    console.log(dog.result());
}


{
    class Dog {
        constructor(name, foot) {
          this.dogName = name;
          this.foot = foot;
        }
      }
      myDog = new Dog("Buldog") 
      console.log(myDog.dogName);
}
{
    class Dog {
        constructor(name, foot) {
          this.dogName = name;
          this.foot = foot;
        }
        current(){
           return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
        }
      }
      myDog = new Dog("Buldog", 4) 
      // document.getElementById("content").innerHTML = myDog.current();
      console.log(myDog);
      console.log(myDog.current());
}