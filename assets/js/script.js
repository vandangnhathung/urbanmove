document.querySelectorAll(".um-parallax").forEach((el, i) => {

    setTimeout(() => {
        window.addEventListener("scroll", () => {
            el.style.transform = `translateY(${window.scrollY * (i + 1) * 0.01}%`;

            const title = document.querySelector(".um-main-title");

            const rectTitle = title.getBoundingClientRect();
            const titleOffsetTop = rectTitle.top + window.scrollY + rectTitle.height;
            const titleOffsetRight = rectTitle.right - rectTitle.left;
            // console.log(titleOffsetTop, rectTitle.left, rectTitle.right)

            const rectEl = el.getBoundingClientRect();
            const elOffsetTop = rectEl.top + window.scrollY;


            if (titleOffsetTop >= elOffsetTop && rectTitle.left <= rectEl.right && rectEl.right <= rectTitle.right) {
                // console.log("elOffsetTop: ", elOffsetTop, "rectEl.left: ", rectEl.left, "rectEl.right: ", rectEl.right, el, true);
            } else {
                // console.log("elOffsetTop: ", elOffsetTop, "rectEl.left: ", rectEl.left, "rectEl.right: ", rectEl.right, el, false);
            }
        })
    }, 400)
})


// Slide section
document.querySelectorAll(".um-slide-img-wrapper").forEach((el, i) => {
    const slideSection = document.querySelector(".um-main-slide-wrapper");
    const isOdd = i % 2 === 0;

    window.addEventListener("scroll", () => {
        // calculate scrolling x axios area
        // const totalHeight = umMainSlide.offsetHeight + hiddenArea;
        // const lengthXDistance = hiddenArea / el.scrollWidth * 100;
        const hiddenArea = el.scrollWidth - window.innerWidth;

        // min-max scrolling y axios distance
        const minYDistance = slideSection.getBoundingClientRect().top + window.scrollY;
        const maxYDistance = slideSection.getBoundingClientRect().bottom + window.scrollY;
        // const activeArea = maxYDistance - minYDistance;

        console.log("maxYDistance: ", maxYDistance)

        // normalize method -> convert custom value to [0,1]
        const scrollingActiveArea = window.scrollY - minYDistance;
        const convertValue = (scrollingActiveArea / hiddenArea); // [0,1]

        console.log("convertValue: ", scrollingActiveArea)
        // area is active => scroll into area | area is deactivated => leave off area
        if (scrollingActiveArea >= 0 && scrollingActiveArea <= slideSection.offsetHeight && convertValue <= 1) {
            const realValue = Math.floor(convertValue * 100);

            if (isOdd) {
                el.style.transform = `translateX(${-realValue}%)`;
            } else {
                el.style.transform = `translateX(${-100 + realValue}%)`;
            }
        }
    })


})
