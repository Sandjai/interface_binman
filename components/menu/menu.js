import template from "./menu.pug";


export class Menu {
    constructor({el}) {
        this.el = el;
    }
    render(perNum) {
        this.el.innerHTML = template({perNum});

    }
}