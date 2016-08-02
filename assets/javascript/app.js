  $(document).ready(function() {
    // $('#flash').hide();

    $(".navbar").hide();
    $('#game1').hide();
    $('#game2').hide();
    $('#game3').hide();
    $('#game4').hide();
   
  var randomQuestion;
  var thisQuestion;
  var justOptions;
  var optionMix;
  var currentAnswer;
  var currentQuestion;
  var currentPic;
  var counter;
  var count = 6;
  var right = 0;
  var wrong = 0;
  var questionNumber= 0;
  var numberOfQuestions;
  keepPlaying = true;

  function newGame() {

    var questions = [

    {
      'question' : 'In Wyoming it is illegal to: ',
      'answer': 'take a picture of a rabbit from January to April without an official permit.',
      'pic': "http://placehold.it/350x150",
      // 'gif': '<iframe src="//giphy.com/embed/Jjq7X7QCYuRUc" width="480" height="201" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/funny-rabbit-Jjq7X7QCYuRUc">via GIPHY</a></p>',
      options: ['take a picture of a rabbit from January to April without an official permit.', 'use a lasso to catch a fish.', 'sell a hollow log.', 
      'shoot any game other than whales from a moving automobile.'],
      enabled: false,
      asked: 0
    },
    {
      'question' : 'In Tennessee it is illegal to: ',
     'answer': 'share your Netflix password.',
     'pic': "http://placehold.it/150x150",
      // 'gif': '<iframe src="//giphy.com/embed/oenruB2DKC7p6" width="480" height="306" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/netflix-and-chill-oenruB2DKC7p6">via GIPHY</a></p>',
      options: [ 'share your Netflix password.', 'pretend that one’s parents are rich.', 'serve butter substitutes in state prisons.', 
      'sell milk at liquor stores.'],
      enabled: false,
      asked: 0
    },
    {
      'question' : 'In Florida it is illegal to: ',
     'answer': 'have sexual relations with a porcupine.',
     'pic': "http://placehold.it/300x150",
      // 'gif': '<iframe src="//giphy.com/embed/AgUahGBekjsGY" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/funny-adventure-time-rolling-AgUahGBekjsGY">via GIPHY</a></p>',
      options: ['have sexual relations with a porcupine.',
      'refuse a person a glass of water.', 
      'wear a bullet-proof vest while committing a murder.', 
      'have an ice cream cone in your back pocket at any time.'],
      enabled: false,
      asked: 0
    },
    {
      'question' : 'In Arizona it is illegal to: ',
      'answer': 'let a donkey sleep in a bathtub.',
      'pic': "http://placehold.it/300x100",
      // 'gif': '<iframe src="//giphy.com/embed/srVgXpqz5QdTG" width="480" height="263" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/shrek-gif-donkey-srVgXpqz5QdTG">via GIPHY</a></p>',
      options: ['let a donkey sleep in a bathtub.', 'dye a duckling blue and offer it for sale unless more than six are for sale at once.', 
      'snore unless all bedroom windows are closed and securely locked.', 
      'have a mustache if the bearer has a tendency to habitually kiss other humans.'],
      enabled: false,
      asked: 0
    },
    {
      'question' : 'In West Virginia it is illegal to: ',
      'answer': 'whistle underwater.',
      'pic': "http://placehold.it/250x50",
      // 'gif': '', '<iframe src="//giphy.com/embed/3o6gEazMis7bkJ0Rj2" width="480" height="206" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/ferris-buellers-day-off-3o6gEazMis7bkJ0Rj2">via GIPHY</a></p>'
      options: ['whistle underwater.', 
      'cross state lines with a duck atop one\'s head.', 
      'bathe between the months of October and March.', 
      'use profanity in front of a dead body which lies in a funeral home or in a coroners office.'],
      enabled: false,
      asked: 0
    },
    {
      'question' : 'In New Jersey it is illegal to: ',
      'answer': 'knit during the fishing season if you are male.',
      'pic': "http://placehold.it/300x300",
      // 'gif': '<iframe src="//giphy.com/embed/1463o17ejELYqs" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/diy-crafts-1463o17ejELYqs">via GIPHY</a></p>',
      options: ['knit during the fishing season if you are male.', 'eat more than three sandwiches at a wake.', 
      'fish alone if you are an unmarried woman.', 'shoot a rabbit from a motorboat.'],
      enabled: false,
      asked: 0
    },
    ];


    var randomQuestion = Math.floor(Math.random() * questions.length);
    thisQuestion = questions[randomQuestion];
    justOptions = thisQuestion.options;
    numberOfQuestions = questions.length;

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
          return;
        }


      $('#startButton').click(function(){

        $('#start').hide();
        $('#game1').show();
        counter = setInterval(startTimer, 1000);
      });

          currentAnswer = thisQuestion.answer;
          currentQuestion = thisQuestion.question;
          currentPic = thisQuestion.pic;
         
          document.getElementById('question').innerHTML = currentQuestion;
          document.getElementById('choice1').innerHTML = optionMix[0];
          document.getElementById('choice2').innerHTML = optionMix[1];
          document.getElementById('choice3').innerHTML = optionMix[2];
          document.getElementById('choice4').innerHTML = optionMix[3];

      function startTimer() {
        count = count -1;
        document.getElementById('timer').innerHTML = 'Time remaining: ' + count + ' seconds';

        if (count == -1) {
         document.getElementById('timer').innerHTML = 'Time\'s up!';
      
          $('#game1').hide();
          $('#game1').empty();
          $('#game2').show();
            
          document.getElementById('yesNo').innerHTML = 'Sorry: ';
          document.getElementById('feedback').innerHTML = 'The correct answer is "' + currentAnswer + '".';
              
          $("#game2").delay(4000).fadeOut(100);
          wrong++;

          clearInterval(counter);
          questionNumber++;
          return;
          keepPlaying = false;
        }
      }

    function compareGuess() {
      $(document).on('click','.guessButton', function() {
        var compareGuess = this.innerHTML;
              
          if($(this).text().match(currentAnswer)) {
            clearInterval(counter);
               
            $('#game1').hide();
            $('#game1').empty();
            $('#game2').show();
            
            document.getElementById('yesNo').innerHTML = 'Yes!';
            document.getElementById('feedback').innerHTML = 'Congratulations! You are correct!';
            $("#game2").delay(4000).fadeOut(100);
            
            right++;
            questionNumber++;
            keepPlaying = false;
          }
          else if (!$(this).text().match(currentAnswer)){
            document.getElementById('wrongAnswer').innerHTML = 'Wrong answer, try again';
                
            wrong++;
            questionNumber++;
            keepPlaying = true;
          }
      });
    };
  
    compareGuess();

    function guessAgain() {
      if (questionNumber < numberOfQuestions) {
        // $('#game1').show();
        // count = 6;
        // currentQuestion = '';
        // currentAnswer = '';
        // counter = 0;
        // randomQuestion = '';
        // thisQuestion = '';
        // justOptions = '';
        // optionMix = '';
        // keepPlaying = true;
        console.log("again!");

      }
      // else {
      //   $('#game1').hide();
      //   $('#game2').hide();
      //   $('#game4').show();
      //    document.getElementById('win').innerHTML = 'You got ' + right + " answers correct.";
      //    document.getElementById('loss').innerHTML = 'You got ' + wrong + " answers wrong.";

      // }
    }
    
    guessAgain();
// };

  };
  
  newGame();
});

