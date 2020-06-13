import template from "./popup.pug";
import {Menu} from "../menu/menu"

export class Popup {
    constructor ({el}) {
        this.el = el;

        this._inintEvents();

        
    }

    render() {
        this.el.classList.add('active');
        this.el.innerHTML = template();
    }


    destroy() {
        this.el.classList.remove('active');
        this.el.innerHTML = "";
    }

    addEventListener(eveName, callback) {
        this.el.addEventListener(eveName, callback)
    }

    _inintEvents() {
        this.el.addEventListener("click", this._clickAct.bind(this));
    }

    _clickAct(event) { 
       
        let item = event.target;


        switch(item.dataset.action){
            case("close"):
            this._trigger("closeForm");
            break;
        }
            

    }

    _trigger(eveName, eveData) {
        let newEve = new CustomEvent(eveName, {detail: eveData});
        this.el.dispatchEvent(newEve);
    }







}