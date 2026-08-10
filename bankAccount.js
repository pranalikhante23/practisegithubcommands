class bankAccount{

constructor(accoundHolderName,accountName,balance){

    this.accoundHolderName=accoundHolderName
    this.accountName=accountName
    this.balance=balance
}

deposit(amount){

 let newamount = this.balance+amount
 console.log(`Deposit amount ${amount} Updated balance is ${newamount}`);
 
}
 withdrawal(amountToWithdraw)
 {
  
  if(amountToWithdraw<=this.balance){
    let remainingAmount= this.balance-amountToWithdraw;
console.log(`Withdrawal amount is ${amountToWithdraw}, Current balance is ${remainingAmount}` );
  }
else {
    console.log("Insufficient balance");
    
}
  }
 }




let depositammount =new bankAccount("Pranali","ICIC123456",10000)
depositammount.deposit(5000);
depositammount.withdrawal(5000);
depositammount.withdrawal(15000);


