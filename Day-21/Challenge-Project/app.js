const initialExpenses = [
    { title: "Groceries", amount: 1500, category: "Food", date: "2026-07-10" },
    { title: "Movie", amount: 500, category: "Entertainment", date: "2026-07-12" },
    { title: "Internet", amount: 900, category: "Bills", date: "2026-07-15" }
];

function createExpenseTracker(defaultData = initialExpenses) {
    let expenses = [...defaultData];

    return {
        addExpense: function ({ title, amount, category, date = new Date().toISOString().split('T')[0] }) {
            const fields = [title, amount, category];
            const isValid = fields.every(field => field !== undefined && field !== "");
            
            if (!isValid || amount <= 0) {
                console.log("Error: Invalid expense details.");
                return;
            }

            const newExpense = { title, amount, category, date };
            expenses = [...expenses, newExpense];
            console.log(`Added: "${title}" (${category}) - Rs. ${amount}`);
        },

        removeExpense: function (titleToRemove) {
            const exists = expenses.some(({ title }) => title.toLowerCase() === titleToRemove.toLowerCase());
            
            if (!exists) {
                console.log(`Error: Expense "${titleToRemove}" not found.`);
                return;
            }

            expenses = expenses.filter(({ title }) => title.toLowerCase() !== titleToRemove.toLowerCase());
            console.log(`Removed all expenses matching: "${titleToRemove}"`);
        },

        filterByCategory: function (targetCategory) {
            console.log(`\nFiltering by Category: [${targetCategory}]`);
            const filtered = expenses.filter(({ category }) => category.toLowerCase() === targetCategory.toLowerCase());
            
            if (filtered.length === 0) {
                console.log("No expenses found in this category.");
                return;
            }
            filtered.map(({ title, amount, date }) => console.log(`- ${date}: ${title} (Rs. ${amount})`));
        },

        getTotalSpending: function () {
            const total = expenses.reduce((sum, { amount }) => sum + amount, 0);
            console.log(`\nTotal Cumulative Spending: Rs. ${total}`);
            return total;
        },

        getExtremes: function () {
            if (expenses.length === 0) return console.log("No expenses recorded.");

            const highest = expenses.reduce((max, curr) => curr.amount > max.amount ? curr : max, expenses[0]);
            const lowest = expenses.reduce((min, curr) => curr.amount < min.amount ? curr : min, expenses[0]);

            const { title: hTitle, amount: hAmount } = highest;
            const { title: lTitle, amount: lAmount } = lowest;

            console.log(`\nHighest Expense: "${hTitle}" (Rs. ${hAmount})`);
            console.log(`Lowest Expense: "${lTitle}" (Rs. ${lAmount})`);
        },

        searchExpense: function (keyword) {
            console.log(`\nSearching for keyword: "${keyword}"`);
            const matches = expenses.filter(({ title, category }) => 
                title.toLowerCase().includes(keyword.toLowerCase()) || 
                category.toLowerCase().includes(keyword.toLowerCase())
            );

            if (matches.length === 0) {
                console.log("No matching expenses found.");
                return;
            }
            matches.map(({ title, amount, category }) => console.log(`- Found: ${title} in ${category} (Rs. ${amount})`));
        },

        getMonthlySummary: function () {
            console.log(`\nMonthly Summary Breakdown:`);
            
            const summary = expenses.reduce((acc, { amount, date }) => {
                const month = date.substring(0, 7);
                acc[month] = (acc[month] || 0) + amount;
                return acc;
            }, {});

            Object.keys(summary).map(month => {
                console.log(`- ${month}: Total spent Rs. ${summary[month]}`);
            });
        },

        viewAll: function () {
            console.log("\nCurrent Expense Log:");
            expenses.map(({ title, amount, category, date }) => {
                console.log(` [${date}] ${title} | Rs. ${amount} | ${category}`);
            });
        }
    };
}

const tracker = createExpenseTracker();

tracker.viewAll();

tracker.addExpense({ title: "Gym Membership", amount: 2500, category: "Health", date: "2026-07-01" });
tracker.addExpense({ title: "Coffee", amount: 150, category: "Food", date: "2026-06-18" });

tracker.getTotalSpending();
tracker.getExtremes();

tracker.filterByCategory("Food");
tracker.searchExpense("Mo");

tracker.getMonthlySummary();

tracker.removeExpense("Movie");
tracker.viewAll();
