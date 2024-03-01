let operandOne = 0;
let operandTwo = 0;

let operator = '';

export function operators() {

    const display = document.getElementById('display');

    document.getElementById('division').addEventListener('click', () => {
        operandOne = Number(display.value);
        operator = 'division';
        document.getElementById('display').value = '';
    });

    document.getElementById('multiplication').addEventListener('click', () => {
        operandOne = Number(display.value);
        operator = 'multiplication';
        document.getElementById('display').value = '';
    });

    document.getElementById('subtraction').addEventListener('click', () => {
        operandOne = Number(display.value);
        operator = 'subtraction';

        if (document.getElementById('display').value === '') {
            document.getElementById('display').value = '-';
        } else {
            document.getElementById('display').value = '';
        }
    });

    document.getElementById('addition').addEventListener('click', () => {
        operandOne = Number(display.value);
        operator = 'addition';
        document.getElementById('display').value = '';
    });
}

function calculate() {

    document.getElementById('equal').addEventListener('click', () => {
        operandTwo = Number(display.value);

        switch (operator) {

            case 'division':
                document.getElementById('display').value = operandOne / operandTwo;
                break;

            case 'multiplication':
                document.getElementById('display').value = operandOne * operandTwo;
                break;

            case 'subtraction':
                document.getElementById('display').value = operandOne - operandTwo;
                break;

            case 'addition':
                document.getElementById('display').value = operandOne + operandTwo;
                break;
        }

        if (document.getElementById('display').value === 'NaN') {
            document.getElementById('display').value = 'Not a Number!';
        }
        
        operator = '';
    });
}

calculate();