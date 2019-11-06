import template from "./sidebar.pug";

export class Sidebar {
    constructor({el}) {
        this.el = el;


    }

    /**
     * @param {Array}
     */

    render(items) {
        this.el.innerHTML = template({items});
    }

    /**
     * @param {}
     */
    get list() {
        return this.el.querySelector(".sidebar__ico");
    }
}