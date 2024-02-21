export function digits() {

    const display = document.getElementById('display');

    document.getElementById('one').addEventListener('click', () => {
        display.value += '1';
    });

    document.getElementById('two').addEventListener('click', () => {
        display.value += '2';
    });

    document.getElementById('three').addEventListener('click', () => {
        display.value += '3';
    });

    document.getElementById('four').addEventListener('click', () => {
        display.value += '4';
    });

    document.getElementById('five').addEventListener('click', () => {
        display.value += '5';
    });

    document.getElementById('six').addEventListener('click', () => {
        display.value += '6';
    });

    document.getElementById('seven').addEventListener('click', () => {
        display.value += '7';
    });

    document.getElementById('eight').addEventListener('click', () => {
        display.value += '8';
    });

    document.getElementById('nine').addEventListener('click', () => {
        display.value += '9';
    });

    document.getElementById('zero').addEventListener('click', () => {
        display.value += '0';
    });

    document.getElementById('comma').addEventListener('click', () => {
        display.value += '.';
    });
}


