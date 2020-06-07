'use strict';
import {Header} from "./../header/header";
import './app.sass';
import { Sidebar } from "../sidebar/sidebar";
import { Menu } from "../menu/menu";
import { Table } from "../table/table";
import { Popup } from "../popup/popup";


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
            el: document.querySelector(".js-table")
        })

        this.table.render({headers: ["Соискатель", "Телефон", "E-mail", "Оценка соискателя"], 
        content: [["Бинман Иван Натанович", "+7 (900) 800-70-60", "ioan@binman.ru", "Средний балл: 4.0"], ["Бинман Иван Натанович", "+7 (900) 800-70-60", "ioan@binman.ru", "Средний балл: 4.0"]]});
        
        this.popup = new Popup ({
            el: el.querySelector(".js-popup")
        })

        

        

        this.menu.addEventListener("showForm", () => this.popup.render())

        
    }
}

window.App = App;