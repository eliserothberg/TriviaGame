$(document).ready(function() {
    // $('#flash').hide();

  $(".navbar").hide();
  $('#game1').hide();
  $('#game2').hide();
  $('#game3').hide();
   
  var randomQuestion;
  var thisQuestion;
  var justOptions;
  var optionMix;
  var currentAnswer;
  var currentQuestion;
  var currentPic;
  var counter;
  var count = 13;
  var right = 0;
  var wrong = 0;
  var questionNumber= 0;
  var numberOfQuestions;
  var asked = [];
  var alreadyUsed;
  keepPlaying = true;
  

  function newGame() {
     compareGuess();

    var questions = [

    {
      'question' : 'In Wyoming it is illegal to: ',
      'answer': 'take a picture of a rabbit from January to April without an official permit.',
      'pic': "http://i.giphy.com/Jjq7X7QCYuRUc.gif",
      options: ['take a picture of a rabbit from January to April without an official permit.', 'use a lasso to catch a fish.', 'sell a hollow log.', 
      'shoot any game other than whales from a moving automobile.'],
    },
    {
      'question' : 'In Tennessee it is illegal to: ',
     'answer': 'share your Netflix password.',
     'pic': "http://i.giphy.com/oenruB2DKC7p6.gif",
      options: [ 'share your Netflix password.', 'pretend that one’s parents are rich.', 'serve butter substitutes in state prisons.', 
      'sell milk at liquor stores.'],
    },
    {
      'question' : 'In Florida it is illegal to: ',
     'answer': 'have sexual relations with a porcupine.',
     'pic': "http://i.giphy.com/AgUahGBekjsGY.gif",
      options: ['have sexual relations with a porcupine.',
      'refuse a person a glass of water.', 
      'wear a bullet-proof vest while committing a murder.', 
      'have an ice cream cone in your back pocket at any time.'],
    },
    {
      'question' : 'In Arizona it is illegal to: ',
      'answer': 'let a donkey sleep in a bathtub.',
      'pic': "http://i.giphy.com/70XY5U7YIYh2w.gif",
      options: ['let a donkey sleep in a bathtub.', 'dye a duckling blue and offer it for sale unless more than six are for sale at once.', 
      'snore unless all bedroom windows are closed and securely locked.', 
      'have a mustache if the bearer has a tendency to habitually kiss other humans.'],
    },
    {
      'question' : 'In West Virginia it is illegal to: ',
      'answer': 'whistle underwater.',
      'pic': "http://i.giphy.com/3o6gEazMis7bkJ0Rj2.gif",
      options: ['whistle underwater.', 
      'cross state lines with a duck atop one\'s head.', 
      'bathe between the months of October and March.', 
      'use profanity in front of a dead body which lies in a funeral home or in a coroners office.'],
    },
    {
      'question' : 'In New Jersey it is illegal to: ',
      'answer': 'knit during the fishing season if you are male.',
      'pic': "http://i.giphy.com/1463o17ejELYqs.gif",
      options: ['knit during the fishing season if you are male.', 'eat more than three sandwiches at a wake.', 
      'fish alone if you are an unmarried woman.', 'shoot a rabbit from a motorboat.'],
    },
    ];

      $('#startButton').click(function(){

        $('#start').hide();
        $('#game1').show();
        counter = setInterval(counting, 1000);
      });
        countdown = count
        console.log("countdown: " + countdown);
  

      nextQuestion = function() {

        var randomQuestion = Math.floor(Math.random() * questions.length);
          thisQuestion = questions[randomQuestion];
          justOptions = thisQuestion.options;
          numberOfQuestions = questions.length;
          console.log("thisQuestion: " + thisQuestion);

        Array.prototype.randomize = function() {
          var i = this.length, j, temp;
            while ( --i ) {
            j = Math.floor( Math.random() * (i - 1) );
              temp = this[i];
              this[i] = this[j];
              this[j] = temp;
            }
        }
   
        var optionMix = justOptions;
        optionMix.randomize();

        if(!keepPlaying) { 
          return true;
        }

          currentAnswer = thisQuestion.answer;
          currentQuestion = thisQuestion.question;
          currentPic = thisQuestion.pic;
         
          document.getElementById('question').innerHTML = currentQuestion;
          document.getElementById('choice1').innerHTML = optionMix[0];
          document.getElementById('choice2').innerHTML = optionMix[1];
          document.getElementById('choice3').innerHTML = optionMix[2];
          document.getElementById('choice4').innerHTML = optionMix[3];

          
      };

      var counting = function() {
        count = count -1;

        document.getElementById('timer').innerHTML = 'Time remaining: ' + count + ' seconds';
          if (count == -1) {
            document.getElementById('timer').innerHTML = 'Time\'s up!';
        
            console.log("counter: " + counter + " count = " + count + " countdown = " + countdown)
            $('#game1').hide();
            $('#game2').show();
            
            document.getElementById('yesNo').innerHTML = 'Too late! ';
            document.getElementById('feedback').innerHTML = 'The correct answer is "' + currentAnswer + '"';
            document.getElementById('answer-pic').src = currentPic;
              
            $("#game2").delay(3000).fadeOut(100);
            $('#game1').html(nextQuestion);
            console.log("thisQuestion answer: " + thisQuestion.answer);
            $('#game1').delay(3500).fadeIn(100);
            wrong++;
            questionNumber++;
            keepPlaying = true;
            return;
            }

            clearInterval(counter);

      };
      
      function compareGuess() {

        $(document).on('click','.guessButton', function() {    
          if($(this).text().match(currentAnswer)) {
        
            $('#game1').hide();
            $('#game2').show();
            
            document.getElementById('yesNo').innerHTML = 'Yes!';
            document.getElementById('feedback').innerHTML = 'Congratulations! You are correct!';
            document.getElementById('answer-pic').src = currentPic;

            $("#game2").delay(3000).fadeOut(100);
            
            right++;
            questionNumber++;
            keepPlaying = true;
          }
          else if (!$(this).text().match(currentAnswer)){
            $('#game1').hide();
            $('#game2').show();

            document.getElementById('yesNo').innerHTML = 'Sorry- wrong answer!';
            document.getElementById('feedback').innerHTML = 'The correct answer is "' + currentAnswer + '"';
            document.getElementById('answer-pic').src = currentPic;
            $("#game2").delay(3000).fadeOut(100);
            wrong++;
            questionNumber++;
            keepPlaying = true;
          }

            if(questionNumber === numberOfQuestions) {
              $('#game1').hide();
              $('#game3').delay(3500).fadeIn(100);
              document.getElementById('win').innerHTML = 'Correct answers: ' + right + '.';
              document.getElementById('loss').innerHTML = 'Wrong answers: ' + wrong + '.';
              keepPlaying: false;
            }
            else {
               $('#game1').html(nextQuestion);
                console.log("thisQuestion answer: " + thisQuestion.answer);
                $('#game1').delay(3500).fadeIn(100);

                console.log("in game1 div = : " + currentQuestion);
                document.getElementById('btw').innerHTML = 'P.S. Everything listed here is illegal in at least one American state.';
                console.log("again- wrong: " + wrong + " and right: " + right);
                console.log("questions asked = : " + questionNumber + " + and numberOfQuestions: " + numberOfQuestions);
                keepPlaying: true;
              // clearInterval(counter);
                }
      });

    };

   
    nextQuestion();
  };
  //               function newGame() {
  //                 $('#retry').click(function () {
  //                 var randomQuestion;
  //                 var thisQuestion;
  //                 var justOptions;
  //                 var optionMix;
  //                 var currentAnswer;
  //                 var currentQuestion;
  //                 var currentPic;
  //                 var counter;
  //                 var count = 13;
  //                 var right = 0;
  //                 var wrong = 0;
  //                 var questionNumber= 0;
  //                 var numberOfQuestions;
  //                 var asked = [];
  //                 var alreadyUsed;
  //                 keepPlaying = true;
  //                 });
  //               };

  newGame();
});