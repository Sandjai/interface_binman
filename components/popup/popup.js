import template from "./popup.pug";
import {Menu} from "../menu/menu"

export class Popup {
    constructor ({el}) {
        this.el = el;

        
    }

    render() {
        this.el.classList.add('active');
        this.el.innerHTML = template();
    }


    destroy() {
        this.el.classList.remove('active');
        this.el.innerHTML = "";
    }




}