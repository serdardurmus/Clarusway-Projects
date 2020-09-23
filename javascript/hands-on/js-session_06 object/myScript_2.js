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