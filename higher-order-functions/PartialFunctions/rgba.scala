
def rgbCreator(red: String, green: String, blue: String, alpha: String): String = "rgba(" + red + "," + green + "," + blue + "," + alpha + ");";

val halfOpacity = rgbCreator(_:String, _:String, _:String, ".5");
halfOpacity("204", "160", "29");


val shadeOfGrey = rgbCreator("0", "0", "0", _:String);
shadeOfGrey(".1");

