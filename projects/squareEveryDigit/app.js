

function squareEveryDigit(num) {
  var string = num.toString();
  var numlist = [];
  var temp;
  for (var n=0; n<string.length; n++) {
    temp = string.charAt(n);
    temp = Number.parseInt(temp, 10);
    temp = Math.pow(temp, 2);
    numlist.push(temp);
    //console.log(numlist.join(''));
  }
  var answer = numlist.join('');
  answer = Number.parseInt(answer, 10);
  console.log(answer)
  return answer;

}

var num = 9119;
console.log(squareEveryDigit(num)+" is a "+typeof squareEveryDigit(num));


