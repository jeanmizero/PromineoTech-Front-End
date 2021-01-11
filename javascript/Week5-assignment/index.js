class Pizza {
    constructor(name){
      this.name = name;
      this.ingredients = [];
    }
    pizzaDescription(){
      return `${this.name} has ${this.ingredients.length} as pizza ingredients`
    }
  }
  class PizzaMenu{
    constructor(){
      this.toppings = [];
      this.optionTopping = null;
    }
    start(){
      let selection = this.showPizzaOptions();
      while(selection != 0){
        switch(selection){
          case "1":
            this.createPizza();
            break;
          case "2":
            this.viewPizza();
            break;
          case "3":
            this.deletePizza();
            break;
          case "4":
            this.displayAllPizza();
            break;
          default:
            selection = 0;
        } 
        selection = this.showPizzaOptions();
      }
      alert("Order your favorite Pizza!");
    }
    showPizzaOptions(){
      return prompt( `
        0) Exit
        1) Create a pizza
        2) View a pizza
        3) Delete a pizza
        4) Display all pizza 
      `);
    }
    showPizza(pizzaName){
      return prompt( `
       View your order list:
        ${pizzaName} 
      `);
      
    }
    //Display pizza info
    displayAllPizza(){
      let pizzaList = " ";
      for (let i = 0; i < this.toppings.length; i++){
        pizzaList += i + ") " + this.toppings[i].name + "\n" ;
      }
      alert(pizzaList);
    }
    //Create pizza menu
    createPizza(){
      let name = prompt("Make your order pizza: ");
      this.toppings.push(new Pizza(name));
    }
    //View pizza menu
    viewPizza(){
      let index = prompt("View the Pizza ordered: ");
      if(index > -1 && index < this.toppings.length){
        this.optionTopping = this.toppings[index];
        let description = " Pizza name: " + this.optionTopping.name + "\n";
        let selection = this.showPizza(description);
      }
    }
  // Delete team
    deletePizza(){
      let index = prompt("Delete pizza on list you don't want to order:");
      if(index > - 1 && index < this.toppings.length){
        this.toppings.splice(index, 1);
      }
    } 
  }
  let pizzaMenu = new PizzaMenu();
  pizzaMenu.start();
  
  