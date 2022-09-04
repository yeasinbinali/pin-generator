function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    const pinInput = document.getElementById('pin-input');
    pinInput.value = pin;
}

document.getElementById('calc-number').addEventListener('click', function(event){
    const number = event.target.innerText;
    const inputNumber = document.getElementById('input-number');
    if(isNaN(number)){
        if(number == 'C'){
            inputNumber.value = '';
        }else if(number == '<'){
            inputNumber.value = inputNumber.value.slice(0, -1);
        }
    }else{
        inputNumber.value += number;
    }
})

function submit(){
    const pinInput = document.getElementById('pin-input').value;
    const inputNumber = document.getElementById('input-number').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailed = document.getElementById('notify-failed');

    if(pinInput == inputNumber){
        notifySuccess.style.display = 'block';
        notifyFailed.style.display = 'none';
    }else{
        notifySuccess.style.display = 'none';
        notifyFailed.style.display = 'block';
    }
}