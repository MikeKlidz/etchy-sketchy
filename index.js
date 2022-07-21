const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
const colorButtons = document.querySelectorAll('.btn');
const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');
const yellowButton = document.querySelector('.yellow');
const blueButton = document.querySelector('.blue');
const defaultButton = document.querySelector('.default');



function resetBoard(){
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    })
}

function changePenColor() {
    colorButtons.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            switch(e.target.textContent) {
                case 'Red':
                    cells.forEach((cell) => {
                        cell.addEventListener('mouseover', ()=> {
                            cell.style.backgroundColor = 'red';
                        })
                    })
                    break;
                case 'Green':
                    cells.forEach((cell) => {
                        cell.addEventListener('mouseover', ()=> {
                            cell.style.backgroundColor = 'green';
                        })
                    })
                    break;
                case 'Yellow':
                    cells.forEach((cell) => {
                        cell.addEventListener('mouseover', ()=> {
                            cell.style.backgroundColor = 'yellow';
                        })
                    })
                    break;
                case 'Blue':
                    cells.forEach((cell) => {
                        cell.addEventListener('mouseover', ()=> {
                            cell.style.backgroundColor = 'blue';
                        })
                    })
                    break;
                case 'Default':
                    cells.forEach((cell) => {
                        cell.addEventListener('mouseover', ()=> {
                            cell.style.backgroundColor = 'black';
                        })
                    })
                    break;
                default:
                    cells.forEach((cell) => {
                        cell.addEventListener('mouseover', ()=> {
                            cell.style.backgroundColor = 'black';
                        })
                    })
                    break;
            }

        })
    })
    }

changePenColor();

resetButton.addEventListener('click', resetBoard);
