"use strict;"

// ###########  Single-State Data Object ###############
// #####################################################
var state = {
	currentQuestion: undefined,  // id no
	currentPage: 'start', // possible values: 'start', 'quizz', 'final'
	answers: {
		correct: [0,2,6,8],
		incorrect: [1,3,4,5,7,9]
	},
	questions: [
		{ 
		  id: 1,
		  question: "What is the first rule of the four (Jeff Cooper) firearms safety rules?",
		  options: [
		  	  {text: "A. Never point a gun at something you don't want to shoot."},
			  {text: "B. Always run away from guns."},
			  {text: 'C. "All guns are always loaded."', correct: true},
			  {text: "D. Keep your finger off the trigger until you're ready to destroy."},
			  {text: "E. Call your lawyer before you handle any gun."},
		  ],
		  answer: "c",
		  correctly_answered: false
		},

		{ 
			id: 2,
			question: "What is the second rule of the four (Jeff Cooper) firearms safety rules?",
			options: [
				{text: "A. Be certain of your target."},
				{text: "B. Unload all guns first thing."},
				{text: "C. Keep your finger off the trigger until your sights are on target and you're ready to fire."},
				{text: "D. Follow the orders of the safety officer."},
				{text: "E. Never let the muzzle cover anything you don't intend to destroy.", correct: true},
			],
			answer: "e",
			correctly_answered: false
		},

		{ 
			id: 3,
			question: "What is the third fule of the four (Jeff Cooper) firearms safety rules?",
			options: [
				{text: "A. Keep your finger off the trigger until your sights are on target and you're ready to fire.", correct: true},
				{text: "B. Be certain of your target and what's behind it and in front of it."},
				{text: "C. Be aware of local range rules and regulations."},
				{text: "D. Follow relevant laws, both federal and local."},
				{text: "E. Never let the muzzle cover anything you don't intend to destroy."},
			],
			answer: "a",
			correctly_answered: false
		},

		{ 
			id: 4,
			question: "What is the fourth rule of the four (Jeff Cooper) firearms safety rules?",
			options: [
				{text: "A. Know where all pets and children are before you fire."},
				{text: "B. Ensure guns are loaded before firing."},
				{text: "C. Keep your finger off the trigger until your sights are on target and you're ready to fire."},
				{text: "D. Be certain of your target and what's behind it and in front of it.", correct: true},
				{text: "E. Be certain what will stop your bullet before you fire it."},
			],
			answer: "d",
			correctly_answered: false
		},

		{ 
			id: 5,
			question: "When holstering your handgun, where should your trigger finger be?",
			options: [
				{text: "A. Inside the trigger guard."},
				{text: "B. Indexed and outside the trigger guard.", correct: true},
				{text: "C. On the front of the trigger guard."},
				{text: "D. Curled inward toward the palm."},
				{text: "E. Inside your ear canal."},
			],
			answer: "b",
			correctly_answered: false
		},

		{ 
			id: 6,
			question: "When reholstering your handgun, how fast should you go?",
			options: [
				{text: "A. Go as fast as you can."},
				{text: "B. Best to keep your gun out; wolves travel in packs!"},
				{text: "C. There's no need to reholster quickly, take your time", correct: true},
				{text: "D. You get bonus points for reholstering quicker than everyone else."},
				{text: "E. Just lay the gun down on the ground."},
			],
			answer: "c",
			correctly_answered: false
		},

		{ 
			id: 7,
			question: "Someone hands you a firearm in a gun store.  What should you do first?",
			options: [
				{text: "A. Handling the gun safely, ensure the gun is unloaded and clear.", correct: true},
				{text: "B. Lock the slide to the rear or open the bolt."},
				{text: "C. Drop the magazine, if there is one."},
				{text: "D. Open the cylinder and press the extractor rod."},
				{text: 'E. Ask that person, "Is it loaded?"'},
			],
			answer: "a",
			correctly_answered: false
		},

		{ 
			id: 8,
			question: "You're clearing a semi-auto handgun.  What are the first two steps?",
			options: [
				{text: "A. Rack the slide once and drop the magazine."},
				{text: "B. Drop the magazine and lock the slide to the rear.", correct: true},
				{text: "C. Tap the magazine and lock the slide to the rear."},
				{text: "D. Drop the magazine, rack the slide, and re-insert the magazine."},
				{text: "E. Remove the magazine and look down the muzzle to see if there's a bullet in the chamber."},
			],
			answer: "b",
			correctly_answered: false
		},

		{ 
			id: 9,
			question: "You have a loaded double action revolver with the hammer cocked.  How can you make the gun safe?",
			options: [
				{text: "A. Put your off-side thumb infront of the hammer and press the trigger, then unload as usual.", correct: true},
				{text: "B. Put your strong-side thumb on the hammer and press the trigger to lower it gently onto the loaded chamber, then unload as usual."},
				{text: "C. Just leave the hammber cocked back and unload as usual."},
				{text: "D. Go ahead and press the trigger, the transfer bar will prevent ignition.  Then unload as usual."},
				{text: "E. Never unload a double action revolver; it's already safe."},
			],
			answer: "a",
			correctly_answered: false
		},

		{ 
			id: 10,
			question: "Your 12-year-old son's friend shows him his father's gun.  What should your son do?",
			options: [
				{text: "A. Call the police."},
				{text: "B. Call you at work."},
				{text: "C. Take the gun and demonstrate correct gun handling with the gun."},
				{text: "D. Explain the Jeff Cooper safety rules to his friend and show him this online quiz."},
				{text: "E. Politely ask his friend to not handle any guns without an adult present and leave immediately if the friend doesn't comply.", correct: true},
			],
		}
	]
};

// #############  State Modification Functions #######################
// ###################################################################

function renderPage () {
	var template = '<h1>Welcome to my app</h1>';
	// put some code here that render the dynamic part of the page
	if (state.userStartedQuizz) {  if startpage render start_page
									if question_page render_questions
										else render_final
		// render the start page
	}
	else {
		// render question
	}
	$('body').html(template);
}

function renderStartPage() {
	var template = '<p>Please click Start to participate.</p><p><button class="start-button">Start</button></p>';
	return template
}


function renderQuestionPage(questions) {
	// for (index in questions) {
	// 	var question = questions[index]
	// }
	// var template = '';
	// template += '<h2 class="question-header">@questionNo</h2>';
	// template += '<h3 class="question-text">@questionText</h2>';
	// template += '<form class="answer-list">';
	// template += '<select>';
	// template += '<option class="answer-list-item" value="a">@option_a</option>';
	// template += '<option class="answer-list-item" value="b">@option_b</option>';
	// template += '<option class="answer-list-item" value="c">@option_c</option>';
	// template += '<option class="answer-list-item" value="d">@option_d</option>';
	// template += '<option class="answer-list-item" value="e">@option_e</option>';
	// template += '</select></form>';
	// template += '<div class="answer-feedback"><div class="proceed"><form class="proceed">';
 //    template += '<input type="hidden" name="proceed"><button type="submit">Proceed</button></form></div>';
 //    template += '<div class="right-wrong">@correctOrNot</div>';
 //    template += '<div class="score">@numberRight of 10 correct.</div></div>  <!-- End of answer feedback -->';
 	return 'I am in the question page.';
}

/*
- [ ] Loop through the answersList and build select box HTML contents
*/
// var renderAnswerSelectBox = function (answersList) {
// 	var result
// 	answersList = [
// 		{text: "Call the police."},
// 		{text: "Call you at work."},
// 		{text: "Take the gun and demonstrate correct gun handling with the gun."},
// 		{text: "Explain the Jeff Cooper safety rules to his friend and show him this online quiz."},
// 		{text: "Politely ask his friend to not handle any guns without an adult present and leave immediately if the friend doesn't comply.", correct: true},
// 	];


// 	// code here

// 	// result = '<select>(...)</select>';
// }



// ##############  Render Functions  ###################################
// #####################################################################





// ##############  Event Listeners  #####################################
// ######################################################################





