document.addEventListener('DOMContentLoaded', () => {
    const sudokuGrid = document.getElementById('sudoku-grid');
    const newGameBtn = document.getElementById('new-game');
    const solveGameBtn = document.getElementById('solve-game');
    const difficultySelect = document.getElementById('difficulty');
    const messageDiv = document.getElementById('message');
    let currentBoard = [];
    let solutionBoard = [];
    let selectedCell = null;
    function generateSolvedSudoku() {
        let board = Array(9).fill(0).map(() => Array(9).fill(0));
        solve(board);
        return board;
    }
    function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) {
                                return true;
                            } else {
                                board[row][col] = 0; 
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    function isValid(board, row, col, num) {
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num) {
                return false;
            }
        }
        for (let x = 0; x < 9; x++) {
            if (board[x][col] === num) {
                return false;
            }
        }
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    function removeNumbers(board, difficulty) {
        let cellsToRemove;
        switch (difficulty) {
            case 'easy':
                cellsToRemove = 40; 
                break;
            case 'medium':
                cellsToRemove = 50; 
                break;
            case 'hard':
                cellsToRemove = 60; 
                break;
            default:
                cellsToRemove = 40;
        }
        let newBoard = JSON.parse(JSON.stringify(board)); 
        let count = 0;
        while (count < cellsToRemove) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);
            if (newBoard[row][col] !== 0) {
                let temp = newBoard[row][col];
                newBoard[row][col] = 0;
                let tempBoard = JSON.parse(JSON.stringify(newBoard));
                let solutionsFound = 0;
                if (solve(tempBoard)) {
                    count++;
                } else {
                    newBoard[row][col] = temp; 
                }
            }
        }
        return newBoard;
    }
    function initGame() {
        messageDiv.textContent = '';
        const solved = generateSolvedSudoku();
        solutionBoard = JSON.parse(JSON.stringify(solved)); 
        currentBoard = removeNumbers(solved, difficultySelect.value); 
        renderGrid();
    }
    function renderGrid() {
        sudokuGrid.innerHTML = '';
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = document.createElement('div');
                cell.classList.add('sudoku-cell');
                cell.dataset.row = r;
                cell.dataset.col = c;
                if (currentBoard[r][c] !== 0) {
                    cell.textContent = currentBoard[r][c];
                    cell.classList.add('prefilled');
                } else {
                    const input = document.createElement('input');
                    input.type = 'number';
                    input.min = '1';
                    input.max = '9';
                    input.maxLength = '1'; // Para evitar más de un dígito
                    input.classList.add('user-input');
                    input.addEventListener('input', handleCellInput);
                    input.addEventListener('focus', handleCellFocus);
                    input.addEventListener('blur', handleCellBlur);
                    cell.appendChild(input);
                }
                sudokuGrid.appendChild(cell);
            }
        }
    }
    function handleCellInput(event) {
        let input = event.target;
        let value = input.value.trim();
        let row = parseInt(input.parentNode.dataset.row);
        let col = parseInt(input.parentNode.dataset.col);
        if (value === '' || isNaN(value) || parseInt(value) < 1 || parseInt(value) > 9) {
            input.value = '';
            currentBoard[row][col] = 0;
            input.parentNode.classList.remove('error'); 
        } else {
            let num = parseInt(value);
            currentBoard[row][col] = num;
            validateAndHighlightCell(row, col);
            checkWin();
        }
    }
    function validateAndHighlightCell(row, col) {
        const cell = sudokuGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        const inputValue = currentBoard[row][col];

        if (inputValue !== 0 && solutionBoard[row][col] !== inputValue) {
            cell.classList.add('error');
        } else {
            cell.classList.remove('error');
        }
        highlightRelatedErrors(row, col);
    }
    function highlightRelatedErrors(currentRow, currentCol) {
        document.querySelectorAll('.sudoku-cell:not(.prefilled)').forEach(cell => {
            cell.classList.remove('error');
        });
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (currentBoard[r][c] !== 0 && solutionBoard[r][c] !== currentBoard[r][c]) {
                    sudokuGrid.querySelector(`[data-row="${r}"][data-col="${c}"]`).classList.add('error');
                }
            }
        }
    }
    function handleCellFocus(event) {
        if (selectedCell) {
            selectedCell.classList.remove('selected');
        }
        selectedCell = event.target.parentNode;
        selectedCell.classList.add('selected');
    }
    function handleCellBlur(event) {
        if (selectedCell) {
            selectedCell.classList.remove('selected');
            selectedCell = null;
        }
    }
    function checkWin() {
        let isSolved = true;
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (currentBoard[r][c] === 0 || currentBoard[r][c] !== solutionBoard[r][c]) {
                    isSolved = false;
                    break;
                }
            }
            if (!isSolved) break;
        }
        if (isSolved) {
            messageDiv.textContent = '¡Felicidades, has resuelto el Sudoku!';
            messageDiv.classList.add('success');
            messageDiv.classList.remove('error');
        } else {
            messageDiv.textContent = ''; 
            messageDiv.classList.remove('success');
            messageDiv.classList.remove('error');
        }
    }
    function solveGame() {
        currentBoard = JSON.parse(JSON.stringify(solutionBoard)); 
        renderGrid(); 
        messageDiv.textContent = 'Aquí está la solución. ¡Intenta de nuevo para mejorar!';
        messageDiv.classList.remove('success');
        messageDiv.classList.add('error');
    }
    newGameBtn.addEventListener('click', initGame);
    solveGameBtn.addEventListener('click', solveGame);
    initGame();
});