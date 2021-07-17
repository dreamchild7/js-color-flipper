function myFunction(){

    var myColor = ["red", "green", "yellow", "blue"];
    var randomColor = myColor[Math.floor(Math.random() * myColor.length)];

    document.querySelector("body").style.backgroundColor = randomColor;
}

document.getElementById("btn").addEventListener('click', myFunction)



