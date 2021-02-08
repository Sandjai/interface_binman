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

       
        case("favourite"):
       
        if(item.classList.contains('js-favourite')) {
            this._trigger("favourite", [item.closest("tr").cells[2].innerText, false]);
            item.classList.remove('js-favourite', 'favourite__true');
            item.classList.add('favourite__false');            
        }

        else {
            this._trigger("favourite", [item.closest("tr").cells[2].innerText, true]);
            item.classList.remove('favourite__false');  
            item.classList.add('js-favourite', 'favourite__true');  
        }
        
        
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

setFavourite (item) {
    
    LinksService.favourite(item[0], item[1]);
   
    
    
}



filterFavourite (callback) {

    let rowsCollection = document.querySelector('.js-table__data tbody').rows;
    
    for (let i = 0; i < rowsCollection.length; i++) {
        if(!(rowsCollection[i].childNodes[4].firstChild.classList.contains('js-favourite'))) {
            rowsCollection[i].classList.toggle('isVisuallyHidden');
        } 




        }
       
    
    

}
    



/**
 * @returns {ELEMENT_NODE}
 */
get showingData () {
 
        return document.querySelector('.js-table__data');
  

    
}


}