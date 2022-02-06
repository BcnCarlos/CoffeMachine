const Order = require( '../drinkmaker')

// Create Order test to check the proper expected return 

describe('Order', () => {

  let drink;
  
  it('Should make a cup of Tea', () => {
    
    // Create drink tea wit 2 sugars and 1 stick
    
    drink = new Order("T",2);

    let tea = drink.makedrink();

    let output = "M: Making Tea with 2 sugars and 1 stick";

    expect(tea).toBe(output);

  });


  it('Should make a cup of Coffee', () => {
    
    // Create drink Coffee with 1 sugar and 1 stick. 
    
    drink = new Order("C", 1);

    let coffee = drink.makedrink();

    let output = "M: Making Coffee with 1 sugars and 1 stick";

    expect(coffee).toBe(output);

  });

  it('Should make a cup of Chocolate', () => {
    
    // Create drink Chocolate with 0 sugar and 0 stick. 
    
    drink = new Order("H" );

    let chocolate = drink.makedrink();

    let output = "M: Making Chocolate with 0 sugars and 0 stick";

    expect(chocolate).toBe(output);

  });

  it('Should return messages if incorrect drink input', () => {
    
    // Create drink with incorrect input 
    
    drink = new Order("a", 2 );

    let incorrect = drink.makedrink();

    let output = "M: Please enter, 'T' for tea, 'C' for coffee, or 'H' for chocolate";

    expect(incorrect).toBe(output);

  });

})
