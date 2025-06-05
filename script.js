document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".intro-overlay");
    const title = document.querySelector(".intro-title");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    setTimeout(() => {
        // 타이틀 위로 이동
        title.style.transform = "translateY(-200px)";
        title.style.fontSize = "2em";

        // 오버레이 페이드아웃
        overlay.style.opacity = "0";
    }, 1500);

    setTimeout(() => {
        overlay.style.display = "none";
        header.classList.remove("hidden");
        header.classList.add("visible");

        main.classList.remove("hidden");
        main.classList.add("visible");

        footer.classList.remove("hidden");
        footer.classList.add("visible");
    }, 2800);
});

