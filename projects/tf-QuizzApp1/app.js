"use strict;"

/*                          ***** Boomer TV Quizz App   *************
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
			  question: "Who was Arnold Ziffle?",
			  options: [
				  {text: "A.  Perry Mason's first client."},
				  {text: "B.  A crewman on McHale's Navy."},
				  {text: 'C.  A pet pig on Green Acres.', correct: true},
				  {text: "D.  The Sherriff on The Virginian."},
				  {text: "E.  Jethro's 2nd Cousin on The Bervely Hillbillies."},
			   ],
			  correctly_answered: false
			},

			{ 
				id: 2,
				question: "How did Dr. Loveless's family lose their land grant in California?",
				options: [
					{text: "A.  When Dr. Loveless was declared insane."},
					{text: "B.  When Jim and Arte arrested him."},
					{text: "C.  When The Wild Wild West got cancelled."},
					{text: "D.  When Dr. Loveless tried to blow up California."},
					{text: "E.  When California became a state.", correct: true},
				],
				correctly_answered: false
			},

			{ 
				id: 3,
				question: "How many seasons did Bonanza have?",
				options: [
					{text: "A.  14.", correct: true},
					{text: "B.  11."},
					{text: "C.  18."},
					{text: "D.  6."},
					{text: "E.  10."},
				],
				correctly_answered: false
			},

			{ 
				id: 4,
				question: "On Honey West, what kind of pet was Bruce?",
				options: [
					{text: "A.  Parrot."},
					{text: "B.  Chimpanzee."},
					{text: "C.  Great Dane."},
					{text: "D.  Ocelot.", correct: true},
					{text: "E.  Cobra."},
				],
				correctly_answered: false
			},

			{ 
				id: 5,
				question: "What actor played 'The Beaver'?",
				options: [
					{text: "A.  Tony Dow."},
					{text: "B.  Jerry Mathers.", correct: true},
					{text: "C.  Hugh Beaumont."},
					{text: "D.  Ken Osmond."},
					{text: "E.  Larry Mondello."},
				],
				correctly_answered: false
			},

			{ 
				id: 6,
				question: "What town was Gomer Pyle from?",
				options: [
					{text: "A.  Macon, Georgia."},
					{text: "B.  Limestone, Tennessee."},
					{text: "C.  Mayberry, North Carolina.", correct: true},
					{text: "D.  Bluebell, Alabama."},
					{text: "E.  Mount Airy, North Carolina."},
					],
				correctly_answered: false
			},

			{ 
				id: 7,
				question: "On Route 66, what kind of car did Tod and Buz drive around the country in?",
				options: [
					{text: "A.  Chevrolet Corvette.", correct: true},
					{text: "B.  VW 'Love Bus.'"},
					{text: "C.  They both had motorcycles."},
					{text: "D.  Lincoln Continentle."},
					{text: 'E.  Stutz Bearcat.'},
				],
				correctly_answered: false
			},

			{ 
				id: 8,
				question: "What was Robert Ironside's middle initial?",
				options: [
					{text: "A.  D."},
					{text: "B.  T.", correct: true},
					{text: "C.  E."},
					{text: "D.  C."},
					{text: "E.  P."},
				],
				correctly_answered: false
			},

			{ 
				id: 9,
				question: "What was Jonny Quest's dog's name?",
				options: [
					{text: "A.  Bandit.", correct: true},
					{text: "B.  Paddle foot."},
					{text: "C.  Clutch."},
					{text: "D.  Trigger."},
					{text: "E.  Lassie."},
				],
				correctly_answered: false
			},

			{ 
				id: 10,
				question: "What TV show first invented the Re-run?",
				options: [
					{text: "A.  Alfred Hitchcock Presents."},
					{text: "B.  You Asked For It."},
					{text: "C.  The Fugitive."},
					{text: "D.  Star Trek."},
					{text: "E.  I Love Lucy.", correct: true},
				],
				correctly_answered: false
			},
			{ 
				id: 11,
				question: "Illya Kuryakin would say Open Channel _?",
				options: [
					{text: "A.  B."},
					{text: "B.  D.", correct: true},
					{text: "C.  O."},
					{text: "D.  U."},
					{text: "E.  Q."},
				],
				correctly_answered: false
			},
			{ 
				id: 12,
				question: "Where does Paladin live in San Francisco?",
				options: [
					{text: "A.  Carlton Hotel.", correct: true},
					{text: "B.  The Fairmont."},
					{text: "C.  His ranch."},
					{text: "D.  He lives with family there."},
					{text: "E.  The Montedorro Hotel."},
				],
				correctly_answered: false
			},
			{ 
				id: 13,
				question: "What was the name of the space ship on Lost in Space?",
				options: [
					{text: "A.  Alpha Centauri."},
					{text: "B.  The Galileo."},
					{text: "C.  Jupiter 2.", correct: true},
					{text: "D.  The Astral Traveler."},
					{text: "E.  Zachary's Zoo."},
				],
				correctly_answered: false
			},
									{ 
				id: 14,
				question: "Who was prettier? Ginger or Mary Ann?",
				options: [
					{text: "A.  Mary Ann.", correct: true},
					{text: "B.  The Girl from UNCLE.", correct: true},
					{text: "C.  Yeoman Rand.", correct: true},
					{text: "D.  Laura Petrie.", correct: true},
					{text: "E.  Ginger.", correct: true},
				],
				correctly_answered: false
			},
			{ 
				id: 15,
				question: 'What would The Chief say about the "Cone of Silence"?',
				options: [
					{text: "A.  Open a hailing frequency."},
					{text: "B.  Check with Agent Larabee."},
					{text: "C.  The Claw stole it."},
					{text: "D.  No, Max.", correct: true},
					{text: "E.  Your shoe is ringing."},
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
		var template = `<h1>Baby Boomer TV Quiz App</h1>
		<div class="safety-intro">
	    <p class="intro-text">Those of us who grew up during the 1950's and 60's experienced the early days of television. In a way, these were the "golden days" of television. No matter when you were born, chances are you've grown to love at least some of these characters. Test your recollection of these fun old shows!</p>
	    <form id="js-quizzapp-start-form">
	      <label for="quizapp-start">Start Your Boomer TV Trivia Quiz?</label>
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



