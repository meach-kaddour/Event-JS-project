//Declartion des Elements HTML
btn1 = document.getElementById("button1");
btn2 = document.getElementById("button2");
outData1 = document.getElementById('customer');
outData2 = document.getElementById('customers');
// création des évenements sur l'élement HTML button
btn1.addEventListener('click', loadcustmer);
btn2.addEventListener('click', loadcustmers);
// Fonction 1
function loadcustmer() {
    const XHR = new XMLHttpRequest; // objet XMLHttpRequest
    XHR.open('GET', 'customer.json');
    XHR.send(); //send request
    XHR.onload = () => {
        //Insertion des donnés à l'interieur de la balise `output`ds une liste.
        const data = JSON.parse(XHR.response)
        outData1.innerHTML = `<ul><li> Id : ${data.id}  </li><li> Name :  ${data.name} </li><li> Company : ${data.company} </li><li> Phone Number : ${data.phone} </li></ul>`
    };
};
// Fonction 2
function loadcustmers() {
    const XHR = new XMLHttpRequest; // creation objet XMLHttpRequest
    XHR.open('GET', 'customers.json');
    XHR.send(); //send request
    XHR.onload = () => {
        //Insertion des donnés à l'interieur de la balise `output
        var data2 = JSON.parse(XHR.response)
        var data = '';
        for (var i in data2) {
            data += "Id:" + data2[i].id + "<br>" + "Name: " + data2[i].name + "<br>" + "Company: " + data2[i].company + "<br>" + "Phone: " + data2[i].phone + "<br>" + "id: " + data2[i].id;
        }
        outData2.innerHTML = data
    };
}