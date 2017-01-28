// #############  About this project...
/*               Most Frequent Drill
In this drill, you need to implement a function named mostFrequentWord. This
function takes a single argument, words. Words is an array of lowercase
strings, with punctuation stripped out.

mostFrequentWord should return the word that appears the most times in words.
If there's a tie, it should return the word that comes first alphabetically.

We recommend using an object to keep track of word frequencies in this drill.

This drill features tests that automatically run when the JS Bin first loads
and when you click the "Run" button in the console. You'll know your code is
working when the tests pass.

Note: JSBin: http://jsbin.com/qiwedit/3/edit?js,console
*/

function mostFrequentWord(words) {
  wordDict = {};
  for (n=0;n<words.length;n++) {
    if (words[n] in wordDict) {
      wordDict[words[n]] += 1;
    }else{
      wordDict[words[n]] = 1;
    }  // end if clause

  }  // end for loop


  var currMaxWord = words[0];
  var currMaxCount = wordDict[currMaxWord];


  for (var word in wordDict) {

    if (wordDict[word] > currMaxCount) {
      currMaxWord = word;
      currMaxCount = wordDict[word];
    }
    //console.log(currMaxWord+': '+wordDict[currMaxWord]);
  }  // end forloop

  return currMaxWord;

}







/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


// `getTokens` returns an alphabetically sorted list of words

(function testMostFrequentWord() {
 var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';

 var expected = 'major';
 var actual = mostFrequentWord(getTokens(spaceOddityText));
 if (expected === actual) {
   console.log('SUCCESS: `mostFrequentWord` is working');
 }
 else {
   console.log('FAILURE: `mostFrequentWord` is not working');
 }
})();
