/* eslint-disable no-undef */
const BASE_URL = 'https://binman-8195a.firebaseio.com/data.json',
      content_URL = 'https://binman-8195a.firebaseio.com/data/content/',
      contentDir_URL = 'https://binman-8195a.firebaseio.com/data/content.json',
      headers_URL = 'https://binman-8195a.firebaseio.com/data/headers/';


let firebaseConfig  = {
    apiKey: "AIzaSyD_WhUcdeUHD22dG363BUS-AZ6Ncve1VEI",
    authDomain: "binman-8195a.firebaseapp.com",
    databaseURL: "https://binman-8195a.firebaseio.com",
    projectId: "binman-8195a",
    storageBucket: "binman-8195a.appspot.com",
    messagingSenderId: "698847105084",
    appId: "1:698847105084:web:83531038ff07c4be31b339"
    }

    
firebase.initializeApp(firebaseConfig);





/** 
 * Data source for links collection
*/
export class LinksService {
    /** 
     * Wrapper for XMLHttpRequest
     * @param {string} type
     * @param {string} url
     * @param {Object} data
     * @param {Function} callback
    */

    static _makeRequest(type, url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(type, url, true);

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.error('Сетевая ошибка', xhr);
                } else {
                    callback(JSON.parse(xhr.responseText));
                }
    
            }
           
        });

        if (typeof data !== 'undefined') {
            data = JSON.stringify(data);
            
        }

        xhr.send(data);
    }



  

    /** 
     * Get collection
     * @param {Function} callback
    */
    static getLinks(callback) {
        this._makeRequest('GET', BASE_URL, undefined, callback);
    }
    

    /** 
     * Update collections
     * @param {Object} links
     * @param {Function} callback
    */
    static putLinks(links, callback) {
       
       let myRef = firebase.database().ref().push(),
           key = myRef.getKey(),
           path = content_URL + key + '.json';
       this._makeRequest('PUT', path, links, callback);
     
    }


  /*  static removeItem(item) {
alert(item);
        firebase.database().ref().child('data/content')
.orderByChild("0")
.equalTo(item)
.once("value", function (snapshot) {
snapshot.forEach(function(child) {

//console.log("link: " + firebase.database().ref().toString() + child.key);

let path = 'data/content/' + child.key,

    adaRef = firebase.database().ref().child(path);
adaRef.remove();

*/

  static removeItem(item) {

var ref = firebase.database().ref("data/content");
ref.once("value")
  .then(function(snapshot) {

        snapshot.forEach(function(childSnapshot) {
      
        var key = childSnapshot.child("fieldsData").val();
       if (key[0] === item) {
                let path = 'data/content/' + childSnapshot.key;
            var adaRef = firebase.database().ref().child(path)
            adaRef.remove();    
            return;
            }


          
              




})
})
}
}
/* firebase.database().ref().child('data/content')
.orderByChild("0")
.equalTo("test23")
.once("value", function (snapshot) {
snapshot.forEach(function(child) {

console.log("link: " + firebase.database().ref().toString() + child.key);

let path = 'data/content/' + child.key;

var adaRef = firebase.database().ref().child(path)
adaRef.remove(); */