let numButtonClicks = 0;
function buttonClicked(){
    alert("i am muhammad hamisu and i will chage nigeria!");
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}
