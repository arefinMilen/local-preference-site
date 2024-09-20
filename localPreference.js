var fontSize = document.getElementById("fontSize");
var bgColor = document.getElementById("bgColor");
var resetButton = document.getElementById("resetButton");

var mainElement = document.querySelector("main");

//load local storage value


//call function

changeFontSize =(event)=>{
const setFontSize =event.target.value; 
mainElement.style.fontSize=setFontSize
localStorage.setItem('fontSize',setFontSize)
};
//call function
changeBgColor = (event)=>{
    const setBgColor=event.target.value;
    mainElement.style.backgroundColor=setBgColor;
    localStorage.setItem('bgColor',setBgColor);
};
//clear local storage
clearLocalStorage = (event)=>{
    
    localStorage.removeItem('fontSize');
    localStorage.removeItem('bgColor');
};
//add event listener 

fontSize.addEventListener("change",changeFontSize)

bgColor.addEventListener("change",changeBgColor)
resetButton.addEventListener('click',clearLocalStorage)