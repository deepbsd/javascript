"use strict;"

/*
	These are some notes of stuff to do:
	===================================
	1. Create an isCurrentQuestionRight() function
	done  2. Modify renderFinalPg() so it offers to try the quiz again.
	3. Question 9 has a very long answer that goofs up the form.  Try to shorten it.
    4. Remove the correctly_answered attribute from the questions list
    5. Consider adding capability to load other quizzes dynamically as objects as a user choice
       (such as a Baby Boomer TV Trivia Quiz, for example.)
    6. Reimplement backticks on #195 because IE doesn't recognize them
    7. I can restart the game by going state = initialState() and using a factory function for the state variable
*/


;(function() {

	// ###########  Single-State Data Object ###############
	// #####################################################
	var state = {
		currentPage: 'start', // possible values: 'start','question', 'final'
		currentQuestion: 0,
		scores: {
			right: [],
			wrong: []
		},

		questions: [
			{ 
			  id: 1,
			  question: "What is the first rule of the four (Jeff Cooper) firearms safety rules?",
			  options: [
				  {text: "A.  Never point a gun at something you don't want to shoot."},
				  {text: "B.  Always run away from guns."},
				  {text: 'C.  "All guns are always loaded."', correct: true},
				  {text: "D.  Keep your finger off the trigger until you're ready to destroy."},
				  {text: "E.  Call your lawyer before you handle any gun."},
			   ],
			  correctly_answered: false
			},

			{ 
				id: 2,
				question: "What is the second rule of the four (Jeff Cooper) firearms safety rules?",
				options: [
					{text: "A.  Be certain of your target."},
					{text: "B.  Unload all guns first thing."},
					{text: "C.  Keep your finger off the trigger until your sights are on target and you're ready to fire."},
					{text: "D.  Follow the orders of the safety officer."},
					{text: "E.  Never let the muzzle cover anything you don't intend to destroy.", correct: true},
				],
				correctly_answered: false
			},

			{ 
				id: 3,
				question: "What is the third fule of the four (Jeff Cooper) firearms safety rules?",
				options: [
					{text: "A.  Keep your finger off the trigger until your sights are on target and you're ready to fire.", correct: true},
					{text: "B.  Be certain of your target and what's behind it and in front of it."},
					{text: "C.  Be aware of local range rules and regulations."},
					{text: "D.  Follow relevant laws, both federal and local."},
					{text: "E.  Never let the muzzle cover anything you don't intend to destroy."},
				],
				correctly_answered: false
			},

			{ 
				id: 4,
				question: "What is the fourth rule of the four (Jeff Cooper) firearms safety rules?",
				options: [
					{text: "A.  Know where all pets and children are before you fire."},
					{text: "B.  Ensure guns are loaded before firing."},
					{text: "C.  Keep your finger off the trigger until your sights are on target and you're ready to fire."},
					{text: "D.  Be certain of your target and what's behind it and in front of it.", correct: true},
					{text: "E.  Be certain what will stop your bullet before you fire it."},
				],
				correctly_answered: false
			},

			{ 
				id: 5,
				question: "When holstering your handgun, where should your trigger finger be?",
				options: [
					{text: "A.  Inside the trigger guard."},
					{text: "B.  Indexed and outside the trigger guard.", correct: true},
					{text: "C.  On the front of the trigger guard."},
					{text: "D.  Curled inward toward the palm."},
					{text: "E.  Inside your ear canal."},
				],
				correctly_answered: false
			},

			{ 
				id: 6,
				question: "When reholstering your handgun, how fast should you go?",
				options: [
					{text: "A.  Go as fast as you can."},
					{text: "B.  Best to keep your gun out; wolves travel in packs!"},
					{text: "C.  There's no need to reholster quickly, take your time", correct: true},
					{text: "D.  You get bonus points for reholstering quicker than everyone else."},
					{text: "E.  Just lay the gun down on the ground."},
					],
				correctly_answered: false
			},

			{ 
				id: 7,
				question: "Someone hands you a firearm in a gun store.  What should you do first?",
				options: [
					{text: "A.  Handling the gun safely, ensure the gun is unloaded and clear.", correct: true},
					{text: "B.  Lock the slide to the rear or open the bolt."},
					{text: "C.  Drop the magazine, if there is one."},
					{text: "D.  Open the cylinder and press the extractor rod."},
					{text: 'E.  Ask that person, "Is it loaded?"'},
				],
				correctly_answered: false
			},

			{ 
				id: 8,
				question: "You're clearing a semi-auto handgun.  What are the first two steps?",
				options: [
					{text: "A.  Rack the slide once and drop the magazine."},
					{text: "B.  Drop the magazine and lock the slide to the rear.", correct: true},
					{text: "C.  Tap the magazine and lock the slide to the rear."},
					{text: "D.  Drop the magazine, rack the slide, and re-insert the magazine."},
					{text: "E.  Remove the magazine and look down the muzzle to see if there's a bullet in the chamber."},
				],
				correctly_answered: false
			},

			{ 
				id: 9,
				question: "You have a loaded double action revolver with the hammer cocked.  How can you make the gun safe?",
				options: [
					{text: "A.  Put your off-side thumb infront of the hammer and press the trigger, then unload as usual.", correct: true},
					{text: "B.  Put your strong-side thumb on the hammer and press the trigger to lower it gently onto the loaded chamber, then unload as usual."},
					{text: "C.  Just leave the hammber cocked back and unload as usual."},
					{text: "D.  Go ahead and press the trigger, the transfer bar will prevent ignition.  Then unload as usual."},
					{text: "E.  Never unload a double action revolver; it's already safe."},
				],
				correctly_answered: false
			},

			{ 
				id: 10,
				question: "Your 12-year-old son's friend shows him his father's gun.  What should your son do?",
				options: [
					{text: "A.  Call the police."},
					{text: "B.  Call you at work."},
					{text: "C.  Take the gun and demonstrate correct gun handling with the gun."},
					{text: "D.  Explain the Jeff Cooper safety rules to his friend and show him this online quiz."},
					{text: "E.  Politely ask his friend to not handle any guns without an adult present and leave immediately if the friend doesn't comply.", correct: true},
				],
				correctly_answered: false
			}
		]	// end of questions list
	}  // end of state object





	// #############  State Modification Functions #######################
	// ###################################################################


	function proceedQuiz() {

		if (state.currentPage === 'question' && state.currentQuestion < state.questions.length) {
			console.log('proceed reached, currentPage: ', state.currentPage);
			state.currentQuestion++;
			renderQuestion();
		} else {
			state.currentPage = 'final';
			console.log('proceed else, currentPage: ', state.currentPage);
			renderFinalPg();
		}
	}


	// ##############  Render Functions  ###################################
	// #####################################################################

	function scoreQuestion(questionNumber, selectedIndex) {    
		if (state.questions[questionNumber-1].options[selectedIndex].correct) {
			console.log("Correct!");
			state.scores.right.push(questionNumber);
		} else {
			state.scores.wrong.push(questionNumber);
			console.log("Nope! Sorry!");
		}
		//console.log('right: '+state.scores.right+'  wrong: '+state.scores.wrong);
	}


	function renderIntro() {
		var template = `<h1>Firearms Safety Quiz App</h1>
		<div class="safety-intro">
	    <p class="intro-text">Firearms safety is a hot topic these days.  And if you live with firearms, it's vital to be safe!  Test your knowledge with these 10 questions and see if you're safe or whether you've been corrupted by watching too many movies and TV shows!</p>
	    <form id="js-quizzapp-start-form">
	      <label for="quizapp-start">Start Your Safety Quiz?</label>
	      <input type="hidden" name="start-quiz" id="start-quiz">
	      <button type="submit">Start Quiz</button>
	    </form>
	    </div> <!-- end of safety-intro  -->
		`;
		//console.log(template);
		$(".quiz-container").html(template);



		$('#js-quizzapp-start-form').submit( function(ev) {
			ev.preventDefault();
			console.log('start pressed');
			state.currentPage = 'question';
			proceedQuiz();
		});
	}

	function renderFinalPg() {
		var template = '';
		template = '<h2>Your Results:</h2>';
		template += '<h4 class="results">@correct out of @total-questions!</h4>';
		template += '<form id="js-quizzapp-restart"><label for="quizapp-start"></label>'; 
		template += '<input type="hidden" name="restart-quiz" id="restart-quiz">';
		template += '<button type="submit">Restart Quiz</button></form>';
		template = template.replace('@correct', state.scores.right.length)
					.replace('@total-questions', state.questions.length);

		console.log(state.scores.right.length+' questions answered correctly...')
		$(".quiz-container").html(template);

		$('#restart-quiz').click( function() {
			window.top.reload();
		})
	}  // end of renderFinalPg()

	function renderQuestion() {
		// Template definition
		var template = '';
		template += '<h2 class="question-header">@question-number</h2>';
		template += '<h3 class="question-text">@question</h2>';
		template += '<form class="answer-list-form" value="text">';
		template += '@answer-options';
		template += '</form>';
		template += '<div class="answer-feedback"><div class="proceed"><form id="proceed">';
	    template += '<input type="hidden" name="proceed"><button class="proceed_button" type="submit">Proceed</button></form></div>';
	    template += '<div class="right-wrong">@question-correct-or-not</div>';
	    template += '<div class="score">@total-right-answers of @total-questions are correct.</div>';
	    template += '</div>  <!-- End of answer feedback -->';


		// Response processing (template + data)
		var results = template
			.replace('@question-number', state.currentQuestion)
			.replace('@question', state.questions[state.currentQuestion-1].question)
			.replace('@answer-options', renderQuestionAnswerOptions(state.questions[state.currentQuestion-1].options))
			.replace('@question-correct-or-not', function() { 
				if (state.currentQuestion === 1) {
					return 'No score yet.';
				} else if (state.scores.right.indexOf(state.currentQuestion-1) > -1){
					console.log('currentQuestion: '+state.currentQuestion);
					return 'Correct!';
				 } else {
				 	console.log('currentQuestion: '+state.currentQuestion);
				 	return 'Nope! Sorry!';
				 }})
			.replace('@total-right-answers', state.scores.right.length)
			.replace('@total-questions', state.questions.length);
  		
  		// Update the page
		$('.quiz-container').html(results);


		// Handle Proceed button being pressed
		$('button.proceed_button').click( function(ev) {
			ev.preventDefault();
			var questionID = state.currentQuestion;
			var chosenAnswer = $('#answer-list option:selected').index();
			scoreQuestion(questionID, chosenAnswer);
			proceedQuiz();
		});
	}  // end of renderQuestion()

	// Seperate function just for rendering the options list
	function renderQuestionAnswerOptions (optionsList) {
		var answerText = '';
		var innerTemplate = '';

		for (var n=0; n<optionsList.length; n++){
			answerText = optionsList[n].text
			innerTemplate += '<option class="answer-list-item" value="text">'+answerText+'</option>';
		}

		return '<select id="answer-list">'+innerTemplate+'</select>';

	}



	// ##############  Event Listeners  #####################################
	// ######################################################################

	// Do this when we load the page

	renderIntro();
})()



