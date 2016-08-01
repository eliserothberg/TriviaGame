$(document).ready(function() {
  $(".navbar").hide();
  $('#game1').hide();
  $('#game2').hide();
  $('#game3').hide();
  $('#game4').hide();
 
var randomQuestion;
var currentQuestion = null;
var thisQuestion;
var justOptions;
var optionMix;
var options;
var questionIndex= 0;


  
  var questions = [


  {
    'question' : 'T question',
    'answer': 'T-answer',
    'state': 'Texas',
    options: ['T-answer', 'T-wrong1', 'T-wrong2', 'T-wrong3'],
    enabled: false,
    asked: 0
  },
  {
    'question' : 'M question',
    'answer': 'M-answer',
    'state': 'Montana',
    options: ['M-answer', 'M-wrong1', 'M-wrong2', 'M-wrong3'],
    enabled: false,
    asked: 0
  },
  {
    'question' : 'C question',
    'answer': 'C-answer',
    'state': 'California',
    options: ['C-answer','C-wrong1', 'C-wrong2', 'C-wrong3'],
    enabled: false,
    asked: 0
  },
  {
    'question' : 'D question',
    'answer': 'D-answer',
    'state': 'delaware1',
    options: ['D-answer','D-wrong1', 'D-wrong2', 'D-wrong3'],
    enabled: false,
    asked: 0
  },
  {
    'question' : 'O question',
    'answer': 'O-answer',
    'state': 'Oklahoma',
    options: ['O-answer', 'O-wrong1', 'O-wrong2', 'O-wrong3'],
    enabled: false,
    asked: 0
  },
  {
    'question' : 'N question',
    'answer': 'N-answer',
    'state': 'Nebraska',
    options: ['N-answer', 'N-wrong1', 'N-wrong2', 'N-wrong3'],
    enabled: false,
    asked: 0
  },
  ];

  var randomQuestion = Math.floor(Math.random() * questions.length);
  thisQuestion = questions[randomQuestion];
  justOptions = thisQuestion.options;

  Array.prototype.randomize = function()
  {
  var i = this.length, j, temp;
  while ( --i )
  {
    j = Math.floor( Math.random() * (i - 1) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    }
  }
 
  var optionMix = justOptions;
  optionMix.randomize();

  console.log("justOptions: " + justOptions);
  console.log("thisQuestion options = " + thisQuestion.options);
  console.log("thisQuestion options = " + thisQuestion.options[0]);
  console.log("optionMix = " + optionMix[0] + optionMix[1]);
 
    console.log("questions length: " + questions.length);
    console.log("thisQuestion answer and state: " + thisQuestion.answer + " " + thisQuestion.state);
    console.log("randomQuestion: " + randomQuestion);

    $('#startButton').click(function(){
      $('#start').hide();
      $('#game1').show();
      setTimeout(startTimer, 1000 * 10);

  function startTimer() {
    $('#timer').html('<h2></h2>');
    console.log(timer);
    }
    
        document.getElementById('choice1').innerHTML = optionMix[0];
        document.getElementById('choice2').innerHTML = optionMix[1];
        document.getElementById('choice3').innerHTML = optionMix[2];
        document.getElementById('choice4').innerHTML = optionMix[3];

    
});


function compareGuess() {
$(document).on('click','.guessButton', function() {
    var value = $(this).find('input:checked').val();
    if(thisQuestion) {
        if(thisQuestion.answer === value) {
            console.log("correct");
            // showQuestion();
        } else {
            console.log("Nope!");
        }
    }

    return false;
  });
};
compareGuess();
});

