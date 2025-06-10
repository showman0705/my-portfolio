document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".intro-overlay");
    const title = document.querySelector(".intro-title");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    const scrollContainer = document.querySelector(".horizontal-scroll");
    const sectionProjects = document.getElementById("projects");
    const body = document.body;
    let scrollIndex = 0;
    let isScrolling = false;

    // 🔹 인트로 애니메이션
    setTimeout(() => {
        title.style.transform = "translateY(-330px)";
        title.style.fontSize = "2em";
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


