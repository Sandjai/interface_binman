import template from "./popup.pug";


export class Popup {
    constructor ({el}) {
        this.el = el;

        this._initEvents();

        
    }

    _addFormValidationListeners() {

        let inputs_Collection = this.el.querySelectorAll("input");
        for (let i = 0; i<=inputs_Collection.length; i++) {
           if (inputs_Collection[i] != undefined) {
            
            inputs_Collection[i].addEventListener('invalid', function(event){
                event.preventDefault();
                this.classList.add('error');            
            })

            inputs_Collection[i].addEventListener('change', function(event){                
                this.classList.remove('error');
            })
   

        }
    }

    this.el.querySelector("input").focus();

    let rateCollection = this.el.querySelectorAll(".js-rate");

    for (let i = 0; i<=rateCollection.length; i++ ) {

        if (rateCollection[i] != undefined) {
            rateCollection[i].addEventListener("change", () => {
       
                let resume_rate = this.el.querySelectorAll('input[name="resume_rate"]:checked').length,
                testtask_rate = this.el.querySelectorAll('input[name="testtask_rate"]:checked').length,
                interview_rate = this.el.querySelectorAll('input[name="interview_rate"]:checked').length; 
        
                if((resume_rate && testtask_rate && interview_rate) != 0) {
                   
                    this.el.querySelector('.js-error-rate').classList.add('isVisuallyHidden');
                }
            })
        }
  
  
    }


    document.getElementById('emailId').addEventListener("change", function() {
        document.querySelector('.js-error-email').classList.add('isVisuallyHidden'); 
        
        let rowsCollection = document.querySelector('.js-table__data tbody').rows;
    
        for (let i = 0; i < rowsCollection.length; i++) {
            if(rowsCollection[i].childNodes[2].innerText === document.getElementById('emailId').value) {
                event.preventDefault();
                document.getElementById('js-popup__btn').disabled=true;
                this.classList.add('error');  
                document.querySelector('.js-error-email').classList.remove('isVisuallyHidden');        
                 
            }

            else document.getElementById('js-popup__btn').disabled=false;
        }

    })


   
      
    
    
   
    

        
    }

    render() {
        this.el.classList.add('active');
     
            this.el.innerHTML = template();
            this._addFormValidationListeners();    
    }


    destroy() {
        this.el.classList.remove('active');
        this.el.innerHTML = "";
    }

    addEventListener(eveName, callback) {
        this.el.addEventListener(eveName, callback)
    }

    _initEvents() {
        this.el.addEventListener("click", this._clickAct.bind(this));
        this.el.addEventListener("submit", this._onSubmit.bind(this));
          
    }

    _onSubmit(event) {
        event.preventDefault();

        this._trigger("addPerson", {
            content: {
                fieldsData: [this.el.querySelector('input[name="flname"]').value,  
            this.el.querySelector('input[name="phone"]').value, this.el.querySelector('input[name="email"]').value, 
            `Средний балл: ${this._countRate()}`],
            favourite: false}
            
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