const express = require('express');
const router = express.Router();

// POST /api/calculate
router.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    let result;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Error: Division by zero';
            break;
        default:
            result = 'Invalid operation';
    }

    res.json({ result });
});

module.exports = router;
