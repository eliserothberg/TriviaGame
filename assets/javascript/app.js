$(document).ready(function() {

//hide everything but the start div
  $(".navbar").hide();
  $('#game1').hide();
  $('#game2').hide();
  $('#game3').hide();
 
  //delineate global variables 

  var randomQuestion;
  var thisQuestion;
  var justOptions;
  var optionMix;
  var currentAnswer;
  var currentQuestion;
  var currentPic;
  var counter;
  var askedIt;
  var count = 31;
  var right = 0;
  var wrong = 0;
  var questionNumber= 0;
  var numberOfQuestions;
  num = 0;
  // var asked = [];
  // var alreadyUsed;
  keepPlaying = true;
  
  //questions in object array

    var questions = [

    {
      'question' : 'In Arizona it is illegal to: ',
      'answer': 'let a donkey sleep in a bathtub.',
      'pic': "http://i.giphy.com/70XY5U7YIYh2w.gif",
      options: ['let a donkey sleep in a bathtub.', 'dye a duckling blue and offer it for sale unless more than six are for sale at once.', 
      'snore unless all bedroom windows are closed and securely locked.', 
      'have a mustache if the bearer has a tendency to habitually kiss other humans.'],
      'asked': false
    },
    {
      'question' : 'In New Jersey it is illegal to: ',
      'answer': 'knit during the fishing season if you are male.',
      'pic': "http://i.giphy.com/1463o17ejELYqs.gif",
      options: ['knit during the fishing season if you are male.', 'eat more than three sandwiches at a wake.', 
      'fish alone if you are an unmarried woman.', 'shoot a rabbit from a motorboat.'],
      'asked': false
    },
    {
      'question' : 'In Tennessee it is illegal to: ',
     'answer': 'share your Netflix password.',
     'pic': "http://i.giphy.com/oenruB2DKC7p6.gif",
      options: [ 'share your Netflix password.', 'pretend that one’s parents are rich.', 'serve butter substitutes in state prisons.', 
      'sell milk at liquor stores.'],
      'asked': false
    },
    {
      'question' : 'In Florida it is illegal to: ',
     'answer': 'have sexual relations with a porcupine.',
     'pic': "http://i.giphy.com/AgUahGBekjsGY.gif",
      options: ['have sexual relations with a porcupine.',
      'refuse a person a glass of water.', 
      'wear a bullet-proof vest while committing a murder.', 
      'have an ice cream cone in your back pocket at any time.'],
      'asked': false
    },
    {
      'question' : 'In West Virginia it is illegal to: ',
      'answer': 'whistle underwater.',
      'pic': "http://i.giphy.com/3o6gEazMis7bkJ0Rj2.gif",
      options: ['whistle underwater.', 
      'cross state lines with a duck atop one\'s head.', 
      'bathe between the months of October and March.', 
      'use profanity in front of a dead body which lies in a funeral home or in a coroners office.'],
      'asked': false
    },
    {
      'question' : 'In Wyoming it is illegal to: ',
      'answer': 'take a picture of a rabbit from January to April without an official permit.',
      'pic': "http://i.giphy.com/Jjq7X7QCYuRUc.gif",
      options: ['take a picture of a rabbit from January to April without an official permit.', 'use a lasso to catch a fish.', 'sell a hollow log.', 
      'shoot any game other than whales from a moving automobile.'],
      'asked': false
    },
    ];

    //start game

      $('#startButton').click(function(){

        $('#start').hide();
        $('#game1').show();
        counter = setInterval(counting, 1000);
      });

    //get random question -write code to check for dupes??
        Array.prototype.randomize = function(questions) {
          var i = this.length, j, temp;
            while ( --i ) {
            j = Math.floor( Math.random() * (i - 1) );
              temp = this[i];
              this[i] = this[j];
              this[j] = temp;
            }
            return questions;
        }

        if(!keepPlaying) { 
          return true;
        }

        //take random question and break it into question and answers, randomizing the answers
      
        function nextQuestion() {

          thisQuestion = questions[num];
          justOptions = thisQuestion.options;
          numberOfQuestions = questions.length;
          
          console.log("thisQuestion question = " + questions[num].question)
   
          optionMix = justOptions;
          optionMix.randomize();

        //make chosen answer and corresponding questions and pics accessible

          currentAnswer = thisQuestion.answer;
          currentQuestion = thisQuestion.question;
          currentPic = thisQuestion.pic;

          console.log("currentAnswer = " + currentAnswer);
         
         // display  chosen answer and questions

          document.getElementById('question').innerHTML = currentQuestion;
          document.getElementById('choice1').innerHTML = optionMix[0];
          document.getElementById('choice2').innerHTML = optionMix[1];
          document.getElementById('choice3').innerHTML = optionMix[2];
          document.getElementById('choice4').innerHTML = optionMix[3];

      };

        // check to see if counter ran down, if so, display time up screen with gif and move on

      var counting = function() {
        count = count -1;

        document.getElementById('timer').innerHTML = 'Time remaining: ' + count + ' seconds';
           
           if (count == -1) {
              document.getElementById('timer').innerHTML = 'Time\'s up!';
        
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
              num++;
              keepPlaying = true;
              count = 33;
              return;
              }
      };

      // check to see if user answer is right or wrong, 
      // track how many questions asked, rinse repeat

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
            num++;
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
            num++;
            keepPlaying = true;
          }
          if (questionNumber === numberOfQuestions) {
            $('#game1').hide();
            $('#game3').delay(3000).fadeIn(100);
              clearInterval(counter);
              document.getElementById('win').innerHTML = 'Correct answers: ' + right + '.';
              document.getElementById('loss').innerHTML = 'Wrong answers: ' + wrong + '.';
              keepPlaying: false;
            }
            else {
              $('#game1').html(nextQuestion);
              $('#game1').delay(3000).fadeIn(100);

              document.getElementById('btw').innerHTML = 'P.S. Every answer option included here is illegal in at least one American state.';
        
              keepPlaying: true;
            }
            if (questionNumber +1) {
              count = 33;
            }
      });

    };

    compareGuess();
    nextQuestion();

    // restart game on restart button click
      function restart() {
          $('#restartButton').click(function() {
            $('#game3').hide();
            $('#game1').hide();
            $('#start').delay(1000).fadeIn(100);
            thisQuestion;
            count = 30;
            right = 0;
            wrong = 0;
            clearInterval(counter);
            questionNumber = 0;
            num = 0;
            keepPlaying = true;
         });
      };
      restart();

});