import template from "./menu.pug";
import Popup from "../popup/popup";
import {LinksService} from "../services/links.service";


/**
 *
 *
 * @export
 * @class Menu
 */
export class Menu {
    constructor({el}) {
        this.el = el;
        this.initEvents();
    }
    render() {

       LinksService.getNumber((collection) => {

        let contactsNum;
        if (collection != (undefined || null)) {
            contactsNum = Object.keys(collection).length;
        }
        else {contactsNum = 0}
        
            this.el.innerHTML = template({contactsNum});
                
        });
       
   
            
       }
        


    initEvents() {
        this.el.addEventListener("click", this._onClick.bind(this));
    }

    _trigger(eveName, eveData){
        let newEve = new CustomEvent(eveName, {detail: eveData});
        this.el.dispatchEvent(newEve);

    }

    /**
     *
     *
     * @param {Event} event
     * @memberof Menu
     */
    _onClick(event) {
        event.preventDefault();
        let item = event.target;
        switch (item.dataset.action) {
            case "new":
            this._trigger("showForm");
            break;

            case "addToFavourite":
            this._trigger("showFavourite");
            break;

            case "updateTable":
            this._trigger("updateTable");
            break;


        }
        
    }

 

        /**
         * Подписка на события
         * @param {string} eveName
         * @param {Function} callback
         */
        addEventListener(eveName, callback) {
            this.el.addEventListener(eveName, callback);
        }

 
}