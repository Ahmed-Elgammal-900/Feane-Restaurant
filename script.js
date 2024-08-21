const container = document.querySelector(".reviews .container .content");
const prevButton = document.querySelector(".reviews .container .buttons .prev");
const nextButton = document.querySelector(".reviews .container .buttons .next");
const itemWidth = document.querySelector(".item").offsetWidth;

prevButton.addEventListener("click", () => {
    container.scrollLeft -= itemWidth + 20;
})

nextButton.addEventListener("click", () => {
    container.scrollLeft += itemWidth + 20;
})

// Menu Filter
const items = document.querySelectorAll(".menu .container .row .col-4")
const buttons = document.querySelectorAll(".menu .container ul li");

buttons.forEach(li => {
    li.addEventListener("click", show)
})

function show (){
    items.forEach( item => {
        item.style.display = 'none';
    })

    document.querySelectorAll(this.dataset.info).forEach((el) => {
        el.style.display = "block";
    })
}
