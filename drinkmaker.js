// Defining Drinkmaker class with a string for type of drink and a number for quantity of sugar.

class Drinkmaker{
    constructor(string, num ){
        this.type = string;
        this.sugar = num;
        this.stick = 0;
        
    }
    
 // makeDrink function to filter through the order and send message to the console. 

    makeDrink(){       
        
        if (this.sugar > 0) this.stick = 1; 
        
        switch (this.type){
            
            case "T":
                console.log(`M: Making Tea with ${this.sugar} sugars and ${this.stick} stick`);
                break;
            case  "H":
                console.log(`M: Making Chocolate with ${this.sugar} sugars and ${this.stick} stick`);
                break;
            case "C":
                console.log(`M: Making Coffee with ${this.sugar} sugars and ${this.stick} stick`);
                break;
            default:
                console.log("Please enter, 'T' for tea, 'C' for coffee, or 'H' for chocolate")
        }
  
    }

}

// Test of a new order of coffee with 5 sugars

const Neworder = new Drinkmaker("C", 5)

Neworder.makeDrink() //Expected  "M: Making Coffee with 5 sugars and 1 stick"