let btn = document.querySelector('button');
let outData = document.getElementById('output');
btn.addEventListener('click', loadData); // création d'un event listener
// function loadData
function loadData() {
    const XHR = new XMLHttpRequest; // objet XMLHttpRequest
    XHR.open('GET', 'data.txt'); // chargement des donnés a partirfichier data.txt
    XHR.send(); //send request
    XHR.responseType = 'text';
    XHR.onload = () => { outData.textContent = XHR.response }; //Insertion des donnés à l'interieur de la balise `output`.
    console.log(XHR.readyState);
}