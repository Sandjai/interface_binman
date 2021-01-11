/* eslint-disable no-undef */
const BASE_URL = 'https://binman-8195a.firebaseio.com/data.json';
const content_URL = 'https://binman-8195a.firebaseio.com/data/content.json';



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
        this._makeRequest('POST', content_URL, links, callback);
    }

    static delete(item, callback) {
        this._makeRequest('DELETE', BASE_URL, undefined, callback)
    }
}

