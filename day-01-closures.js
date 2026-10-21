function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // ?
console.log(counterA()); // ?
console.log(counterB()); // ?   

// Answer: 1, 2, 1


// challenge: Explain why counterA and counterB maintain separate values. Then build a createBankAccount(initialBalance) function that returns deposit(), withdraw(), and getBalance() methods without exposing the balance variable directly.
The reason `counterA` and `counterB` maintain separate values is due to the concept of closures in JavaScript. When `createCounter()` is called, it creates a new execution context with its own `count` variable. Each time you call `createCounter()`, a new closure is created, and each closure has its own independent `count` variable. Therefore, when you call `counterA()`, it increments and returns its own `count`, while `counterB()` operates on a different `count` variable.

Here's how you can build a `createBankAccount(initialBalance)` function that returns `deposit()`, `withdraw()`, and `getBalance()` methods without exposing the balance variable directly:```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      balance -= amount;
    },
    getBalance: function () {
      return balance;
    }
  };
}   

// Example usage:
const myAccount = createBankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // 1300    

