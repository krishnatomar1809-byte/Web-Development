for(let i = 0; i < 30; i++){

    let snow = document.createElement("div");

    snow.innerHTML = "❄";
    snow.classList.add("snow");

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 3 + Math.random() * 5 + "s";
    snow.style.fontSize = 10 + Math.random() * 15 + "px";
    snow.style.opacity = 0.3 + Math.random() * 0.7;

    document.body.appendChild(snow);
}