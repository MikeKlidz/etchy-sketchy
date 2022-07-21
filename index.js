const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');


cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    })
})

resetButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    })
})
