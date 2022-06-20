const accordionList = document.querySelectorAll(".js-accordion div h2");
accordionList[0].classList.add("ativo");
accordionList[0].nextElementSibling.classList.add("ativo");


function activeAccordion(){
    this.classList.add("ativo");
    this.nextElementSibling.classList.toggle("ativo"); 
}

accordionList.forEach( (item) => {
    item.addEventListener("click", activeAccordion);
})