// Data
let datetxt = "23 Oct";
let datatxtletter = "Người đẹp Chang mãi keo số 1 thế giới, chúc chị iu mãi happi happi nhaaa";
let titleLetter = "To you";

let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let charArrTitle = titleLetter.split('');
let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
const music = document.getElementById('bg-music');

let timeDatetxt;
setTimeout(function () {
    timeDatetxt = setInterval(function () {
        if (currentIndex < charArrDate.length) {
            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex++;
        }
        else {
            let i = document.createElement("i");
            i.className = "fa-solid fa-star"
            document.querySelector(".date__of__birth").prepend(i)
            document.querySelector(".date__of__birth").appendChild(i.cloneNode(true))
            clearInterval(timeDatetxt)
        }
    }, 100)
}, 12000)

var intervalContent;
var intervalTitle;

let mailBox = document.querySelector('.mail')
let boxmail = document.querySelector('.boxMail')
var closeMail = document.querySelector('.close-mail')

// Mở hộp thư khi click vào nút
mailBox.onclick = function () {
    mailBox.classList.toggle('active')
    boxmail.classList.add('active')
}

// Đóng hộp thư khi click vào nút X
closeMail.addEventListener('click', function () {
    boxmail.classList.remove('active')
})
