$(document).ready(function() {
            generateQuote();
            $(".tweet").on('click',postTweet);
            $(".newQuote").on("click", generateQuote);
              
            });
    
        function generateQuote(){
          
              $.getJSON( "https://random-quote-generator.herokuapp.com/api/quotes/random", function( data ) {
                    var items = [];
                    //color vars
                    var randoArr = randoColor();

                    var value = "rgb(" + randoArr[0] + "," + randoArr[1] + "," + randoArr[2] + ")"
                    $.each( data, function( key, val ) {
                        items.push( "<li id='" + key + "'>" + val + "</li>" );
                    });
                    $("div > ul").remove();
                    $( "<ul/>", {
                        "class": "my-new-list",
                        html: items.join( "" )
                    }).appendTo( ".message" ).fadeIn().addClass("animated bounce").css("display","inline-block");
                    $("body").css("background-color",value);
                    var oldColor = $("body").css("background-color");
                    $("button").css("color",oldColor);
              });
        }
        function postTweet(){
            var currentQuote = $("li:nth-of-type(1)").html();
            var author = $("li:nth-of-type(2)").html();
            console.log(currentQuote);
            openURL('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + author));
        }
        function openURL(url){
            window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
        }
        function randoColor(){
            var colorArr = [];
            for(var i = 0; i<3;i++){
                colorArr.push(Math.round(Math.random()*255));
            }
            return colorArr;
        }