let count = 0;

const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        let styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }else if(styles.contains('decrease')){
            count--;
        }if(styles.contains('reset')){
            count = 0;
        }
        value.textContent = count;
    })
  })
