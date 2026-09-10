/* =========================================
   ELEMENT
========================================= */

const button = document.getElementById("openButton");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const opening = document.getElementById("opening");


/* =========================================
   OPENING CINEMATIC
========================================= */

window.addEventListener("load", () => {

    // Pastikan opening berada di depan
    if (opening) {
        opening.style.display = "flex";
    }

});


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    const starsContainer =
        document.querySelector(".stars");

    if (!starsContainer) return;

    // Bersihkan bintang lama
    starsContainer.innerHTML = "";

    for (let i = 0; i < 70; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            (1.5 + Math.random() * 3) + "s";

        starsContainer.appendChild(star);
    }
}


/* =========================================
   OPEN MESSAGE
========================================= */

if (button) {

    button.addEventListener("click", () => {

        // Tampilkan pesan
        if (message) {
            message.classList.remove("hidden");
        }

        // Hilangkan tombol
        button.style.display = "none";

        // Efek ledakan hati
        createHeartExplosion();

        // Tambahkan lebih banyak hati
        createExtraHearts();

    });

}


/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion() {

    const heartTypes = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💞",
        "💘"
    ];

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "explosion-heart";

            heart.innerHTML =
                heartTypes[
                    Math.floor(
                        Math.random() *
                        heartTypes.length
                    )
                ];


            // Arah ledakan
            const angle =
                Math.random() *
                Math.PI * 2;

            const distance =
                150 +
                Math.random() * 400;


            const x =
                Math.cos(angle) *
                distance;

            const y =
                Math.sin(angle) *
                distance;


            heart.style.setProperty(
                "--x",
                x + "px"
            );

            heart.style.setProperty(
                "--y",
                y + "px"
            );


            // Ukuran random
            heart.style.fontSize =
                (14 + Math.random() * 25)
                + "px";


            // Rotasi random
            heart.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            document.body.appendChild(
                heart
            );


            // Hapus setelah animasi
            setTimeout(() => {

                heart.remove();

            }, 2200);


        }, i * 25);

    }
}


/* =========================================
   FLOATING HEART
========================================= */

function createFloatingHeart() {

    if (!hearts) return;

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    const heartTypes = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💞"
    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    // Posisi horizontal random
    heart.style.left =
        Math.random() * 100 + "vw";


    // Ukuran random
    heart.style.fontSize =
        (12 + Math.random() * 28)
        + "px";


    // Kecepatan random
    heart.style.animationDuration =
        (5 + Math.random() * 6)
        + "s";


    // Delay random
    heart.style.animationDelay =
        Math.random() + "s";


    hearts.appendChild(heart);


    // Hapus agar halaman tidak berat
    setTimeout(() => {

        heart.remove();

    }, 13000);

}


/* =========================================
   EXTRA HEARTS
========================================= */

function createExtraHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 120);

    }

}


/* =========================================
   NORMAL FLOATING HEARTS
========================================= */

setInterval(() => {

    createFloatingHeart();

}, 500);


/* =========================================
   INITIAL HEARTS
========================================= */

for (let i = 0; i < 12; i++) {

    setTimeout(() => {

        createFloatingHeart();

    }, i * 300);

}


/* =========================================
   CREATE STARS
========================================= */

createStars();