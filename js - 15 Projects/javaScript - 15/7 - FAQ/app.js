

let accordions = document.querySelectorAll(".accordion-wrapper .accordion");

accordions.forEach((acc) => {
    acc.onclick = () => {
        acc.classList.toggle("active");
    }
})



