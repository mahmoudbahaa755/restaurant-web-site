function clock() {
    let date = new Date();
    let hours = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59
    let flag = "AM"

    if(hours == 0) { // نهاراا
        hours = 12
    }
    if(hours > 12) { // الظهر
        hours = hours - 12;
        flag = "PM"
    }
    // 01:12:
    if(hours < 10) hours = "0" + hours;

    if(minutes < 10) minutes = "0" + minutes;

    if(seconds < 10) seconds = "0" + seconds

    document.querySelector('.clock').innerText = `${hours}: ${minutes}: ${seconds} : ${flag}` 
    
new Vue({

    el: '#open',
    data: {
        hour: 10,
        open: 'we are waiting u',
        close:'sorry we closed now but can take online orders ',
}
    }
);
    setTimeout(function() {
        clock()
    }, 1000)
}
clock()