//variables for correct/incorrect answers and unanswered questions
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var count = 60;

//trivia questions stored in variables
var question1 = "Where did Goku become a Super Saiyan?";
var question2 = "Who is the first person Goku met on his adventure?";
var question3 = "What is Goku's grandpa's name?";
var question4 = "What is Goku's grand-daughter's name?";
var question5 = "Which dragon ball did Goku's grandpa give him?";
var question6 = "Who is the final villain of Dragon Ball Z?";
var question7 = "How did Goku defeat this villain?";





//writing the trivia questions to the divs using JQuery
$('#question1').text(question1);
$('#question2').text(question2);
$('#question3').text(question3);
$('#question4').text(question4);
$('#question5').text(question5);
$('#question6').text(question6);
$('#question7').text(question7);

//function to show the questions and choices
function showQuestions()
{
	$('#trivia').show();
	$('.btn-lg').show();
	$('#question1').show(question1);
	$('#question2').show(question2);
	$('#question3').show(question3);
	$('#question4').show(question4);
	$('#question5').show(question5);
	$('#question6').show(question6);
	$('#question7').show(question7);
}
//wouldn't work when i called it after restarting the game
// function timer()
// {
// 	$('#timer').show();
// 	 timer = setInterval(function() 
// 	{
// 	    $("#timer").html(count--);
// 	    console.log(count);
// 	    if(count == -1) //its 1 second behind, so in order to have it stop at 0, i made it -1
// 	    { 
// 	    	clearInterval(timer);
// 	    	gameOver();
// 	    };
// 	}, 1000);
// }

//function to hide the questions and choices
function hideQuestions()
{
	$("#trivia").hide();
	$('.btn-lg').hide();
	$('.btn-xl').hide();
	$('#question1').hide(question1);
	$('#question2').hide(question2);
	$('#question3').hide(question3);
	$('#question4').hide(question4);
	$('#question5').hide(question5);
	$('#question6').hide(question6);
	$('#question7').hide(question7);
}

function results()
{
	$('.results').html("Numbers of correct answers: " + correct 
	+ "<br>" + "Number of incorrect answers: " +  incorrect 
	+ "<br>" + "Number of unanswered questions: " + unanswered);
	$('.results').show();
	$('.btn-xl').show();
	$('#timer').hide();
	clearInterval(timer)
}

function reset()
{
	correct=0;
	incorrerct=0;
	unanswered=0;
	count = 60;
}
//starts game upon clicking start button
function startGame()
{

	$('.btn-primary').hide();
	showQuestions();
	//when i tried to make a timer function, it wouldn't let me call it more than once after a restart
	$('#timer').show();
	 timer = setInterval(function() 
	{
	    $("#timer").html(count--);
	    console.log(count);
	    if(count == -1) //its 1 second behind, so in order to have it stop at 0, i made it -1
	    { 
	    	clearInterval(timer);
	    	gameOver();
	    };
	}, 1000);
}

//switches to game over screen, shows stats
function gameOver()
{
	//not DRY at all, but because the name is different for each question i had to do it like this
	if($('input:radio[name=option1]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option1]:checked').val() == 1 || $('input:radio[name=option1]:checked').val() == 2 || $('input:radio[name=option1]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}

	if($('input:radio[name=option2]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option2]:checked').val() == 1 || $('input:radio[name=option2]:checked').val() == 2 || $('input:radio[name=option2]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}	

	if($('input:radio[name=option3]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option3]:checked').val() == 1 || $('input:radio[name=option3]:checked').val() == 2 || $('input:radio[name=option3]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}

	if($('input:radio[name=option4]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option4]:checked').val() == 1 || $('input:radio[name=option4]:checked').val() == 2 || $('input:radio[name=option4]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}

	if($('input:radio[name=option5]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option5]:checked').val() == 1 || $('input:radio[name=option5]:checked').val() == 2 || $('input:radio[name=option5]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}

	if($('input:radio[name=option6]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option6]:checked').val() == 1 || $('input:radio[name=option6]:checked').val() == 2 || $('input:radio[name=option6]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}

	if($('input:radio[name=option7]:checked').val() == 3)
	{
		correct++;
	}
	else if($('input:radio[name=option7]:checked').val() == 1 || $('input:radio[name=option7]:checked').val() == 2 || $('input:radio[name=option7]:checked').val() == 4)
	{
		incorrect++;
	}
	else
	{
		unanswered++;
	}

	console.log("wrong answers: " + incorrect);
	console.log("right answers: " + correct);
	console.log("unanswered: " + unanswered);
	hideQuestions()
	results();

}

//restarts game when restart button is clicked
function restart()
{
	reset();
	$('.btn-xl').hide();
	$('.btn-primary').show();
	$('.results').empty();
	
	console.log(correct,incorrect,unanswered)
}


//hides questions when web page loads
hideQuestions();
$('.btn-primary').on("click",startGame);
$('.btn-lg').on("click",gameOver);
$('.btn-xl').on("click",restart);







