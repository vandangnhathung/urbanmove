document.querySelectorAll(".um-parallax").forEach((el, i) => {

    window.addEventListener("scroll", () => {
        el.style.transform = `translateY(${window.scrollY * (i + 1) * 0.01}%`;

        const title = document.querySelector(".um-main-title");

        const rectTitle = title.getBoundingClientRect();
        const titleOffsetTop = rectTitle.top + window.scrollY + rectTitle.height;
        const titleOffsetRight = rectTitle.right - rectTitle.left;
        // console.log(titleOffsetTop, rectTitle.left, rectTitle.right)

        const rectEl = el.getBoundingClientRect();
        const elOffsetTop = rectEl.top + window.scrollY;


        if(titleOffsetTop >= elOffsetTop && rectTitle.left <= rectEl.right && rectEl.right <= rectTitle.right){
            // console.log("elOffsetTop: ", elOffsetTop, "rectEl.left: ", rectEl.left, "rectEl.right: ", rectEl.right, el, true);
        }else{
            // console.log("elOffsetTop: ", elOffsetTop, "rectEl.left: ", rectEl.left, "rectEl.right: ", rectEl.right, el, false);
        }
    })
})

document.querySelectorAll(".um-slide-img-wrapper").forEach((el, i) => {
    const umMainSlide = document.querySelector(".um-main-slide-wrapper");
    const isOdd = i % 2 === 0;
    const umSlide = document.querySelector(".um-main-slide");

    window.addEventListener("scroll", () => {
        // calculate scrolling x axios area
        // const totalHeight = umMainSlide.offsetHeight + hiddenArea;
        // const lengthXDistance = hiddenArea / el.scrollWidth * 100;
        const hiddenArea = el.scrollWidth - window.innerWidth;

        // min-max scrolling y axios distance
        const minYDistance = umMainSlide.getBoundingClientRect().top + window.scrollY;
        const maxYDistance = umMainSlide.getBoundingClientRect().bottom + window.scrollY;
        // const activeArea = maxYDistance - minYDistance;

        // console.log("maxYDistance: ", maxYDistance, "minYDistance: ", minYDistance, "window.scrollY: ", window.scrollY);

        // console.log("umMainSlide.getBoundingClientRect().top: ", umMainSlide.getBoundingClientRect().top)

        // console.log("window.scrollY: ", window.scrollY, "minYDistance: ", minYDistance)

        // normalize method -> convert custom value to [0,1]
        const scrollingActiveArea = window.scrollY - minYDistance;
        const convertValue = (scrollingActiveArea / hiddenArea); // [0,1]


        // execute the animation
        if(scrollingActiveArea >= 0 && scrollingActiveArea <= umMainSlide.offsetHeight && convertValue <= 1){
            const realValue = Math.floor(convertValue * 100);
            // console.log(realValue)
            if(isOdd){
                el.style.transform = `translateX(${-realValue}%)`;
            }else{
                el.style.transform = `translateX(${-100 + realValue}%)`;
            }
        }


        // const rectSlideTop = umMainSlide.getBoundingClientRect().top;
        //
        // if(rectSlideTop >= 0){
        //     return;
        // }
        //
        //

    })


})
