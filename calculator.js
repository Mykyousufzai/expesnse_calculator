document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const resultText = document.getElementById('resultText');

    calculateButton.addEventListener('click', function () {
        const income = parseFloat(incomeInput.value);
        const expenses = parseFloat(expensesInput.value);
        const profitLoss = income - expenses;

        if (!isNaN(profitLoss)) {
            resultText.innerText = `Profit/Loss: $${profitLoss.toFixed(2)}`;
        } else {
            resultText.innerText = 'Please enter valid numbers.';
        }
    });
});
