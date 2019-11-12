import template from "./table.pug";

export class Table {
    constructor({el}) {
        this.el = el;
    }

render({headers, content}) {
    this.el.innerHTML = template({headers, content});
}
}