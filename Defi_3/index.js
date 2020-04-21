//  GET data with XMLHttprequest 
/*var output1 = document.getElementById('output1'),
    btn1 = document.getElementById('btn1'),
    url = 'http://localhost:3000/books',
    XHR = new XMLHttpRequest;
btn1.addEventListener('click', getBook)

function getBook() {
    XHR.open('GET', url);
    XHR.send();
    XHR.onload = () => {
        data = JSON.parse(XHR.response);
        console.table(data)
    }
}*/
// Post data withXMLHttprequest
// var output1 = document.getElementById('output1');
// btn1 = document.getElementById('btn1');
// var url = 'http://localhost:3000/books',
//     data = {
//         "id": 101,
//         "author": "kaddour",
//         "contry": "maroc",
//         "imageLink": "images/things-fall-apart.jpg",
//         "language": "Arabe",
//         "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
//         "pages": 100,
//         "title": "1984",
//         "year": 1758
//     },
//     dataJson = JSON.stringify(data),
//     request = new XMLHttpRequest;
// btn1.addEventListener('click', postData);

// function postData() {
//     request.open('POST', url);

//     request.send(dataJson);

//     request.onload = () => {
//         request.response = JSON.parse(request.response);

//         output1.textContent = request.response
//     }
// }


// GET data with fetch

// const url = 'http://localhost:3000/books';

// fetch(url).then(res => {
//     res.json().then(data => {
//         console.table(data);
//     })
// })


// put data with XMLHttprequest //