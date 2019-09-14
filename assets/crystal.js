
        var myTotal = 0 ;
        var randomNumber = getRandomInt(30,100)
        var wins = 0;
        var losses = 0;
        var garnet = Math.floor((Math.random() * 10) + 1)
        var amethyst = Math.floor((Math.random() * 10) + 1)
        var pearl = Math.floor((Math.random() * 10) + 1)
        var steven = Math.floor((Math.random() * 10) + 1)


        $("#garnet").data("count", garnet)
        $("#amethyst").data("count", amethyst)
        $("#pearl").data("count", pearl)
        $("#steven").data("count", steven)
    
        $("#randomNumber").text("My Number: " +randomNumber)

            


        $(".gem").on("click", function () {
            var value = $(this).data("count");
            myTotal+=value;
            $("#myTotal").text("My Total: " + myTotal);
            
            if(myTotal === randomNumber) {
                wins++;
                $("#wins").text("wins: " + wins);
                garnet = Math.floor((Math.random() * 10) + 1);
                amethyst = Math.floor((Math.random() * 10) + 1);
                pearl = Math.floor((Math.random() * 10) + 1);
                steven = Math.floor((Math.random() * 10) + 1);
                randomNumber = getRandomInt(30,100);
                $("#randomNumber").text("My Number: " + randomNumber);
                myTotal = 0;
                $("#myTotal").text(myTotal);


            
            }
            if(myTotal > randomNumber) {
                losses++;
                $("#losses").text("losses: " + losses);
                garnet = Math.floor((Math.random() * 10) + 1);
                amethyst = Math.floor((Math.random() * 10) + 1);
                pearl = Math.floor((Math.random() * 10) + 1);
                steven = Math.floor((Math.random() * 10) + 1);
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