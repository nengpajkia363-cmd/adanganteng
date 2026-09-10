const button = document.getElementById("openButton");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let musicStarted = false;
let musicMuted = false;


/* =========================================
   MUSIK
========================================= */

async function startMusic() {

    if (!music) {
        console.error("Audio element tidak ditemukan.");
        return;
    }

    try {

        music.volume = 0.35;
        music.muted = false;

        await music.play();

        musicStarted = true;
        musicMuted = false;

        updateMusicButton();

        console.log("🎵 Musik berhasil diputar!");

    } catch (error) {

        console.error("❌ Musik gagal diputar:", error);

    }
}


/* =========================================
   TOMBOL MUSIK
========================================= */

if (musicButton) {

    musicButton.addEventListener("click", async () => {

        if (!music) {
            return;
        }

        if (!musicStarted) {

            await startMusic();
            return;

        }

        if (music.paused) {

            try {

                await music.play();

                musicMuted = false;

            } catch (error) {

                console.error(
                    "❌ Gagal melanjutkan musik:",
                    error
                );

            }

        } else {

            music.muted = !music.muted;

            musicMuted = music.muted;

        }

        updateMusicButton();

    });

}


/* =========================================
   UPDATE TOMBOL MUSIK
========================================= */

function updateMusicButton() {

    if (!musicButton) {
        return;
    }

    if (!musicStarted) {

        musicButton.innerHTML = "🎵";
        musicButton.title = "Nyalakan musik";
        musicButton.setAttribute(
            "aria-label",
            "Nyalakan musik"
        );

        return;
    }

    if (musicMuted) {

        musicButton.innerHTML = "🔇";
        musicButton.title = "Nyalakan musik";
        musicButton.setAttribute(
            "aria-label",
            "Nyalakan musik"
        );

    } else {

        musicButton.innerHTML = "🔊";
        musicButton.title = "Matikan musik";
        musicButton.setAttribute(
            "aria-label",
            "Matikan musik"
        );

    }

}


/* =========================================
   BUKA PESAN
========================================= */

if (button) {

    button.addEventListener("click", async () => {

        /*
         * Musik dijalankan langsung dari
         * interaksi tombol user.
         * Ini lebih aman dari blokir autoplay browser.
         */
        await startMusic();


        /* Tampilkan pesan */

        if (message) {

            message.classList.remove("hidden");

        }


        /* Hilangkan tombol */

        button.style.display = "none";


        /* Efek hati */

        createHeartExplosion();
        createExtraHearts();

    });

}


/* =========================================
   LEDAKAN HATI
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

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                150 +
                Math.random() * 400;

            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;

            heart.style.setProperty(
                "--x",
                x + "px"
            );

            heart.style.setProperty(
                "--y",
                y + "px"
            );

            heart.style.fontSize =
                14 +
                Math.random() * 25 +
                "px";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 2200);

        }, i * 25);

    }

}


/* =========================================
   HATI MELAYANG
========================================= */

function createFloatingHeart() {

    if (!hearts) {
        return;
    }

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

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        12 +
        Math.random() * 28 +
        "px";

    heart.style.animationDuration =
        5 +
        Math.random() * 6 +
        "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 13000);

}


/* =========================================
   HATI TAMBAHAN
========================================= */

function createExtraHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 120);

    }

}


/* =========================================
   HATI NORMAL
========================================= */

setInterval(() => {

    createFloatingHeart();

}, 500);


/* =========================================
   HATI AWAL
========================================= */

for (let i = 0; i < 12; i++) {

    setTimeout(() => {

        createFloatingHeart();

    }, i * 300);

}


/* =========================================
   BINTANG
========================================= */

function createStars() {

    const starsContainer =
        document.querySelector(".stars");

    if (!starsContainer) {
        return;
    }

    starsContainer.innerHTML = "";

    for (let i = 0; i < 70; i++) {

        const star =
            document.createElement("div");

        star.className =
            "star";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            1.5 +
            Math.random() * 3 +
            "s";

        starsContainer.appendChild(star);

    }

}


/* =========================================
   CEK AUDIO
========================================= */

if (music) {

    music.addEventListener("loadeddata", () => {

        console.log("🎧 music.mp3 berhasil dimuat.");

    });

    music.addEventListener("canplay", () => {

        console.log("▶️ music.mp3 siap dimainkan.");

    });

    music.addEventListener("error", (error) => {

        console.error(
            "❌ Error audio:",
            error
        );

    });

}


/* =========================================
   MULAI
========================================= */

createStars();

updateMusicButton();

console.log("🌷 Website siap.");
console.log("🎵 Audio element:", music);