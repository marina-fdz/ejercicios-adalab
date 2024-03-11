let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Add the following function to set the personalized greeting. 

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
    myHeading.textContent = `Hello stranger`;
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Greetings, ${myName}`;
    }
}

// Add the following condition block after the function declaration. We could call this initialization code, as it structures the app when it first loads.

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Greetings, ${storedName}`;
}

//Put this onclick event handler (below) on the button.

myButton.onclick = () => {
    setUserName();
}