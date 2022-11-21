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

window.addEventListener("click", (e) => {
    // console.log((e.target.className = "notfbar").parentElement);
    if (e.target.className == "notification" || e.target.className == "notfbar" || e.target.className == "fa-regular fa-bell fa-fw") {
        notificationList.style.display = "inline"
    }else{
        notificationList.style.display = "none"
    }
})

for (let i = 0; i < clickOnNotf.length; i++) {
    clickOnNotf[i].addEventListener("click",() => {
        notfindicator[i].style.display = "none"
    })
    
}