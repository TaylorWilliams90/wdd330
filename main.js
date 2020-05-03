window.onload = function() {
    setTimeout(() => {
        const quiz = [
            ["What is 10 + 10?", "20"],
            ["What color is the sky?", "blue"],
            ["what soda was President Monson favoite?", "Dr. Pepper"]
        ];
        function start(quiz){
            // initialize score
            let score = 0;

            //main game loop
            for(const [q,a] of quiz){
                const res = ask(q);
                check(res,a);
            }
            // end loop

            gameOver();

            //function declarations
            function ask(q){
                return prompt(q);
            }

            function check(res,a){
                
                if(res === a){
                    alert('1 point Gryffindor!')
                    score++;

                }else {
                    alert(`Wrong! the right answer is ${a}`);
                }
            }

            function gameOver(){
                //This is the end of the game
                alert(`Game Over, Your Score is: ${score}`)
            }
        }
        start(quiz);
    }, 100);
  };