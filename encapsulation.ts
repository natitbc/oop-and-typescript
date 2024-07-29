// Encapsulation

class BankAccount {
  public accountNumber: number; // public variable
  private _balance: number; // private variable

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this._balance = balance;
  }

  getBalance(): number {
    return this._balance;
  }
  deposit(amount: number) {
    if(amount > 0) {  
      this._balance += amount;
    }
  }

  withdraw(amount: number) {
    if(amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    }
  }
}

const account = new BankAccount(1, 100);
console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());
