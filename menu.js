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