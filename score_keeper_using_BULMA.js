

alert("ENJOY YOUR GAME");


const p1 = {
    score : 0 ,
    button : document.querySelector('#p1Button'),
    display :  document.querySelector('#p1Display')
}



const p2 = {
    score : 0 ,
    button : document.querySelector('#p2Button'),
    display :  document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;

let isGameOver = false;

function updateScores(player,opponent){
    
    if(!isGameOver){
        player.score += 1; 
    if(player.score === winningScore){
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');

        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;  
    }
}

p1.button.addEventListener('click',function(){

   updateScores(p1,p2)
})


p2.button.addEventListener('click',function(){

    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change',function(){
     winningScore = parseInt(this.value);
     reset();
     console.log(winningScore);
})

resetButton.addEventListener('click',reset);

function reset(){
    isGameOver = false;

    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false ;
    }

}

/*

setTimeout(() => {
    document.body.style.backgroundColor = 'red';

    
     setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
    
    
      setTimeout(() => {
          document.body.style.backgroundColor = 'blue';
    
}, 1000)
}, 1000)
}, 1000)

*/
//the above code can also be written as

const delayedColorChange = (newColor , delay ,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor ;
        doNext && doNext();
    }, delay);
}

delayedColorChange('orange',1000,() => {
  
    console.log('welcome to this game SCORE_KEEPER');
    delayedColorChange('yellow',3000 ,() =>{
        console.log('welcome to this game SCORE_KEEPER 2');
        delayedColorChange('red',3000 ,() =>{
            console.log('welcome to this game SCORE_KEEPER 3');
          
            delayedColorChange('blue',3000 ,() =>{
                console.log('welcome to this game SCORE_KEEPER 4');
                delayedColorChange('teal',3000 ,() =>{
                    console.log('welcome to this game SCORE_KEEPER 5');
                    
                });
            });
        });
    });
});


/////ASYNCHRONOUS JAVASCRIPT
/*
new Promise((resolve,reject) => {
    resolve();
})
*/

const fakeRequest = (url) =>{
    return new Promise((resolve,reject) =>{
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve('this comes under resolve');

            }
            reject('this comes under reject');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log('done with request');
    console.log('data is : ',data);
})
.catch((err) =>{
    console.log('oops! , there is some erroe',err);
})