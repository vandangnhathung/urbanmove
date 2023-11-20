document.querySelectorAll(".um-parallax").forEach((el, i) => {

    window.addEventListener("scroll", () => {
        el.style.transform = `translateY(${window.scrollY * (i + 1) * 0.01}%`;

        const title = document.querySelector(".um-main-title");

        const rectTitle = title.getBoundingClientRect();
        const titleOffsetTop = rectTitle.top + window.scrollY + rectTitle.height;
        const titleOffsetRight = rectTitle.right - rectTitle.left;
        console.log(titleOffsetTop, rectTitle.left, rectTitle.right)

        const rectEl = el.getBoundingClientRect();
        const elOffsetTop = rectEl.top + window.scrollY;


        if(titleOffsetTop >= elOffsetTop && rectTitle.left <= rectEl.right && rectEl.right <= rectTitle.right){
            // console.log("elOffsetTop: ", elOffsetTop, "rectEl.left: ", rectEl.left, "rectEl.right: ", rectEl.right, el, true);
        }else{
            // console.log("elOffsetTop: ", elOffsetTop, "rectEl.left: ", rectEl.left, "rectEl.right: ", rectEl.right, el, false);
        }


    })
})
