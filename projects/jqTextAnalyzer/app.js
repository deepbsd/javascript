'use strict;'

$( function textAnalyzer() {

	$('.js-user-text').submit( function(e) {
		e.preventDefault();  // prevent submit reloading the page

		// Get the text from the form
		var inText = $('#user-text').val().toLowerCase().replace(/[\n\r]/g, ' ');
		
		// get rid of punctuation and goofy characters (keep periods) 
		inText = inText.replace(/[\(\),'"]/g, '');
		
		// create an array of all words
		var allWords = inText.split(' ');


		//console.log(allWords);

		// store the total word count
		var wordCount = allWords.length;

		// function that counts unique words
		function uniqueWordCount(arr) {
			// create a word dictionary with counts of unique words
			var wordDict = {};
			for (var n=1; n<arr.length; n++) {
				if (arr[n] in wordDict) {
					wordDict[arr[n]] += 1;
				} else {
					wordDict[arr[n]] = 1;
				}
			}
			// delete this superfluous value at start of hash
			delete wordDict[""];  

			console.log(wordDict);

			return Object.keys(wordDict).length;
		}  // end of uniqueWordCount() function

		var uniqueWords = uniqueWordCount(allWords);

		function countSentences(text) {
			// We know there's only one sentence, but just in case...
			try { 
				var numOfSentences = text.match(/\./g || []).length; 
			}
			catch (TypeError) { 
				var numOfSentences = 1; 
			}
			return numOfSentences;
		}  // end of countSentences()
		
		var numberOfSentences = countSentences(inText);

		function getAvgWordLength(arr, wordCount) {
			//var wordLengths = [];
			var length;
			var sum = 0;
			for (var n=0; n<arr.length; n++) {
				length = arr[n].length;
				sum += length;
				//wordLengths.push(length);
			}
			return (sum/wordCount).toFixed(2);
			//return wordLengths/wordLengths.length;
		}

		// Replace values in HTML
		$("dl").removeClass("hidden");
		$("dd.js-wordcount").text(wordCount);
		$("dd.js-unique").text(uniqueWords);
		$("dd.js-avg-word-length").text(getAvgWordLength(allWords, wordCount));
		$("dd.js-avg-sentence-length").text((wordCount/numberOfSentences).toFixed(2));

	})  // end of submit(ev) function


});


/*   #####  This is the text  #####
Ground Control to Major Tom
Ground Control to Major Tom
Take your protein pills and put your helmet on
Ground Control to Major Tom (ten, nine, eight, seven, six)
Commencing countdown, engines on (five, four, three)
Check ignition and may God's love be with you (two, one, liftoff)
This is Ground Control to Major Tom
You've really made the grade
And the papers want to know whose shirts you wear
Now it's time to leave the capsule if you dare
"This is Major Tom to Ground Control
I'm stepping through the door
And I'm floating in a most peculiar way
And the stars look very different today
For here 
Am I sitting in a tin can
Far above the world
Planet Earth is blue
And there's nothing I can do
*/