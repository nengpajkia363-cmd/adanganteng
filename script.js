const button = document.getElementById("openButton");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");

button.addEventListener("click", function () {

    message.classList.remove("hidden");

    button.style.display = "none";

    createHeartExplosion();

});


function createHeartExplosion() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "floating-heart";

            heart.innerHTML = Math.random() > 0.5
                ? "❤️"
                : "💗";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (4 + Math.random() * 5) + "s";

            hearts.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 9000);

        }, i * 100);

    }

}


// Hati terus berjalan di background

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}, 700);