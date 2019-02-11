const slider = document.querySelector('.slider')
// Klasy dodawane do kolejnych slide'ów
const listOfItems = ["icon-html5-alt",'icon-css3-alt','icon-javascript-alt','icon-sass','icon-bootstrap','icon-jquery','icon-shell'] 
// Pobranie wsyzstkich sladjów 
let listOfSlider = [...slider.querySelectorAll('.sliderItem')]
// Ilosc musi byc mniejsza od liczby itemow
let startIcons = 3
let widthOfItem;
let translateX = 0
let counter = 0

function generateItems(){
    // Skopiowanie wszystkich itemow jeszcze raz 
    listOfSlider.forEach((item,i)=>{
        item.style.width = `${widthOfItem}px`
        item.firstChild.classList.add(`${listOfItems[i]}`)
        slider.appendChild(item.cloneNode(true))
    })
    // Na wypadek gdyby liczba itemow byla rowna widocznym na poczatku
    slider.appendChild(listOfSlider[0].cloneNode(true))
    //const newListOfSlider = [...slider.querySelectorAll('.sliderItem')]
}


function setAll(){
    translateX = 0;
    slider.style.transition = "all 0s linear"
    slider.style.transform = `translateX(${translateX}px)`
    if(window.innerWidth > 1200) startIcons = 4;
    else if(window.innerWidth > 994) startIcons = 3;
    else if(window.innerWidth > 600) startIcons = 2;
    else startIcons = 1;
    const newListOfSlider = [...slider.querySelectorAll('.sliderItem')]
    // Ustawienie szerokosci slajdu
    widthOfItem = slider.parentElement.offsetWidth/startIcons
    slider.style.width = `${widthOfItem * 2 * listOfSlider.length + widthOfItem}px`
    // Wygenerowanie itemow jeszcze raz
    newListOfSlider.forEach((item,i)=>{
        item.style.width = `${widthOfItem}px`
        //item.firstChild.classList.add(`${listOfItems[i]}`)
        //slider.appendChild(item.cloneNode(true))
    })
    //ustawienie szerokosci slajdera
}

function sliderRoll(){
    if(counter === listOfSlider.length){
        slider.style.transition = "all 0s linear"
        translateX = 0
        slider.style.transform = `translateX(${translateX}px)`
        counter = 0
    }
    translateX -= slider.parentElement.offsetWidth/startIcons;
    slider.style.transform = `translateX(${translateX}px)`
    counter++;
    slider.style.transition = 'all 1s linear'
}

setTimeout(generateItems,0)
setTimeout(setAll,0)
window.addEventListener('resize',setAll)

setInterval(sliderRoll,3000);