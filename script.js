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

    // 🔸 가로 스크롤 감속 함수
    const smoothScrollTo = (target) => {
        const duration = 800;
        const start = scrollContainer.scrollLeft;
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
            scrollContainer.scrollLeft = start + (target - start) * ease;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                isScrolling = false;
            }
        };

        requestAnimationFrame(animate);
    };

    // 🔸 Projects에서만 스크롤 금지/허용 관리
    sectionProjects.addEventListener("wheel", (e) => {
        const items = scrollContainer.children;
        const maxIndex = items.length - 1;

        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();

            // 🔒 스크롤 금지
            body.classList.add("noscroll");

            if (e.deltaY > 0 && scrollIndex < maxIndex) {
                scrollIndex++;
            } else if (e.deltaY < 0 && scrollIndex > 0) {
                scrollIndex--;
            }

            const target = scrollContainer.offsetWidth * scrollIndex;
            if (!isScrolling) {
                isScrolling = true;
                smoothScrollTo(target);
            }

            // ✅ 슬라이드가 마지막에 도달하면 스크롤 허용
            if (scrollIndex === maxIndex) {
                setTimeout(() => {
                    body.classList.remove("noscroll");
                }, 900); // 애니메이션 끝난 후
            }
        }
    }, { passive: false });
});


