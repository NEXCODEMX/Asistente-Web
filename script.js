document.addEventListener('DOMContentLoaded', () => {
    const sudokuGrid = document.getElementById('sudoku-grid');
    const newGameBtn = document.getElementById('new-game');
    const solveGameBtn = document.getElementById('solve-game');
    const difficultySelect = document.getElementById('difficulty');
    const messageDiv = document.getElementById('message');

    let currentBoard = [];
    let solutionBoard = [];
    let selectedCell = null;

    // Genera un tablero de Sudoku resuelto
    function generateSolvedSudoku() {
        let board = Array(9).fill(0).map(() => Array(9).fill(0));
        solve(board);
        return board;
    }

    // Resuelve el Sudoku usando backtracking
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
                                board[row][col] = 0; // backtrack
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    // Valida si un número es válido en una posición dada
    function isValid(board, row, col, num) {
        // Check row
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num) {
                return false;
            }
        }

        // Check column
        for (let x = 0; x < 9; x++) {
            if (board[x][col] === num) {
                return false;
            }
        }

        // Check 3x3 box
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

    // Remueve números para crear el juego
    function removeNumbers(board, difficulty) {
        let cellsToRemove;
        switch (difficulty) {
            case 'easy':
                cellsToRemove = 40; // Aproximadamente 40 números pre-rellenados (41 números removidos)
                break;
            case 'medium':
                cellsToRemove = 50; // Aproximadamente 31 números pre-rellenados (50 números removidos)
                break;
            case 'hard':
                cellsToRemove = 60; // Aproximadamente 21 números pre-rellenados (60 números removidos)
                break;
            default:
                cellsToRemove = 40;
        }

        let newBoard = JSON.parse(JSON.stringify(board)); // Clonar el tablero
        let count = 0;
        while (count < cellsToRemove) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);

            if (newBoard[row][col] !== 0) {
                let temp = newBoard[row][col];
                newBoard[row][col] = 0;

                // Simple check to ensure a unique solution (more robust checks are complex)
                let tempBoard = JSON.parse(JSON.stringify(newBoard));
                let solutionsFound = 0;
                // This is a simplified check. A true Sudoku solver for uniqueness is more complex.
                // For this example, we'll assume if it's solvable it's good enough.
                if (solve(tempBoard)) {
                    count++;
                } else {
                    newBoard[row][col] = temp; // Put it back if it makes it unsolvable
                }
            }
        }
        return newBoard;
    }

    // Inicializa un nuevo juego
    function initGame() {
        messageDiv.textContent = '';
        const solved = generateSolvedSudoku();
        solutionBoard = JSON.parse(JSON.stringify(solved)); // Almacena la solución
        currentBoard = removeNumbers(solved, difficultySelect.value); // Crea el juego con números removidos
        renderGrid();
    }

    // Renderiza la cuadrícula del Sudoku en el HTML
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

    // Maneja la entrada del usuario en una celda
    function handleCellInput(event) {
        let input = event.target;
        let value = input.value.trim();
        let row = parseInt(input.parentNode.dataset.row);
        let col = parseInt(input.parentNode.dataset.col);

        // Limpiar entrada no numérica o fuera del rango 1-9
        if (value === '' || isNaN(value) || parseInt(value) < 1 || parseInt(value) > 9) {
            input.value = '';
            currentBoard[row][col] = 0;
            input.parentNode.classList.remove('error'); // Eliminar clase de error si se vacía
        } else {
            let num = parseInt(value);
            currentBoard[row][col] = num;
            validateAndHighlightCell(row, col);
            checkWin();
        }
    }

    // Valida y resalta la celda
    function validateAndHighlightCell(row, col) {
        const cell = sudokuGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        const inputValue = currentBoard[row][col];

        if (inputValue !== 0 && solutionBoard[row][col] !== inputValue) {
            cell.classList.add('error');
        } else {
            cell.classList.remove('error');
        }

        // También valida las celdas relacionadas (fila, columna, bloque)
        highlightRelatedErrors(row, col);
    }

    function highlightRelatedErrors(currentRow, currentCol) {
        // Eliminar errores previos en todas las celdas editables
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


    // Maneja el foco en una celda
    function handleCellFocus(event) {
        if (selectedCell) {
            selectedCell.classList.remove('selected');
        }
        selectedCell = event.target.parentNode;
        selectedCell.classList.add('selected');
    }

    // Maneja la pérdida de foco en una celda
    function handleCellBlur(event) {
        if (selectedCell) {
            selectedCell.classList.remove('selected');
            selectedCell = null;
        }
    }

    // Comprueba si el juego ha sido completado correctamente
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
            messageDiv.textContent = ''; // Limpiar mensaje si aún no está resuelto
            messageDiv.classList.remove('success');
            messageDiv.classList.remove('error');
        }
    }

    // Resuelve el juego y muestra la solución
    function solveGame() {
        currentBoard = JSON.parse(JSON.stringify(solutionBoard)); // Copia la solución
        renderGrid(); // Vuelve a renderizar la cuadrícula con la solución
        messageDiv.textContent = 'Aquí está la solución. ¡Intenta de nuevo para mejorar!';
        messageDiv.classList.remove('success');
        messageDiv.classList.add('error');
    }

    // Event Listeners
    newGameBtn.addEventListener('click', initGame);
    solveGameBtn.addEventListener('click', solveGame);

    // Iniciar el juego al cargar la página
    initGame();
});