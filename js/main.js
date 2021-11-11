// Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// Stamp HTML images
const imagesCont = document.querySelector(".images-container");
const thumbsCont = document.querySelector(".thumbs-container");

for (let i = 0; i < items.length; i++)  {

    imagesCont.innerHTML += `
    <div class="image">
        <img src="${items[i]}" alt="">
        <div class="text">
            <h3>
                ${title[i]}
            </h3>
            <p>
                ${text[i]}
            </p>
        </div>
    </div>
    `;

    thumbsCont.innerHTML +=`
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>
    `;
}

// creo classe active
document.getElementsByClassName("image")[0].classList.add("active");
document.getElementsByClassName("thumb")[0].classList.add("active");

// click per cambiare active
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// variabile active
let activePosition = 0; 

next.addEventListener ('click',
    
    function () {
        
        // incremento variabile al click
        activePosition++;

        // refresho dopo il limite massimo
        if (activePosition === items.length) {
            activePosition = 0;
        }

        document.querySelector(".image.active").classList.remove("active");
        document.getElementsByClassName("image")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
)

prev.addEventListener('click',

    function () {

        // se la variabile di posizione è uguale a 0 parto dall' ultimo elemento dell'array
        if (activePosition === 0) {
            activePosition = items.length;
        }

        // decremento variabile al click
        activePosition--;

        // immmagini
        document.querySelector(".image.active").classList.remove("active");
        document.getElementsByClassName("image")[activePosition].classList.add("active");

        // thumnails
        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
)