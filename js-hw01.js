//check
var result = "";
for (var i = 0; result.length <8; i++) {
  result+="#";
	console.log(result);
}

///fizzbuzz

for (var i = 1; i <= 100; i++) {
  	if (!(i%3) && !(i%5)) {
      console.log("FizzBuzz")
    } else if (!(i%3)) {
      console.log("Fizz");
    } else if (!(i%5)) {
      console.log("Buzz");
    } else {
      console.log(i);
}}

///
for (var i = 1; i <= 8; i++) {
  var line="";
  for (var j = 1; line.length <= 8; j++) {
    if (j % 2 == 0 ) {
      if (i % 2 == 0) {
      line +=" ";
      } else {
        line +="#";
      }
    } else {
      if (i % 2 == 0) {
      	line +="#";
      } else {
        line +=" ";
      }
    }
  }
console.log(line);
}




///
var result ="";
for (var i=0; i<8; i++) {
  for (var j = 0; j < 8; j++) {
    if ( (i + j) % 2 == 0) {
      result += "#";
    } else {
      result += " ";
    }
  } result += "\n";
}
console.log(result);


///
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(-20, -40));
