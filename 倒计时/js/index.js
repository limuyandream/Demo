// let btns = document.getElementsByClassName("timer_button");
// //let btns = document.querySelectorAll("timer_button");
// console.log(btns);
let countdown
let leftTime = document.querySelector('.display_time-left')
let backTime =document.querySelector('.display_end-time')
let buttons = document.querySelectorAll('.timer_button')
buttons.forEach(button => button.addEventListener('click',startTimer))

// displayLeftTime(300)
// disPlayEndTime(300)
//timer(300)

function displayLeftTime(seconds){
    const minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    let ifminZero = minutes<10 ?"0":""
    let ifZero = seconds<10 ?"0":""

    const myleftTime = ifminZero+minutes + ":" + ifZero+seconds


    leftTime.innerHTML = myleftTime
    document.title =myleftTime
}

function disPlayEndTime(endtime){
    
        let Backtime = new Date(endtime)
        const hours = Backtime.getHours()
        let ifhZero = hours<10? "0":""
        const minutes = Backtime.getMinutes()
        let ifmZero = minutes<10? "0":""
        const seconds = Backtime.getSeconds()
        let ifsZero = seconds<10 ? "0":""
        const myBacktime = "Your Back Time is  " +ifhZero+ hours + ":" + ifmZero + minutes + ":" + ifsZero + seconds
        // Backtime.textContent = myBacktime
        backTime.innerHTML = myBacktime
    
}

function timer(seconds){
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds*1000
    disPlayEndTime(then)
    displayLeftTime(seconds)
    // setInterval(function(){},1000)
    countdown = setInterval(() => {
        const timeLeft = Math.round((then - Date.now()) / 1000)
        if(timeLeft < 0){
            return
        }
        displayLeftTime(timeLeft)
    },1000)
}

function startTimer(){
    //buttons[0].getAttribute('data-time') //Method 1
    let sum =parseInt(this.dataset.time)
    timer(sum)
}

function pressKey(event){
    let times = document.getElementById("sb").value;
    let a = event.which || event.keyCode;
    if(a === 13){
        timer(times)
    }
}