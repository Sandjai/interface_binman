import template from "./table.pug";
import tmplRow from './__rowItem/table__rowitem.pug'

export class Table {
    constructor({el, data}) {
        this.el = el;
        this.data = data;
    }

render({headers=data.headers, content=data.content}) {
    this.el.innerHTML = template({headers, content});
    this.data = {headers, content};
}

addItem (item) {



    // eslint-disable-next-line no-undef
    let el = document.createElement("tr");            
    el.innerHTML = this.ItemHtml(item);
    //el = el.firstElementChild;
    this.showingData.childNodes[1].append(el); 
    //this.data.items.push(item);
    
}

ItemHtml(item) {

    return tmplRow({item});

}

/**
 * @returns {ELEMENT_NODE}
 */
get showingData () {
    return document.querySelector('.js-table__data');
}


}