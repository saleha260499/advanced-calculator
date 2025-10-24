import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setDisplay(display + value);
    };

    const handleClear = () => {
        setDisplay('');
    };

    const handleDelete = () => {
        setDisplay(display.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            // eslint-disable-next-line no-new-func
            const result = Function(`"use strict"; return (${display})`)();

            setDisplay(result.toString());
        } catch {
            setDisplay('Error');
        }
    };

    const buttons = [
        '(', ')', 'C', 'DEL',
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    return (
        <div style={{ width: '270px', margin: '50px auto', textAlign: 'center', border: '2px solid #333', padding: '20px', borderRadius: '10px' }}>
            <h2>Advanced Calculator</h2>
            <div style={{ minHeight: '40px', marginBottom: '10px', border: '1px solid #aaa', padding: '5px', fontSize: '20px', wordWrap: 'break-word' }}>
                {display || '0'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 60px)', gap: '5px' }}>
                {buttons.map(btn => (
                    <button
                        key={btn}
                        style={{ padding: '15px', fontSize: '18px' }}
                        onClick={() => {
                            if (btn === 'C') handleClear();
                            else if (btn === 'DEL') handleDelete();
                            else if (btn === '=') handleCalculate();
                            else handleClick(btn);
                        }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
