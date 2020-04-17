//const XHR = new XMLHttpRequest;
//  get data from json-server with XMLHttrequest on console
// var url = 'http://localhost:3000/books';
// XHR.open('GET', url);
// XHR.send();
// XHR.onload = function() {
//     XHR.response = JSON.parse(XHR.response);
//     console.log(XHR.response); //3
// }
const url = 'http://localhost:3000/books';

fetch(url).then(res => {
        res.json().then(data => {
            console.log(data);
        })
    })
    // fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         "author": "Achebe",
    //         "country": "ria",
    //         "imageLink": "images/things-fall-apart.jpg",
    //         "language": "English",
    //         "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    //         "pages": 09,
    //         "title": "Things Fall Apart",
    //         "year": 1938
    //     })

// }).then(res => {
//     return res.json()
// }).then(data => console.log(data))