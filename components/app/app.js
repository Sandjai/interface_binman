'use strict';
import {Header} from "../header/header";
import './app.sass';
import { Sidebar } from "../sidebar/sidebar";
import { Menu } from "../menu/menu";
import { Table } from "../table/table";
import { Popup } from "../popup/popup";
import {LinksService} from "../services/links.service";


class App {
    constructor({el}) {
        this.header = new Header ({
            el: el.querySelector('.js-header')
        })

        this.header.render();

        this.sidebar = new Sidebar({
            el: el.querySelector(".js-sidebar")
            
        })

        this.sidebar.render([
            {
                source: "assets/images/icons/Home.svg",
                par: "Home",
                titleText: "Раздел в разработке"
            },
            {
                source: "assets/images/icons/Clients.svg",
                par: "Clients",
                titleText: ""
            },
            {
                source: "assets/images/icons/Reports.svg",
                par: "Reports",
                titleText: "И этот раздел не готов тоже"

            },

        ])

        this.menu = new Menu ({
            el: el.querySelector('.js-menu')
        })

       
         
      

        this.menu.render();
        

        this.table = new Table ({
            el: document.querySelector(".js-table"),
            data: {}
        })

      
        LinksService.getLinks((LinksData) => {
            this.table.render(LinksData);
            
        });

       

        this.popup = new Popup ({
            el: el.querySelector(".js-popup")
        })







        
        this.menu.addEventListener("showForm", () => this.popup.render());
        this.table.addEventListener("update", () => this.menu.render());
        this.menu.addEventListener("showFavourite", () => this.table.filterFavourite());
        this.popup.addEventListener("closeForm", () => this.popup.destroy());        
        this.popup.addEventListener("addPerson", () => {this.table.addItem(event.detail.content);
            this.popup.destroy()});      
        this.table.addEventListener("remove", () => {
            
            this.table.removeItem(event.detail)} )
            
          
      
        

     

        


        
     
        

        
    }
}

window.App = App;