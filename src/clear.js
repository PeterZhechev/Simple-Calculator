export function clear() {
    const display = document.getElementById('display');
    document.getElementById('c').addEventListener('click', () => {
        display.value = '';
    })
}

