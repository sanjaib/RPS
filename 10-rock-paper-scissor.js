let score = JSON.parse(localStorage.getItem('score')) ||  {win : 0, lose : 0, tie : 0}

        
        // if(score === null){
        //     score={
        //         win: 0,
        //         lose: 0,
        //         tie : 0
        //     }
        // }

        function ofThree(usermove){
            const computerMove = pickComputerMove();
            let result = ''

            // ....................
            if(usermove === 'rock'){
                if(computerMove === 'rock'){
                result = 'tie'
                }
                else if(computerMove === 'paper'){
                    result = 'you lose'
                }
                else if(computerMove === 'scissor'){
                    result = 'you win'
                }
            }
            // ...................
            if(usermove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'you win'
                }
                else if(computerMove === 'paper'){
                    result = 'tie'
                }
                else if(computerMove === 'scissor'){
                    result = 'you lose'
                }
            }
            // ......................    
            if(usermove === 'scissor'){

                if(computerMove === 'rock'){
                result = 'you lose'
                }
                else if(computerMove === 'paper'){
                    result = 'you win'
                }
                else if(computerMove === 'scissor'){
                    result = 'tie'
                }
            }
            
            // .................. score
            if(result === 'you win'){
                score.win+=1
            }
            else if(result === 'you lose'){
                score.lose+=1
            }
            else if(result === 'tie'){
                score.tie+=1
            }
            
            localStorage.setItem('score',JSON.stringify(score))

            document.querySelector('.js-result').innerHTML= result
            
            updatescore()

            document.querySelector('.js-move').innerHTML=
            `your move
            <img src="images/${usermove}-emoji.png" class="move-class">
            computer move
            <img src=images/${computerMove}-emoji.png class="move-class">`
            
            
        }
        
        function updatescore(){
            document.querySelector('.js-score').innerHTML=`win ${score.win}...lose ${score.lose}....tie ${score.tie}`
        }

        function pickComputerMove(){
            let randomNumber = Math.random()
            let computerMove = ''
            if( randomNumber >=0 && randomNumber <1/3 ){
                computerMove = 'rock'
            }
            else if( randomNumber > 1/3 && randomNumber < 2/3 ){
                computerMove = 'paper'
            }
            else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissor'
            }
            return computerMove
        }