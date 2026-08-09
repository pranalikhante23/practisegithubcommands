class inventory {

constructor (itemName,quantity, price ){

this.itemName=itemName
this.quantity=quantity
this.price=price
}

}



//created object of inventory class

let name=new inventory("Laptop", 10, "$1200" );

let mobileInventory=new inventory("Mobile", 20, "$800.50" );
console.log(name.itemName);

console.log(name.quantity);

console.log(name.price);


console.log(mobileInventory.itemName);

console.log(mobileInventory.quantity);

console.log(mobileInventory.price);




