const colors = ['red', 'green', 'rgba(133,122,200)', '#f8f1f5', 'yellow', 'purple', 'orange', 'aqua'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //Take random number from 0-3
    const randomNumber = Math.floor(Math.random()*colors.length)
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber]
})