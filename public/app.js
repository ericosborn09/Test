document.getElementById('calculator-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Hide previous results
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');

    try {
        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: parseFloat(amount) })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Calculation failed');
        }

        // Display results
        document.getElementById('result-amount').textContent = `$${data.amount.toFixed(2)}`;
        document.getElementById('result-percentage').textContent = `${data.percentage}%`;
        document.getElementById('result-service-charge').textContent = `$${data.serviceCharge.toFixed(2)}`;
        document.getElementById('result-total').textContent = `$${data.total.toFixed(2)}`;

        resultDiv.classList.remove('hidden');
    } catch (error) {
        errorDiv.textContent = error.message;
        errorDiv.classList.remove('hidden');
    }
});

// Clear error when user starts typing
document.getElementById('amount').addEventListener('input', () => {
    document.getElementById('error').classList.add('hidden');
});
