
        var myTotal = 0 ;
        var randomNumber = getRandomInt(30,100)
        var wins = 0;
        var losses = 0;
        var characters = {
            garnet: Math.floor((Math.random() * 10) + 1),
            amethyst: Math.floor((Math.random() * 10) + 1),
            pearl: Math.floor((Math.random() * 10) + 1),
            steven: Math.floor((Math.random() * 10) + 1)
        };
        
        Object.keys(characters).map(character => {
            $("#" + character).data("character", character);
        }); 
        
    
        $("#randomNumber").text("My Number: " +randomNumber)

            


        $(".gem").on("click", function () {
            var character = $(this).data("character");
            var value = characters[character];
            myTotal+=value;
            $("#myTotal").text("My Total: " + myTotal);
            
            if(myTotal === randomNumber) {
                wins++;
                $("#wins").text("wins: " + wins);
                Object.keys(characters).map(character => {
                    characters[character] = Math.floor((Math.random() * 10) + 1);
                }); 
                randomNumber = getRandomInt(30,100);
                $("#randomNumber").text("My Number: " + randomNumber);
                myTotal = 0;
                $("#myTotal").text(myTotal);


            
            }
            if(myTotal > randomNumber) {
                losses++;
                $("#losses").text("losses: " + losses);
                Object.keys(characters).map(character => {
                    characters[character] = Math.floor((Math.random() * 10) + 1);
                }); 
                randomNumber = getRandomInt(30,100);
                $("#randomNumber").text("My Number: " + randomNumber);
                myTotal = 0;
                $("#myTotal").text(myTotal);

                
                

            }

            

            
            

        });

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

       
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }