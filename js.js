var clickOnNotf = document.querySelectorAll(".notfbar")

var notificationBell = document.getElementById("notification")

var notificationList = document.querySelector(".notification")

var clickOnNotf = document.querySelectorAll(".notfbar")

var indicator = document.querySelector(".indicator")
var notfindicator = document.querySelectorAll(".notfindicator")

notificationBell.addEventListener("click" , () => {
    indicator.style.display = "none";
    if (notificationList.style.display == "inline") {
        notificationList.style.display = "none"
    }else{
        notificationList.style.display = "inline"
    }
})

for (let i = 0; i < clickOnNotf.length; i++) {
    clickOnNotf[i].addEventListener("click",() => {
        notfindicator[i].style.display = "none"
    })
    
}

