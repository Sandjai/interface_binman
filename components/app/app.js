'use strict';
import {Header} from "../header/header";
import './app.sass';
import { Sidebar } from "../sidebar/sidebar";
import { Menu } from "../menu/menu";
import { Table } from "../table/table";
import { Popup } from "../popup/popup";
import {LinksService} from "../services/links.service"


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
                par: "Home"
            },
            {
                source: "assets/images/icons/Clients.svg",
                par: "Clients"
            },
            {
                source: "assets/images/icons/Reports.svg",
                par: "Reports"
            },

        ])

        this.menu = new Menu ({
            el: el.querySelector('.js-menu')
        })

        this.menu.render('67');
        

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
        this.popup.addEventListener("closeForm", () => this.popup.destroy());
        this.popup.addEventListener("addPerson", () => LinksService.putLinks(event.detail.content));

        this.popup.addEventListener("addPerson", () => this.table.addItem(event.detail.content));
        

     

        


        
     
        

        
    }
}

window.App = App;