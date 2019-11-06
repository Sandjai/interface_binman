'use strict';
import {Header} from "./../header/header";
import './app.sass';
import { Sidebar } from "../sidebar/sidebar";

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
                source: "assets/images/Home.svg",
                par: "Home"
            }
        ])
        
    }
}

window.App = App;