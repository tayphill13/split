//Expenses = {this.total = num; credits = [], debits = []}

export class Expense {
  constructor(total, name, credits, debits, id) {
    this.total = total;
    this.name = name;
    this.credits = credits;
    this.debits = debits;
    this.id = id;
    this.type = 0;
  }

  verifyExpense() {
    const creditTotal = this.credits.reduce(function(acc, k) {
      return acc+k;
    });
    const debitTotal = this.debits.reduce(function(acc, k) {
      return acc+k;
    });
    if (creditTotal - debitTotal === 0) {
      return true;
    } else {
      return false;
    }
  }
}