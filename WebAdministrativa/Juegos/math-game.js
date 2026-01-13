document.addEventListener('DOMContentLoaded', () => {
    const mathProblemText = document.getElementById('math-problem-text');
    const mathAnswerInput = document.getElementById('math-answer-input');
    const newMathProblemBtn = document.getElementById('new-math-problem');
    const checkMathAnswerBtn = document.getElementById('check-math-answer');
    const mathModuleSelect = document.getElementById('math-module');
    const mathTopicSelect = document.getElementById('math-topic');
    const mathResultMessage = document.getElementById('math-result-message');
    let currentProblem = {}; 
    const mathTopics = {
        'algebra-basica': [
            { id: 'jerarquia-operaciones', name: 'Jerarquía de Operaciones', generateProblem: generateJerarquiaOperaciones },
            { id: 'valor-absoluto', name: 'Valor Absoluto (Ecuaciones/Inecuaciones)', generateProblem: generateValorAbsoluto },
            { id: 'radicales-racionalizacion', name: 'Radicales y Racionalización', generateProblem: generateRadicalesRacionalizacion }
        ],
        'algebra-intermedia': [
            { id: 'ecuaciones-lineales', name: 'Ecuaciones Lineales', generateProblem: generateLinearEquation },
            { id: 'ecuaciones-cuadraticas', name: 'Ecuaciones Cuadráticas', generateProblem: generateQuadraticEquation },
            { id: 'factorizacion-trinomios', name: 'Factorización de Trinomios', generateProblem: generateFactorizacionTrinomios },
            { id: 'sistemas-2x2', name: 'Sistemas de Ecuaciones 2x2', generateProblem: generateSistemas2x2 }
        ],
        'numeros-complejos': [
            { id: 'operaciones-complejos', name: 'Operaciones con Números Complejos', generateProblem: generateOperacionesComplejos },
            { id: 'potencias-i', name: 'Potencias de i', generateProblem: generatePotenciasI }
        ],
        'funciones-propiedades': [
            { id: 'dominio-rango', name: 'Dominio y Rango (Funciones simples)', generateProblem: generateDominioRango },
            { id: 'composicion-funciones', name: 'Composición de Funciones', generateProblem: generateComposicionFunciones }
        ],
        'funciones-algebraicas': [
            { id: 'funcion-lineal-interseccion', name: 'Función Lineal (Intersección con ejes)', generateProblem: generateFuncionLinealInterseccion },
            { id: 'funcion-cuadratica-vertice', name: 'Función Cuadrática (Vértice)', generateProblem: generateFuncionCuadraticaVertice }
        ],
        'analisis-polinomios': [
            { id: 'division-sintetica', name: 'División Sintética (Factor)', generateProblem: generateDivisionSintetica },
            { id: 'ceros-polinomio', name: 'Ceros de un Polinomio', generateProblem: generateCerosPolinomio }
        ],
        'fracciones-parciales': [
            { id: 'descomposicion-lineal', name: 'Descomposición Lineal Simple', generateProblem: generateDescomposicionLinealSimple }
        ],
        'expo-log': [
            { id: 'ecuaciones-exponenciales-basicas', name: 'Ecuaciones Exponenciales Básicas', generateProblem: generateEcuacionesExponencialesBasicas },
            { id: 'propiedades-logaritmos', name: 'Propiedades de Logaritmos', generateProblem: generatePropiedadesLogaritmos }
        ],
        'trigonometria': [
            { id: 'razones-trigonometricas', name: 'Razones Trigonométricas (Triángulo Rectángulo)', generateProblem: generateRazonesTrigonometricas },
            { id: 'identidades-fundamentales', name: 'Identidades Trigonométricas Fundamentales', generateProblem: generateIdentidadesFundamentales }
        ],
        'geometria-analitica': [
            { id: 'distancia-puntos', name: 'Distancia entre dos puntos', generateProblem: generateDistanciaPuntos },
            { id: 'ecuacion-recta', name: 'Ecuación de la Recta (Punto-Pendiente)', generateProblem: generateEcuacionRecta }
        ],
        'sucesiones-series': [
            { id: 'termino-n-aritmetica', name: 'Término n-ésimo (Aritmética)', generateProblem: generateTerminoNaritmetica },
            { id: 'suma-geometrica-finita', name: 'Suma Geométrica Finita', generateProblem: generateSumaGeometricaFinita }
        ],
        'combinatoria-probabilidad': [
            { id: 'permutaciones-simples', name: 'Permutaciones Simples', generateProblem: generatePermutacionesSimples },
            { id: 'probabilidad-basica', name: 'Probabilidad Básica', generateProblem: generateProbabilidadBasica }
        ],
        'introduccion-calculo': [
            { id: 'limite-grafica', name: 'Idea de Límite (Gráfica informal)', generateProblem: generateLimiteGrafica }
        ]
    };
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function formatPolynomial(coeffs) {
        let terms = [];
        for (let i = coeffs.length - 1; i >= 0; i--) {
            const coeff = coeffs[i];
            if (coeff === 0) continue;
            let term = '';
            if (i === 0) { 
                term = `${coeff}`;
            } else if (i === 1) { 
                term = `${coeff === 1 ? '' : coeff === -1 ? '-' : coeff}x`;
            } else { 
                term = `${coeff === 1 ? '' : coeff === -1 ? '-' : coeff}x^${i}`;
            }

            if (terms.length > 0 && coeff > 0) {
                term = `+ ${term}`;
            } else if (coeff < 0 && terms.length > 0) {
                 term = `- ${Math.abs(coeff)}${i > 0 ? (i === 1 ? 'x' : `x^${i}`) : ''}`;
            }
             terms.push(term);
        }
        return terms.join(' ').replace(/\s\+ -/g, ' - ');
    }
    function generateJerarquiaOperaciones() {
        let num1 = getRandomInt(1, 10);
        let num2 = getRandomInt(1, 10);
        let num3 = getRandomInt(1, 10);
        let op1 = ['+', '-', '*'][getRandomInt(0, 2)];
        let op2 = ['+', '-', '*'][getRandomInt(0, 2)];
        let problemText = `${num1} ${op1} ${num2} ${op2} ${num3}`;
        let answer;
        try {
            answer = eval(problemText.replace(/\*/g, '*').replace(/\//g, '/')).toString();
        } catch (e) {
            return generateJerarquiaOperaciones();
        }
        return { problem: `Resuelve: ${problemText}`, answer: answer };
    }
    function generateValorAbsoluto() {
        let a = getRandomInt(1, 5);
        let b = getRandomInt(-10, 10);
        let c = getRandomInt(1, 15);
        let problem = `|${a}x + ${b}| = ${c}`;
        let sol1_num = c - b;
        let sol2_num = -c - b;
        if (sol1_num % a !== 0 && sol2_num % a !== 0) {
             return generateValorAbsoluto();
        }
        let x1 = sol1_num / a;
        let x2 = sol2_num / a;
        let answers = [x1, x2].sort((n1, n2) => n1 - n2).map(String).filter(s => !isNaN(parseFloat(s)));
        if (answers.length === 0) return generateValorAbsoluto(); 
        return { problem: `Resuelve: ${problem}`, answer: answers.join(',') };
    }
    function generateRadicalesRacionalizacion() {
        let num = getRandomInt(2, 50);
        let den = getRandomInt(2, 10);
        let problem = `${num} / √${den}`;
        let answer = `${num}√${den} / ${den}`; 
        return { problem: `Racionaliza el denominador: ${problem}`, answer: answer };
    }
    function generateLinearEquation() {
        const a = getRandomInt(1, 10);
        const x = getRandomInt(-5, 5);
        const b = getRandomInt(1, 10);
        const c = a * x + b;
        const problem = `${a}x + ${b} = ${c}`;
        const answer = x;
        return { problem: `Resuelve: ${problem}`, answer: answer.toString() };
    }
    function generateQuadraticEquation() {
        const p = getRandomInt(-5, 5);
        const q = getRandomInt(-5, 5);
        const b = -(p + q);
        const c = p * q;
        let problem = `x²`;
        if (b !== 0) {
            problem += (b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`) + `x`;
        }
        if (c !== 0) {
            problem += (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`);
        }
        problem += ` = 0`;
        const answers = [p, q].sort((a, b) => a - b).map(String);
        return { problem: `Resuelve para x: ${problem}`, answer: answers.join(',') };
    }
    function generateFactorizacionTrinomios() {
        let a = 1; 
        let p = getRandomInt(-5, 5);
        let q = getRandomInt(-5, 5);
        let b = p + q;
        let c = p * q;
        let problem = `x²`;
        if (b !== 0) {
            problem += (b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`) + `x`;
        }
        if (c !== 0) {
            problem += (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`);
        }
        const factor1 = `(x${p >= 0 ? '+' : ''}${p})`;
        const factor2 = `(x${q >= 0 ? '+' : ''}${q})`;
        const answer = [factor1, factor2].sort().join(''); 
        return { problem: `Factoriza: ${problem}`, answer: answer };
    }
    function generateSistemas2x2() {
        let x = getRandomInt(-5, 5);
        let y = getRandomInt(-5, 5);
        let a1 = getRandomInt(1, 5);
        let b1 = getRandomInt(1, 5);
        let c1 = a1 * x + b1 * y;
        let a2 = getRandomInt(1, 5);
        let b2 = getRandomInt(1, 5);
        let c2 = a2 * x + b2 * y;
        if (a1 * b2 === a2 * b1) {
            return generateSistemas2x2();
        }
        let problem = `Sistema de ecuaciones:\n${a1}x + ${b1}y = ${c1}\n${a2}x + ${b2}y = ${c2}`;
        let answer = `x=${x},y=${y}`;
        return { problem: problem, answer: answer };
    }
    function generateOperacionesComplejos() {
        let a1 = getRandomInt(-10, 10), b1 = getRandomInt(-10, 10);
        let a2 = getRandomInt(-10, 10), b2 = getRandomInt(-10, 10);
        let operation = ['+', '-', '*'][getRandomInt(0, 2)];
        let problem, realPart, imagPart;
        if (operation === '+') {
            realPart = a1 + a2;
            imagPart = b1 + b2;
            problem = `(${a1}${b1 >= 0 ? '+' : ''}${b1}i) + (${a2}${b2 >= 0 ? '+' : ''}${b2}i)`;
        } else if (operation === '-') {
            realPart = a1 - a2;
            imagPart = b1 - b2;
            problem = `(${a1}${b1 >= 0 ? '+' : ''}${b1}i) - (${a2}${b2 >= 0 ? '+' : ''}${b2}i)`;
        } else { 
            realPart = (a1 * a2) - (b1 * b2);
            imagPart = (a1 * b2) + (b1 * a2);
            problem = `(${a1}${b1 >= 0 ? '+' : ''}${b1}i) * (${a2}${b2 >= 0 ? '+' : ''}${b2}i)`;
        }
        let answer = `${realPart}${imagPart >= 0 ? '+' : ''}${imagPart}i`;
        return { problem: `Resuelve: ${problem}`, answer: answer };
    }
    function generatePotenciasI() {
        let exponent = getRandomInt(0, 100);
        let remainder = exponent % 4;
        let answer;
        switch (remainder) {
            case 0: answer = '1'; break;
            case 1: answer = 'i'; break;
            case 2: answer = '-1'; break;
            case 3: answer = '-i'; break;
        }
        return { problem: `Calcula i^${exponent}`, answer: answer };
    }
    function generateDominioRango() {
        const type = getRandomInt(0, 1); 
        if (type === 0) { 
            let m = getRandomInt(-5, 5);
            let b = getRandomInt(-10, 10);
            if (m === 0) m = 1; 
            let problem = `f(x) = ${m}x ${b >= 0 ? '+' : '-'} ${Math.abs(b)}`;
            let answer = 'Dominio: (-inf, inf), Rango: (-inf, inf)';
            if (m === 0) { 
                 answer = `Dominio: (-inf, inf), Rango: {${b}}`;
            }
            return { problem: `Encuentra el dominio y rango de: ${problem}`, answer: answer };
        } else { 
            let a = getRandomInt(-3, 3);
            if (a === 0) a = 1; 
            let b = getRandomInt(-5, 5);
            let c = getRandomInt(-10, 10);
            let problem = `f(x) = ${a}x² ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}`;
            let vertexX = -b / (2 * a);
            let vertexY = a * vertexX * vertexX + b * vertexX + c;
            let range;
            if (a > 0) { 
                range = `[${vertexY.toFixed(2)}, inf)`; 
            } else { 
                range = `(-inf, ${vertexY.toFixed(2)}]`;
            }
            return { problem: `Encuentra el dominio y rango de: ${problem}`, answer: `Dominio: (-inf, inf), Rango: ${range}` };
        }
    }
    function generateComposicionFunciones() {
        let f_coeff = getRandomInt(1, 5);
        let f_const = getRandomInt(1, 5);
        let g_coeff = getRandomInt(1, 5);
        let g_const = getRandomInt(1, 5);
        let fx_str = `f(x) = ${f_coeff}x + ${f_const}`;
        let gx_str = `g(x) = ${g_coeff}x + ${g_const}`;
        let result_coeff = f_coeff * g_coeff;
        let result_const = f_coeff * g_const + f_const;
        let problem = `Dadas ${fx_str} y ${gx_str}, encuentra (f o g)(x).`;
        let answer = `${result_coeff}x + ${result_const}`;
        return { problem: problem, answer: answer };
    }
    function generateFuncionLinealInterseccion() {
        let m = getRandomInt(-5, 5);
        let b = getRandomInt(-10, 10);
        if (m === 0) m = 1; 
        let problem = `Encuentra las intersecciones con los ejes de la función: y = ${m}x ${b >= 0 ? '+' : '-'} ${Math.abs(b)}`;
        let x_intercept = -b / m;
        let y_intercept = b;
        let answer = `x-intercepto: ${x_intercept.toFixed(2)}, y-intercepto: ${y_intercept.toFixed(2)}`;
        if (x_intercept === 0 && y_intercept === 0) { 
            answer = `x-intercepto: 0, y-intercepto: 0`;
        }
        return { problem: problem, answer: answer };
    }
    function generateFuncionCuadraticaVertice() {
        let a = getRandomInt(-3, 3);
        if (a === 0) a = 1;
        let b = getRandomInt(-10, 10);
        let c = getRandomInt(-10, 10);
        let problem = `Encuentra el vértice de la parábola: f(x) = ${a}x² ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}`;
        let vertexX = -b / (2 * a);
        let vertexY = a * vertexX * vertexX + b * vertexX + c;
        return { problem: problem, answer: `(${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})` };
    }
    function generateDivisionSintetica() {
        let root = getRandomInt(-3, 3); 
        if (root === 0) root = 1;
        let a_coeff = getRandomInt(1, 5);
        let b_coeff = getRandomInt(-5, 5);
        let polyCoeffs = [
            -root * b_coeff, 
            b_coeff - root * a_coeff, 
            a_coeff 
        ];
        polyCoeffs.reverse();
        let problemPoly = formatPolynomial(polyCoeffs);
        let divisor = `(x ${root > 0 ? '-' : '+'} ${Math.abs(root)})`;
        let quotient = `${a_coeff}x ${b_coeff >= 0 ? '+' : '-'} ${Math.abs(b_coeff)}`;

        return { problem: `Realiza la división sintética: (${problemPoly}) / ${divisor}. Da el cociente.`, answer: quotient };
    }
    function generateCerosPolinomio() {
        let r1 = getRandomInt(-4, 4);
        let r2 = getRandomInt(-4, 4);
        if (r1 === r2) { 
            return generateCerosPolinomio();
        }
        let b = -(r1 + r2);
        let c = r1 * r2;
        let problem = `f(x) = x²`;
        if (b !== 0) {
            problem += (b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`) + `x`;
        }
        if (c !== 0) {
            problem += (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`);
        }
        const answers = [r1, r2].sort((a, b) => a - b).map(String);
        return { problem: `Encuentra los ceros reales de la función polinómica: ${problem}`, answer: answers.join(',') };
    }
    function generateDescomposicionLinealSimple() {
        let a = getRandomInt(1, 5);
        let b = getRandomInt(1, 5);
        let x1 = getRandomInt(-5, 5);
        let x2 = getRandomInt(-5, 5);
        if (x1 === x2) return generateDescomposicionLinealSimple(); 
        let numeratorXCoeff = a + b;
        let numeratorConst = - (a * x2 + b * x1);
        let denominatorPoly = `(x ${x1 > 0 ? '-' : '+'} ${Math.abs(x1)})(x ${x2 > 0 ? '-' : '+'} ${Math.abs(x2)})`;
        let numeratorProblem = `${numeratorXCoeff}x ${numeratorConst >= 0 ? '+' : '-'} ${Math.abs(numeratorConst)}`;
        return { problem: `Descompón en fracciones parciales: (${numeratorProblem}) / ${denominatorPoly}. Da los valores de A y B.`, answer: `A=${a},B=${b}` };
    }
    function generateEcuacionesExponencialesBasicas() {
        let base = getRandomInt(2, 5);
        let exponent = getRandomInt(1, 4);
        let result = Math.pow(base, exponent);

        let problem = `${base}^x = ${result}`;
        return { problem: `Resuelve para x: ${problem}`, answer: exponent.toString() };
    }
    function generatePropiedadesLogaritmos() {
        let a = getRandomInt(2, 10);
        let b = getRandomInt(2, 10);
        let c = getRandomInt(2, 10);
        let type = getRandomInt(0, 2);
        let problem, answer;
        if (type === 0) {
            problem = `log(${a} * ${b})`;
            answer = `log(${a}) + log(${b})`;
        } else if (type === 1) {
            problem = `log(${a} / ${b})`;
            answer = `log(${a}) - log(${b})`;
        } else {
            problem = `log(${a}^${b})`;
            answer = `${b}log(${a})`;
        }
        return { problem: `Expande la expresión logarítmica: ${problem}`, answer: answer };
    }
    function generateRazonesTrigonometricas() {
        const sides = [[3, 4, 5], [5, 12, 13], [8, 15, 17]];
        const [a, b, c] = sides[getRandomInt(0, sides.length - 1)]; 
        const angleType = getRandomInt(0, 1); 
        const angle = getRandomInt(0, 1) === 0 ? 'A' : 'B'; 
        let problem, answer;
        if (angleType === 0) { 
            problem = `En un triángulo rectángulo, si el lado opuesto al ángulo ${angle} es ${angle === 'A' ? a : b} y la hipotenusa es ${c}, ¿cuál es el sen(${angle})?`;
            answer = (angle === 'A' ? a / c : b / c).toFixed(2);
        } else { 
            problem = `En un triángulo rectángulo, si el lado adyacente al ángulo ${angle} es ${angle === 'A' ? b : a} y la hipotenusa es ${c}, ¿cuál es el cos(${angle})?`;
            answer = (angle === 'A' ? b / c : a / c).toFixed(2);
        }
        return { problem: problem, answer: answer };
    }
    function generateIdentidadesFundamentales() {
        const type = getRandomInt(0, 1); 
        let problem, answer;
        if (type === 0) {
            problem = `Simplifica: sen²(θ) + cos²(θ)`;
            answer = `1`;
        } else {
            problem = `Simplifica: tan(θ) - sen(θ)/cos(θ)`;
            answer = `0`;
        }
        return { problem: problem, answer: answer };
    }
    function generateDistanciaPuntos() {
        let x1 = getRandomInt(-10, 10);
        let y1 = getRandomInt(-10, 10);
        let x2 = getRandomInt(-10, 10);
        let y2 = getRandomInt(-10, 10);
        let problem = `Calcula la distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}).`;
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return { problem: problem, answer: distance.toFixed(2) };
    }
    function generateEcuacionRecta() {
        let x1 = getRandomInt(-5, 5);
        let y1 = getRandomInt(-5, 5);
        let x2 = getRandomInt(-5, 5);
        let y2 = getRandomInt(-5, 5);
        if (x1 === x2 && y1 === y2) return generateEcuacionRecta(); 
        if (x1 === x2) { 
            return { problem: `Encuentra la ecuación de la recta que pasa por (${x1}, ${y1}) y (${x2}, ${y2}).`, answer: `x=${x1}` };
        }
        let m = (y2 - y1) / (x2 - x1);
        let b = y1 - m * x1; 
        let answer = `y=${m.toFixed(2)}x${b >= 0 ? '+' : '-'}${Math.abs(b).toFixed(2)}`;
        if (b === 0) answer = `y=${m.toFixed(2)}x`;
        if (m === 0) answer = `y=${b.toFixed(2)}`;
        return { problem: `Encuentra la ecuación de la recta que pasa por (${x1}, ${y1}) y (${x2}, ${y2}).`, answer: answer };
    }
    function generateTerminoNaritmetica() {
        let a1 = getRandomInt(-10, 10); 
        let d = getRandomInt(-5, 5); 
        if (d === 0) d = 1;
        let n = getRandomInt(5, 15); 
        let an = a1 + (n - 1) * d;
        return { problem: `En una progresión aritmética con a₁=${a1} y diferencia común d=${d}, encuentra el ${n}º término.`, answer: an.toString() };
    }
    function generateSumaGeometricaFinita() {
        let a = getRandomInt(1, 5); 
        let r = getRandomInt(2, 3); 
        let n = getRandomInt(3, 5); 
        let sum = a * (1 - Math.pow(r, n)) / (1 - r);
        return { problem: `Calcula la suma de los primeros ${n} términos de una progresión geométrica con a₁=${a} y razón común r=${r}.`, answer: sum.toString() };
    }
    function generatePermutacionesSimples() {
        let n = getRandomInt(3, 7);
        let k = getRandomInt(2, n - 1);
        let problem = `¿Cuántas permutaciones diferentes se pueden formar con ${k} elementos de un conjunto de ${n} elementos? (P(${n},${k}))`;
        let result = 1;
        for (let i = 0; i < k; i++) {
            result *= (n - i);
        }
        return { problem: problem, answer: result.toString() };
    }
    function generateProbabilidadBasica() {
        let totalItems = getRandomInt(10, 30);
        let favorableItems = getRandomInt(1, totalItems - 1);
        let problem = `En una bolsa hay ${totalItems} canicas, de las cuales ${favorableItems} son rojas. ¿Cuál es la probabilidad de sacar una canica roja? (Formato de fracción simplificada o decimal con 2 decimales)`;
        let gcd = (a, b) => {
            if (b === 0) return a;
            return gcd(b, a % b);
        };
        let commonDivisor = gcd(favorableItems, totalItems);
        let simplifiedNumerator = favorableItems / commonDivisor;
        let simplifiedDenominator = totalItems / commonDivisor;
        let answerFraction = `${simplifiedNumerator}/${simplifiedDenominator}`;
        let answerDecimal = (favorableItems / totalItems).toFixed(2);

        return { problem: problem, answer: `${answerFraction} o ${answerDecimal}` };
    }
    function generateLimiteGrafica() {
        let point = getRandomInt(-5, 5);
        let valueLeft = getRandomInt(-10, 10);
        let valueRight = getRandomInt(-10, 10);
        let valueAt = getRandomInt(-10, 10);
        let discontinuity = getRandomInt(0, 1); 
        let problem = `Considera una función f(x) donde:\n`;
        problem += `lim (x→${point}⁻) f(x) = ${valueLeft}\n`;
        problem += `lim (x→${point}⁺) f(x) = ${valueRight}\n`;
        problem += `f(${point}) = ${valueAt}\n\n`;
        if (discontinuity === 0) { 
            if (valueLeft !== valueRight) { 
                return generateLimiteGrafica();
            }
            if (valueLeft === valueAt) { 
                return generateLimiteGrafica();
            }
            problem += `¿Cuál es el lim (x→${point}) f(x)?`;
            return { problem: problem, answer: valueLeft.toString() };
        } else { 
            if (valueLeft === valueRight) { 
                return generateLimiteGrafica();
            }
            problem += `¿Existe lim (x→${point}) f(x)? (Si no, escribe 'No existe' o el valor)`;
            return { problem: problem, answer: 'No existe' };
        }
    }
    const temarioCompleto = {
        'algebra-basica': [
            { id: 'jerarquia-operaciones', name: 'Jerarquía de Operaciones' },
            { id: 'valor-absoluto', name: 'Valor Absoluto' },
            { id: 'radicales-racionalizacion', name: 'Radicales y Racionalización' },
        ],
        'algebra-intermedia': [
            { id: 'ecuaciones-lineales', name: 'Ecuaciones Lineales' },
            { id: 'ecuaciones-cuadraticas', name: 'Ecuaciones Cuadráticas' },
            { id: 'factorizacion-trinomios', name: 'Factorización de Trinomios' },
            { id: 'sistemas-2x2', name: 'Sistemas de Ecuaciones 2x2' },
        ],
        'numeros-complejos': [
            { id: 'operaciones-complejos', name: 'Operaciones con Complejos' },
            { id: 'potencias-i', name: 'Potencias de i' },
        ],
        'funciones-propiedades': [
            { id: 'dominio-rango', name: 'Dominio y Rango' },
            { id: 'composicion-funciones', name: 'Composición de Funciones' },
        ],
        'funciones-algebraicas': [
            { id: 'funcion-lineal-interseccion', name: 'Función Lineal (Intersección)' },
            { id: 'funcion-cuadratica-vertice', name: 'Función Cuadrática (Vértice)' },
        ],
        'analisis-polinomios': [
            { id: 'division-sintetica', name: 'División Sintética' },
            { id: 'ceros-polinomio', name: 'Ceros de Polinomios' },
        ],
        'fracciones-parciales': [
            { id: 'descomposicion-lineal', name: 'Descomposición Lineal Simple' },
        ],
        'expo-log': [
            { id: 'ecuaciones-exponenciales-basicas', name: 'Ecuaciones Exponenciales Básicas' },
            { id: 'propiedades-logaritmos', name: 'Propiedades de Logaritmos' },
        ],
        'trigonometria': [
            { id: 'razones-trigonometricas', name: 'Razones Trigonométricas' },
            { id: 'identidades-fundamentales', name: 'Identidades Fundamentales' },
        ],
        'geometria-analitica': [
            { id: 'distancia-puntos', name: 'Distancia entre dos puntos' },
            { id: 'ecuacion-recta', name: 'Ecuación de la Recta' },
        ],
        'sucesiones-series': [
            { id: 'termino-n-aritmetica', name: 'Término n-ésimo (Aritmética)' },
            { id: 'suma-geometrica-finita', name: 'Suma Geométrica Finita' },
        ],
        'combinatoria-probabilidad': [
            { id: 'permutaciones-simples', name: 'Permutaciones Simples' },
            { id: 'probabilidad-basica', name: 'Probabilidad Básica' },
        ],
        'introduccion-calculo': [
            { id: 'limite-grafica', name: 'Idea de Límite (Gráfica)' },
        ]
    };
    function loadTopicsForModule() {
        const selectedModule = mathModuleSelect.value;
        const topics = temarioCompleto[selectedModule];
        mathTopicSelect.innerHTML = ''; 
        if (topics) {
            topics.forEach(topic => {
                const option = document.createElement('option');
                option.value = topic.id;
                option.textContent = topic.name;
                mathTopicSelect.appendChild(option);
            });
        }
        loadNewMathProblem(); 
    }
    function loadNewMathProblem() {
        mathResultMessage.textContent = '';
        mathResultMessage.classList.remove('correct', 'incorrect');
        mathAnswerInput.value = ''; 
        const selectedModule = mathModuleSelect.value;
        const selectedTopic = mathTopicSelect.value;
        const moduleTopics = mathTopics[selectedModule];
        if (moduleTopics) {
            const topic = moduleTopics.find(t => t.id === selectedTopic);
            if (topic && topic.generateProblem) {
                currentProblem = topic.generateProblem();
                mathProblemText.textContent = currentProblem.problem;
            } else {
                mathProblemText.textContent = 'Selecciona un tema válido para generar un problema.';
                currentProblem = { problem: '', answer: '' };
            }
        } else {
            mathProblemText.textContent = 'Selecciona un módulo y tema para generar un problema.';
            currentProblem = { problem: '', answer: '' };
        }
    }
    function normalizeAnswer(answer) {
        return answer.toLowerCase().replace(/\s/g, '');
    }
    function checkMathAnswer() {
        const userAnswer = mathAnswerInput.value.trim();
        const correctAnswer = currentProblem.answer;
        let isCorrect = false;
        if (currentProblem.answer.includes(',')) {
            const userAnswers = userAnswer.split(',').map(s => normalizeAnswer(s)).filter(Boolean).sort();
            const correctAnswers = correctAnswer.split(',').map(s => normalizeAnswer(s)).filter(Boolean).sort();

            if (userAnswers.length === correctAnswers.length &&
                userAnswers.every((val, index) => val === correctAnswers[index])) {
                isCorrect = true;
            }
        }
        else if (currentProblem.problem.includes('Formato de fracción simplificada o decimal')) {
            const possibleAnswers = correctAnswer.split(' o ');
            if (possibleAnswers.some(ans => normalizeAnswer(ans) === normalizeAnswer(userAnswer))) {
                isCorrect = true;
            }
        }
        else if (currentProblem.problem.includes('(Simplifica a la forma Ax + B)')) {
            const normUser = normalizeAnswer(userAnswer);
            const normCorrect = normalizeAnswer(correctAnswer);
            if (normUser === normCorrect) { 
                isCorrect = true;
            } else {
                const extractParts = (str) => {
                    let parts = { x: 0, const: 0 };
                    const xMatch = str.match(/(-?\d*)x/);
                    if (xMatch) {
                        const coeff = xMatch[1];
                        if (coeff === '') parts.x = 1;
                        else if (coeff === '-') parts.x = -1;
                        else parts.x = parseFloat(coeff);
                    }
                    const constMatch = str.match(/([+-]?\d+)$/);
                    if (constMatch && !xMatch) { 
                        parts.const = parseFloat(constMatch[1]);
                    } else if (constMatch && xMatch && str.indexOf(constMatch[0]) > xMatch.index) {
                        parts.const = parseFloat(constMatch[1]);
                    }
                    const otherParts = str.replace(xMatch ? xMatch[0] : '', '');
                    const finalConstMatch = otherParts.match(/([+-]?\d+)$/);
                    if (finalConstMatch) {
                        parts.const = parseFloat(finalConstMatch[1]);
                    }
                    return parts;
                };
                const userParts = extractParts(normUser);
                const correctParts = extractParts(normCorrect);
                if (userParts.x === correctParts.x && userParts.const === correctParts.const) {
                    isCorrect = true;
                }
            }
        }
        else {
            isCorrect = (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer));
        }
        if (isCorrect) {
            mathResultMessage.textContent = '¡Correcto! Sigue así.';
            mathResultMessage.classList.add('correct');
            mathResultMessage.classList.remove('incorrect');
        } else {
            mathResultMessage.textContent = `Respuesta incorrecta. La respuesta esperada era: ${currentProblem.answer}`;
            mathResultMessage.classList.add('incorrect');
            mathResultMessage.classList.remove('correct');
        }
    }
    mathModuleSelect.addEventListener('change', loadTopicsForModule);
    mathTopicSelect.addEventListener('change', loadNewMathProblem);
    newMathProblemBtn.addEventListener('click', loadNewMathProblem);
    checkMathAnswerBtn.addEventListener('click', checkMathAnswer);
    loadTopicsForModule();
});