'use strict';
import {Header} from "./../header/header";
import './app.sass';

class App {
    constructor({el}) {
        this.header = new Header ({
            el: el.querySelector('.js-header')
        })

        this.header.render();
        
    }
}

window.App = App;