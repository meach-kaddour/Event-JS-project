btn1 = document.getElementById("button1");
btn2 = document.getElementById("button2");
outData1 = document.getElementById('customer');
outData2 = document.getElementById('customers');

btn1.addEventListener('click', loadcustmer);
btn2.addEventListener('click', loadcustmers); // création d'un event listener
function loadcustmer() {
    const XHR = new XMLHttpRequest; // objet XMLHttpRequest
    XHR.open('GET', 'customer.json');
    XHR.send(); //send request
    XHR.onload = () => { outData1.textContent = XHR.response }; //Insertion des donnés à l'interieur de la balise `output`.
};

function loadcustmers() {
    const XHR = new XMLHttpRequest; // objet XMLHttpRequest
    XHR.open('GET', 'customers.json');
    XHR.send(); //send request
    XHR.onload = () => { outData2.textContent = XHR.response }; //Insertion des donnés à l'interieur de la balise `output`.
}