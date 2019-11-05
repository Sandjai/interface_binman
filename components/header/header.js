import template from "./header.pug";


export class Header {
    constructor({el}) {
        this.el = el;
    }
    render() {
        this.el.innerHTML = template();

    }
}