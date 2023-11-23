const randomDiv = document.querySelector("div");
const button = document.querySelector("button");

function getrandomNum() {
    const randomNum = Math.random();
    randomDiv.innerText = randomNum;
}

button.addEventListener("click", getrandomNum);