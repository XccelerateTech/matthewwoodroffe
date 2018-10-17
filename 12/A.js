
    $(function () {

        // ===============================
        // iterators
        // ===============================

        let iterator = 0;

        let modulusNum = 0;

        let player1 = 0;

        let player2 = 0;

        //===============================
        // Functions to place images on click
        // ===============================

        $( "#topLeft" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#topLeft" ).addClass("squareImage");
            } else {
                $("#topLeft" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1TopLeft = 1;
            } else {
                player2 = player2 + 1;
                player2TopLeft = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
            console.log(`This is player1TopLeft ${player1TopLeft}`);
            console.log(`This is player2TopLeft ${player2TopLeft}`);
        });
        $( "#topMiddle" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#topMiddle" ).addClass("squareImage");
            } else {
                $("#topMiddle" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1TopCenter = 1;
            } else {
                player2 = player2 + 1;
                player2TopCenter = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#topRight" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#topRight" ).addClass("squareImage");
            } else {
                $("#topRight" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1TopRight = 1;
            } else {
                player2 = player2 + 1;
                player2TopRight = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#middleLeft" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#middleLeft" ).addClass("squareImage");
            } else {
                $("#middleLeft" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1CenterLeft = 1;
            } else {
                player2 = player2 + 1;
                player2CenterLeft = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#middleCenter" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#middleCenter" ).addClass("squareImage");
            } else {
                $("#middleCenter" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1CenterCenter = 1;
            } else {
                player2 = player2 + 1;
                player2CenterCenter = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#middleRight" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#middleRight" ).addClass("squareImage");
            } else {
                $("#middleRight" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1CenterRight = 1;
            } else {
                player2 = player2 + 1;
                player2CenterRight = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#bottomLeft" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#bottomLeft" ).addClass("squareImage");
            } else {
                $("#bottomLeft" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1BottomLeft = 1;
            } else {
                player2 = player2 + 1;
                player2BottomLeft = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#bottomCenter" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#bottomCenter" ).addClass("squareImage");
            } else {
                $("#bottomCenter" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1BottomCenter = 1;
            } else {
                player2 = player2 + 1;
                player2BottomCenter = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });
        $( "#bottomRight" ).click(function() {
            modulusNum = iterator % 2;
            iterator = iterator + 1;
            console.log(`This is the iterator ${iterator}`);
            console.log(`This is the modulusNum ${modulusNum}`)
            if(modulusNum == 0) {
                $("#bottomRight" ).addClass("squareImage");
            } else {
                $("#bottomRight" ).addClass("circleImage");
            }
            if (modulusNum == 0) {
                player1 = player1 + 1;
                player1BottomRight = 1;
            } else {
                player2 = player2 + 1;
                player2BottomRight = 1;
            }
            console.log(`This is player1 ${player1}`);
            console.log(`This is player2 ${player2}`);
        });

        //===============================
        // Variables used to find out who wins
        // ===============================

        let player1TopLeft = 0;
        let player2TopLeft = 0;

        let player1TopCenter = 0;
        let player2TopCenter = 0;

        let player1TopRight = 0;
        let player2TopRight = 0;

        let player1CenterLeft = 0;
        let player2CenterLeft = 0;

        let player1CenterCenter = 0;
        let player2CenterCenter = 0;

        let player1CenterRight = 0;
        let player2CenterRight = 0;

        let player1BottomLeft = 0;
        let player2BottomLeft = 0;

        let player1BottomCenter = 0;
        let player2BottomCenter = 0;

        let player1BottomRight = 0;
        let player2BottomRight = 0;

        //================================
        // If/else statements testing all possible conditions to find out who wins
        // ===============================

        $("#tickTackToeTable").click(function() {
            if((player1TopLeft == 1) && (player1TopCenter == 1) && (player1TopRight == 1)) {
                alert(`Player 1 Wins!`);
            } else if (player1CenterLeft == 1 && player1CenterCenter == 1 && player1CenterRight == 1) {
                alert(`Player 1 Wins!`);
            } else if (player1BottomLeft == 1 && player1BottomCenter == 1 && player1BottomRight == 1) {
                alert(`Player 1 Wins!`);
            } else if (player1TopLeft == 1 && player1CenterLeft == 1 && player1BottomLeft == 1) {
                alert(`Player 1 Wins!`);
            } else if (player1TopCenter == 1 && player1CenterCenter == 1 && player1BottomCenter == 1) {
                alert(`Player 1 Wins!`);
            } else if (player1TopRight == 1 && player1CenterRight == 1 && player1BottomRight) {
                alert(`Player 1 Wins!`);
            } else if (player1TopLeft == 1 && player1CenterCenter == 1 && player1BottomRight == 1) {
                alert(`Player 1 Wins!`);
            } else if (player1TopRight == 1 && player1CenterCenter == 1 && player1BottomLeft == 1) {
                alert(`Player 1 Wins!`);
            } else if (player2TopLeft == 1 && player2TopCenter == 1 && player2TopRight == 1) {
                alert(`Player 2 Wins!`);
            } else if (player2CenterLeft == 1 && player2CenterCenter == 1 && player2CenterRight == 1) {
                alert(`Player 2 Wins!`);
            } else if (player2BottomLeft == 1 && player2BottomCenter == 1 && player2BottomRight == 1) {
                alert(`Player 2 Wins!`);
            } else if (player2TopLeft == 1 && player2CenterLeft == 1 && player2BottomLeft == 1) {
                alert(`Player 2 Wins!`);
            } else if (player2TopCenter == 1 && player2CenterCenter == 1 && player2BottomCenter == 1) {
                alert(`Player 2 Wins!`);
            } else if (player2TopRight == 1 && player2CenterRight == 1 && player2BottomRight) {
                alert(`Player 2 Wins!`);
            } else if (player2TopLeft == 1 && player2CenterCenter == 1 && player2BottomRight == 1) {
                alert(`Player 2 Wins!`);
            } else if (player2TopRight == 1 && player2CenterCenter == 1 && player2BottomLeft == 1) {
                alert(`Player 2 Wins!`);
            } else if (player1 == 5) {
                alert(`No-body won :'(`);
            }
        });

        //================================
        // reset button
        // ===============================


        $( "#resetButton" ).click(function() {
            $( "#topLeft" ).removeClass("squareImage");
            $( "#topLeft" ).removeClass("circleImage");
            $( "#topMiddle" ).removeClass("squareImage");
            $( "#topMiddle" ).removeClass("circleImage");
            $( "#topRight" ).removeClass("squareImage");
            $( "#topRight" ).removeClass("circleImage");
            $( "#middleLeft" ).removeClass("squareImage");
            $( "#middleLeft" ).removeClass("circleImage");
            $( "#middleCenter" ).removeClass("squareImage");
            $( "#middleCenter" ).removeClass("circleImage");
            $( "#middleRight" ).removeClass("squareImage");
            $( "#middleRight" ).removeClass("circleImage");
            $( "#bottomLeft" ).removeClass("squareImage");
            $( "#bottomLeft" ).removeClass("circleImage");
            $( "#bottomCenter" ).removeClass("squareImage");
            $( "#bottomCenter" ).removeClass("circleImage");
            $( "#bottomRight" ).removeClass("squareImage");
            $( "#bottomRight" ).removeClass("circleImage");
        });
    })