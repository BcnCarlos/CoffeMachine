// Defining Drinkmaker class with a string for type of drink and a number for quantity of sugar.

class Drinkmaker{
    constructor(string, num ){
        this.type = string;
        this.sugar = num || 0;
        this.stick = 0;       
    }

// Make drink method that returns message with the drink selected, sugar, and stick. Sends error 

makedrink(){

    if (this.sugar > 0) this.stick = 1; 

    switch (this.type){

        case "T":
           return  `M: Making Tea with ${this.sugar} sugars and ${this.stick} stick` ;
            break;
        case  "H":
            return `M: Making Chocolate with ${this.sugar} sugars and ${this.stick} stick`;
            break;
        case "C":
            return `M: Making Coffee with ${this.sugar} sugars and ${this.stick} stick`;
            break;
        default:
            return "M: Please enter, 'T' for tea, 'C' for coffee, or 'H' for chocolate";
    }
  
}

}

if (typeof module !== 'undefined') {
    module.exports = Drinkmaker;
  }