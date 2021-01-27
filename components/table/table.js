import template from "./table.pug";
import tmplRow from './__rowItem/table__rowitem.pug'
import {LinksService} from '../services/links.service'

export class Table {
    constructor({el, data}) {
        this.el = el;
        this.data = data;

        this._initEvents();
        
    }

render({content}) {


    this.el.innerHTML = template({content});
    this.data = {content};


}

addItem (item) {
    
LinksService.putLinks(item, () => this._trigger("update"));

    // eslint-disable-next-line no-undef
    let el = document.createElement("tr");            
    el.innerHTML = this.ItemHtml(item);
    //el = el.firstElementChild;
    this.showingData.childNodes[2].append(el); 
    //this.data.items.push(item);
    
}


addEventListener(eveName, callback) {
    this.el.addEventListener(eveName, callback);
}


ItemHtml(item) {

    return tmplRow({item});

}

_initEvents () {
    this.el.addEventListener("click", this._makeEvent.bind(this));
}



_makeEvent(event) {
    let item = event.target;
    switch (item.dataset.action) {
        case("remove"):
        
        this._trigger("remove", [item.closest("tr"), item.closest("tr").cells[2].innerText]);
        
        break;
    }
}

_trigger (eveName, eveData) {
    let newEve = new CustomEvent(eveName, {detail: eveData});
    this.el.dispatchEvent(newEve);
}

removeItem (item) {
    
    LinksService.removeItem(item[1], () => this._trigger("update"));
    
    item[0].remove();
    
    
}


filterFavourite () {
    alert('okkk');
}
    



/**
 * @returns {ELEMENT_NODE}
 */
get showingData () {
 
        return document.querySelector('.js-table__data');
  

    
}


}