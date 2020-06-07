import template from "./menu.pug";
import Popup from "../popup/popup";
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
    render(perNum) {
        this.el.innerHTML = template({perNum});

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
            case "New":
            this._trigger("showForm");

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