let no = Math.floor(Math.random() * 100) + 1;
let attemptLeft = 3;
// document.querySelector(".class").disabled = true;
function check() {
    const guess = Number(document.getElementById('guessInput').value);

    const resultMessage = document.getElementById('result');

    const attemptMessage = document.getElementById('attempt');
    
    if (attemptLeft > 1) {
        if (guess == no) {
            resultMessage.textContent = 'Congrats! crrct guess';
            disableGame();
        }
        else {
            attemptLeft--;
            resultMessage.textContent = guess > no ? "Higher " : "Lower";
            attemptMessage.textContent = `Attempt Left:${attemptLeft}`;
        }

    }
    else {
        resultMessage.textContent = "attempts exhausted";
        disableGame();
        }    
}
function disableGame() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button[onclick="check()"]').disabled = true;
}
function reset() {
    no = Math.floor(Math.random() * 100) + 1;
    attemptLeft = 3;
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button[onclick="check()"]').disabled = false;
    document.getElementById('result').textContent = '';
    document.getElementById('attempt').textContent=`Attempt Left:${attemptLeft}`;

}