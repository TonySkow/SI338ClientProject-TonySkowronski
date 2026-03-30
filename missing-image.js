/* JS to handle missing images */
let pics = document.querySelectorAll("#main img");

for (let i = 0; i < pics.length; i++) {
    console.log("Looking at " + pics[i].src);

    pics[i].addEventListener("error", function () {
        this.src = "";
        this.alt = "Image not available";
        this.classList.add("missing");
    });

    /* Trigger manually if already broken (HELP FROM AI ON THIS PART) */
    if (!pics[i].complete || pics[i].naturalWidth === 0) {
        pics[i].dispatchEvent(new Event("error"));
    }
}