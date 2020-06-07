import template from "./popup.pug";
import {Menu} from "../menu/menu"

export class Popup {
    constructor ({el}) {
        this.el = el;

        
    }

    render() {
        this.el.innerHTML = template();
    }




}