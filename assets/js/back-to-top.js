// If user scroll height of page more than 40,  the button will display
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display = "block";
    } else {     /*Button not display if heigh of body less than 40*/
        document.getElementById("myBtn").style.display = "none";
    }
}

//If user click to button, it will be back to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}