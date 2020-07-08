import template from "./popup.pug";
import {Menu} from "../menu/menu"

export class Popup {
    constructor ({el}) {
        this.el = el;

        this._inintEvents();

        
    }

    render() {
        this.el.classList.add('active');
        this.el.innerHTML = template();
    }


    destroy() {
        this.el.classList.remove('active');
        this.el.innerHTML = "";
    }

    addEventListener(eveName, callback) {
        this.el.addEventListener(eveName, callback)
    }

    _inintEvents() {
        this.el.addEventListener("click", this._clickAct.bind(this));
        this.el.addEventListener("submit", this._onSubmit.bind(this));        
    }

    _onSubmit(event) {
        event.preventDefault();

        this._trigger("addPerson", {
            content: [this.el.querySelector('input[name="flname"]').value,  
            this.el.querySelector('input[name="phone"]').value, this.el.querySelector('input[name="email"]').value, 
            `Средний балл: ${this._countRate()}`]
        })
        event.target.reset();


    }

    _clickAct(event) { 
       
        let item = event.target;


        switch(item.dataset.action){
            case("close"):
            this._trigger("closeForm");
            break;
            case("count"):
            this._countRate(event.target);
            
            break;
            
      
        }
            

    }

    _trigger(eveName, eveData) {
        let newEve = new CustomEvent(eveName, {detail: eveData});
        this.el.dispatchEvent(newEve);
    }

    _countRate() {
        
        
        

        let resumeRates = document.querySelectorAll('input[name="resume_rate"]');
        let testtask_rate = document.querySelectorAll('input[name="testtask_rate"]');
        let interview_rate = document.querySelectorAll('input[name="interview_rate"]');
        
            
            function checkVal (rates) {

                

                for (let i=0; i < rates.length; i++) {
                    
                    if (rates[i].checked) {
                       
                        
                        return +(rates[i].value);
                        break;                       
                        
                    }  
                    
                }               

          }       

            let averageRate = Math.round((checkVal (resumeRates) + checkVal (testtask_rate) + checkVal (interview_rate))/3);
            return averageRate;

        
    }







}