'use strict';
import {Header} from "./../header/header";
import './app.sass';
import { Sidebar } from "../sidebar/sidebar";
import { Menu } from "../menu/menu";


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

        this.menu.render('65');
        
    }
}

window.App = App;