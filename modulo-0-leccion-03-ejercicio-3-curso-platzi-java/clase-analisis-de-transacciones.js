// Exercise: Transaction analysis

const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary Deposit', amount: 2000 },
    { id: 3, description: 'Utility Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 }
]

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((accumulator, transaction) => accumulator + transaction.amount, 0)
console.log('Total Balance ', totalBalance)

// 2. Find Largest Transaction (income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
 return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest transaction is: ', largestTransaction)

