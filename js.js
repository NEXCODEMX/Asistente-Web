  // Sample JSON data - You can modify this to add your tasks
        const tasksData = {
            "monday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
            {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
        ],
        "7:00": [
            {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "8:00": [
            {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
            {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
        ],
        "9:00": [
            {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
            {"title": "CV WEB", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "11:00": [
            {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "13:00": [
            {"title": "CUCEI MART", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
            {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
        ],
        "15:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "17:00": [
            {"title": "Innovación y Tecnología", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "19:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Alonso Restaurantes", "type": "leisure", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },

           "tuesday": {
            "0:00": [
                {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
            ],
            "6:00": [
                {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
                {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
            ],
            "7:00": [
                {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "8:00": [
                {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
                {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
            ],
            "9:00": [
                {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
                {"title": "NEXCODE", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "11:00": [
                {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "13:00": [
                {"title": "NEXCODE", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "14:00": [
                {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
                {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
            ],
            "15:00": [
                {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "17:00": [
                {"title": "Sistemas Digitales", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "19:00": [
                {"title": "Programación Orientada a Objetos", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "21:00": [
                {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "23:00": [
                {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
            ]
        },


                "wednesday": {
            "0:00": [
                {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
            ],
            "6:00": [
                {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
                {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
            ],
            "7:00": [
                {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "8:00": [
                {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
                {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
            ],
            "9:00": [
                {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
                {"title": "CUCEI MART", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "11:00": [
                {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "13:00": [
                {"title": "CUCEI MART", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "14:00": [
                {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
                {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
            ],
            "15:00": [
                {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "17:00": [
                {"title": "Innovación y Tecnología", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "19:00": [
                {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "21:00": [
                {"title": "Composición", "type": "leisure", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "23:00": [
                {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
            ]
        },
                "thursday": {
            "0:00": [
                {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
            ],
            "6:00": [
                {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
                {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
            ],
            "7:00": [
                {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "8:00": [
                {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
                {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
            ],
            "9:00": [
                {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
                {"title": "NEXCODE", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "11:00": [
                {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "13:00": [
                {"title": "NEXCODE", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "14:00": [
                {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
                {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
            ],
            "15:00": [
                {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "17:00": [
                {"title": "Sistemas Digitales", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "19:00": [
                {"title": "Programación Orientada a Objetos", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "21:00": [
                {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "23:00": [
                {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
            ]
        },

        "friday": {
            "0:00": [
                {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
            ],
            "6:00": [
                {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
                {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
            ],
            "7:00": [
                {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "8:00": [
                {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
                {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
            ],
            "9:00": [
                {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
                {"title": "Youtube", "type": "project", "duration_minutes": 180, "start_offset_minutes": 0}
            ],
            "14:00": [
                {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
                {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
            ],
            "15:00": [
                {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "17:00": [
                {"title": "Circuitos Electrónicos y Electromagnetismo", "type": "university", "duration_minutes": 240, "start_offset_minutes": 0}
            ],
            "21:00": [
                {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "23:00": [
                {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
            ]
        },

            "saturday": {
            "0:00": [
                {"title": "Dormir", "type": "important", "duration_minutes": 300, "start_offset_minutes": 0}
            ],
            "5:00": [
                {"title": "Desayunar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0}
            ],
            "6:00": [
                {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "7:00": [
                {"title": "Ingeniería de Software", "type": "university", "duration_minutes": 240, "start_offset_minutes": 0}
            ],
            "11:00": [
                {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "21:00": [
                {"title": "Alonso Restaurantes", "type": "leisure", "duration_minutes": 180, "start_offset_minutes": 0}
            ],
            "23:00": [
                {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
                {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
                {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
            ]
        },

                "sunday": {
            "0:00": [
                {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
            ],
            "10:00": [
                {"title": "Clase Canto Dery", "type": "important", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "12:00": [
                {"title": "Clase Programación Paulo", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
            ],
            "14:00": [
                {"title": "Espacio libre", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
            ],
            "15:00": [
                {"title": "Más actividades o descanso", "type": "leisure", "duration_minutes": 540, "start_offset_minutes": 0}
            ]
        },

        };

        class Calendar {
            constructor() {
                this.days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
                this.hours = this.generateHours();
                this.completedTasks = this.loadCompletedTasks();
                this.init();
            }

            generateHours() {
                const hours = [];
                for (let i = 0; i < 24; i++) {
                    const hour12 = i === 0 ? 12 : i > 12 ? i - 12 : i;
                    const ampm = i < 12 ? 'AM' : 'PM';
                    const displayHour = `${hour12}:00 ${ampm}`;
                    const dataHour = `${i}:00`;
                    hours.push({ display: displayHour, data: dataHour });
                }
                return hours;
            }

            loadCompletedTasks() {
                const saved = localStorage.getItem('completedTasks');
                return saved ? JSON.parse(saved) : {};
            }

            saveCompletedTasks() {
                localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
            }

            init() {
                this.generateCalendar();
                this.updateProgress();
                this.setupThemeSelector();
                this.loadTheme();
            }

            generateCalendar() {
                const calendarBody = document.getElementById('calendar-body');
                calendarBody.innerHTML = '';

                this.hours.forEach(hour => {
                    // Time slot
                    const timeSlot = document.createElement('div');
                    timeSlot.className = 'time-slot';
                    timeSlot.textContent = hour.display;
                    calendarBody.appendChild(timeSlot);

                    // Day columns
                    this.days.forEach(day => {
                        const dayColumn = document.createElement('div');
                        dayColumn.className = 'day-column';
                        
                        const tasks = tasksData[day] && tasksData[day][hour.data];
                        if (tasks) {
                            tasks.forEach((task, index) => {
                                const taskElement = this.createTaskElement(task, day, hour.data, index);
                                dayColumn.appendChild(taskElement);
                            });
                        }

                        calendarBody.appendChild(dayColumn);
                    });
                });
            }

            createTaskElement(task, day, hour, index) {
                const taskElement = document.createElement('div');
                const taskId = `${day}-${hour}-${index}`;
                const isCompleted = this.completedTasks[taskId] || task.completed;
                
                taskElement.className = `task task-${task.type} ${isCompleted ? 'completed' : ''}`;
                taskElement.innerHTML = `
                    <span>${task.title}</span>
                    <input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''} 
                           data-task-id="${taskId}">
                `;

                taskElement.querySelector('.task-checkbox').addEventListener('change', (e) => {
                    this.toggleTask(taskId, e.target.checked);
                });

                return taskElement;
            }

            toggleTask(taskId, completed) {
                if (completed) {
                    this.completedTasks[taskId] = true;
                } else {
                    delete this.completedTasks[taskId];
                }
                
                this.saveCompletedTasks();
                this.generateCalendar();
                this.updateProgress();
            }

            updateProgress() {
                const today = new Date().getDay();
                const todayKey = this.days[today === 0 ? 6 : today - 1]; // Adjust for Sunday = 0
                
                // Daily progress
                let dailyTotal = 0;
                let dailyCompleted = 0;
                
                if (tasksData[todayKey]) {
                    Object.values(tasksData[todayKey]).forEach(hourTasks => {
                        dailyTotal += hourTasks.length;
                        hourTasks.forEach((task, index) => {
                            const taskId = `${todayKey}-${Object.keys(tasksData[todayKey])[Object.values(tasksData[todayKey]).indexOf(hourTasks)]}-${index}`;
                            if (this.completedTasks[taskId] || task.completed) {
                                dailyCompleted++;
                            }
                        });
                    });
                }

                // Weekly progress
                let weeklyTotal = 0;
                let weeklyCompleted = 0;
                
                this.days.forEach(day => {
                    if (tasksData[day]) {
                        Object.entries(tasksData[day]).forEach(([hour, hourTasks]) => {
                            weeklyTotal += hourTasks.length;
                            hourTasks.forEach((task, index) => {
                                const taskId = `${day}-${hour}-${index}`;
                                if (this.completedTasks[taskId] || task.completed) {
                                    weeklyCompleted++;
                                }
                            });
                        });
                    }
                });

                const dailyPercentage = dailyTotal > 0 ? Math.round((dailyCompleted / dailyTotal) * 100) : 0;
                const weeklyPercentage = weeklyTotal > 0 ? Math.round((weeklyCompleted / weeklyTotal) * 100) : 0;

                document.getElementById('daily-progress').style.width = `${dailyPercentage}%`;
                document.getElementById('daily-progress').textContent = `${dailyPercentage}%`;
                document.getElementById('daily-stats').textContent = `${dailyCompleted} de ${dailyTotal} tareas completadas hoy`;

                document.getElementById('weekly-progress').style.width = `${weeklyPercentage}%`;
                document.getElementById('weekly-progress').textContent = `${weeklyPercentage}%`;
                document.getElementById('weekly-stats').textContent = `${weeklyCompleted} de ${weeklyTotal} tareas completadas esta semana`;
            }

            setupThemeSelector() {
                const themeToggle = document.getElementById('theme-toggle');
                const themeDropdown = document.getElementById('theme-dropdown');
                const themeOptions = document.querySelectorAll('.theme-option');

                themeToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    themeDropdown.classList.toggle('active');
                });

                document.addEventListener('click', (e) => {
                    if (!themeToggle.contains(e.target) && !themeDropdown.contains(e.target)) {
                        themeDropdown.classList.remove('active');
                    }
                });

                themeOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        const theme = option.getAttribute('data-theme');
                        this.setTheme(theme);
                        themeDropdown.classList.remove('active');
                    });
                });
            }

            setTheme(theme) {
                document.body.className = `theme-${theme}`;
                localStorage.setItem('selectedTheme', theme);
            }

            loadTheme() {
                const savedTheme = localStorage.getItem('selectedTheme') || 'purple';
                this.setTheme(savedTheme);
            }
        }

        // Initialize calendar when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new Calendar();
        });





















     // Datos financieros iniciales
        let financialData = {
            totalWealth: 17182.41, 
            bankBalance: 8978.91,  // Banco
            cashBalance: 800,      // Efectivo
            cetesBalance: 7403.50, // CETES
            savings: 8591.21,      // 50%
            investments: 5154.72,  // 30%
            expenses: 78501.19,    // 20% del total pasado, pero ya no afecta
            transactions: [
                {   
                    date: '2025-06-20',
                    amount: 614,
                    description: 'Restaurantes Alonso',
                    type: 'income'
                },
                {   
                    date: '2025-06-20',
                    amount: 424.62,
                    description: 'Ark Survival Evolved',
                    type: 'expense'
                },
                {   
                    date: '2025-06-20',
                    amount: 1245,
                    description: 'Cursos Udemy(Piano, Violin, Canto, Bateria, Guitarra)',
                    type: 'expense'
                },
                {   
                    date: '2025-07-10',
                    amount: 4371.62,
                    description: 'Camara Profesional',
                    type: 'expense'
                },
                {   
                    date: '2025-07-10',
                    amount: 600.,
                    description: 'Clases Canto Domingo Dery',
                    type: 'expense'
                },
                {   
                    date: '2025-07-10',
                    amount: 588.01,
                    description: 'Marie',
                    type: 'expense'
                },
                {   
                    date: '2025-07-10',
                    amount: 768,
                    description: 'Marie, Alonso, Transporte',
                    type: 'expense'
                },
                {   
                    date: '2025-07-10',
                    amount: 200,
                    description: 'AT&T Recarga',
                    type: 'expense'
                },
            ],
            lastPaymentDate: new Date('2025-07-31'), // Fecha de último pago
            paymentAmount: 3000
        };
        // Cargar datos del localStorage si existen
        function loadData() {
            const saved = localStorage.getItem('financialData');
            if (saved) {
                const parsedData = JSON.parse(saved);
                financialData = { ...financialData, ...parsedData };
                // Convertir fechas de string a Date
                if (parsedData.lastPaymentDate) {
                    financialData.lastPaymentDate = new Date(parsedData.lastPaymentDate);
                }
                financialData.transactions = parsedData.transactions || [];
            }
        }
        // Guardar datos en localStorage
        function saveData() {
            localStorage.setItem('financialData', JSON.stringify(financialData));
        }

         // Borrar LocalStorage;
         localStorage.clear()



        // Formatear números como moneda
        function formatCurrency(amount) {
            return `$${amount.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        // Obtener datos del mercado
        async function fetchMarketData() {
            try {
                // USD/MXN
                const usdResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const usdData = await usdResponse.json();
                document.getElementById('usd-rate').textContent = `$${usdData.rates.MXN.toFixed(2)}`;
            } catch (error) {
                document.getElementById('usd-rate').textContent = '$20.15';
            }
            try {
                // Bitcoin
                const btcResponse = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                const btcData = await btcResponse.json();
                const btcPrice = btcData.bpi.USD.rate_float;
                document.getElementById('btc-rate').textContent = `$${(btcPrice * 20.15 / 1000).toFixed(0)}k`;
            } catch (error) {
                document.getElementById('btc-rate').textContent = '$1,400k';
            }
            // CETES (simulado)
            document.getElementById('cetes-rate').textContent = '10.25%';
        }
        // Calcular días hasta el próximo pago
        function calculateNextPayment() {
            const today = new Date();
            const lastPayment = new Date(financialData.lastPaymentDate);
            // Calcular próxima fecha de pago (cada 15 días)
            const nextPayment = new Date(lastPayment);
            nextPayment.setDate(lastPayment.getDate() + 15);
            // Si ya pasó, calcular el siguiente
            while (nextPayment <= today) {
                nextPayment.setDate(nextPayment.getDate() + 15);
            }
            const timeDiff = nextPayment - today;
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            document.getElementById('next-payment-countdown').textContent = 
                `${daysDiff} días (${nextPayment.toLocaleDateString('es-MX')})`;
            // Auto-pago si es el día
            if (daysDiff === 0) {
                processPayroll();
            }
        }
        // Procesar nómina automática
        function processPayroll() {
            const payrollAmount = financialData.paymentAmount;
            
            // Aplicar regla 50-30-20
            const savingsAmount = payrollAmount * 0.5;
            const investmentAmount = payrollAmount * 0.3;
            const expensesAmount = payrollAmount * 0.2;
            financialData.totalWealth += payrollAmount;
            financialData.savings += savingsAmount;
            financialData.investments += investmentAmount;
            financialData.expenses += expensesAmount;
            const today = new Date().toISOString().split('T')[0];
            financialData.transactions.push({
                date: today,
                amount: savingsAmount,
                description: 'Nómina - Ahorros (50%)',
                type: 'income'
            });
            financialData.transactions.push({
                date: today,
                amount: investmentAmount,
                description: 'Nómina - Inversiones (30%)',
                type: 'investment'
            });
            financialData.transactions.push({
                date: today,
                amount: expensesAmount,
                description: 'Nómina - Gastos (20%)',
                type: 'income'
            });
            financialData.lastPaymentDate = new Date();
            saveData();
            updateDisplay();
        }
        function addTransaction() {
            const amount = parseFloat(document.getElementById('amount').value);
            const description = document.getElementById('description').value;
            const type = document.getElementById('type').value;
            if (!amount || !description) {
                alert('Por favor completa todos los campos');
                return;
            }
            const transaction = {
                date: new Date().toISOString().split('T')[0],
                amount: Math.abs(amount),
                description: description,
                type: type
            };
            financialData.transactions.push(transaction);
            if (type === 'expense') {
                financialData.totalWealth -= amount;
                financialData.expenses += amount;
            } else if (type === 'income') {
                financialData.totalWealth += amount;
            } else if (type === 'investment') {
                financialData.investments += amount;
            }
            document.getElementById('amount').value = '';
            document.getElementById('description').value = '';
            
            saveData();
            updateDisplay();
        }
        function updateDisplay() {
            document.getElementById('total-wealth').textContent = formatCurrency(financialData.totalWealth);
            document.getElementById('savings-amount').textContent = formatCurrency(financialData.savings);
            document.getElementById('investment-amount').textContent = formatCurrency(financialData.investments);
            document.getElementById('expenses-amount').textContent = formatCurrency(financialData.expenses);
            
            updateTransactionList();
            updateCharts();
        }

        function updateTransactionList() {
            const list = document.getElementById('transaction-list');
            list.innerHTML = '';
            
            const recentTransactions = financialData.transactions.slice(-10).reverse();
            recentTransactions.forEach(transaction => {
                const item = document.createElement('div');
                item.className = `transaction-item ${transaction.type}`;
                item.innerHTML = `
                    <div class="transaction-info">
                        <div class="transaction-amount">${formatCurrency(transaction.amount)}</div>
                        <div class="transaction-description">${transaction.description}</div>
                        <div class="transaction-date">${new Date(transaction.date).toLocaleDateString('es-MX')}</div>
                    </div>
                `;
                list.appendChild(item);
            });
        }
        let wealthChart, transactionsChart;
        function updateCharts() {
            const wealthCtx = document.getElementById('wealth-chart').getContext('2d');
            
            if (wealthChart) {
                wealthChart.destroy();
            }
            wealthChart = new Chart(wealthCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Banco', 'Efectivo', 'CETES', 'Ahorros', 'Gastos'],
                    datasets: [{
                        data: [
                            financialData.bankBalance,
                            financialData.cashBalance,
                            financialData.cetesBalance,
                            financialData.savings,
                            financialData.expenses
                        ],
                        backgroundColor: [
                            '#667eea',
                            '#764ba2',
                            '#f093fb',
                            '#4facfe',
                            '#f5576c'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
            const transCtx = document.getElementById('transactions-chart').getContext('2d');
            if (transactionsChart) {
                transactionsChart.destroy();
            }
            const last30Days = financialData.transactions.slice(-30);
            const dates = last30Days.map(t => new Date(t.date).toLocaleDateString('es-MX'));
            const amounts = last30Days.map(t => t.type === 'expense' ? -t.amount : t.amount);
            transactionsChart = new Chart(transCtx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Flujo de Efectivo',
                        data: amounts,
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        document.addEventListener('DOMContentLoaded', function() {
            loadData();
            updateDisplay();
            fetchMarketData();
            calculateNextPayment();
            setInterval(calculateNextPayment, 3600000);
            setInterval(fetchMarketData, 300000);
        });
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.target.closest('.transaction-form')) {
                addTransaction();
            }
        });





// Funcionalidad del Panel de Tareas Importantes
        const tasksBtn = document.getElementById('tasks-btn');
        const tasksOverlay = document.getElementById('important-tasks-overlay');
        const closeTasksBtn = document.getElementById('close-tasks-btn');
        const tasksListContainer = document.getElementById('important-tasks-list');
        const emptyState = document.getElementById('empty-state');

        // Abrir panel de tareas
        tasksBtn.addEventListener('click', (e) => {
            e.preventDefault();
            tasksOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Cerrar panel de tareas
        function closeTasksPanel() {
            tasksOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeTasksBtn.addEventListener('click', closeTasksPanel);

        // Cerrar al hacer clic en el overlay
        tasksOverlay.addEventListener('click', (e) => {
            if (e.target === tasksOverlay) {
                closeTasksPanel();
            }
        });

        // Cerrar con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && tasksOverlay.classList.contains('active')) {
                closeTasksPanel();
            }
        });

        // Array para almacenar las tareas importantes
        let importantTasks = [
   
            {
                id: 1,
                title: "Entregar proyecto final",
                dueDate: "2024-12-20",
                completed: false
            }
        ];

        // Función para agregar una nueva tarea importante
        function addImportantTask(title, dueDate) {
            const newTask = {
                id: Date.now(),
                title: title,
                dueDate: dueDate,
                completed: false
            };
            importantTasks.push(newTask);
            renderTasks();
        }

        // Función para eliminar una tarea importante
        function removeImportantTask(taskId) {
            importantTasks = importantTasks.filter(task => task.id !== taskId);
            renderTasks();
        }

        // Función para marcar/desmarcar tarea como completada
        function toggleTaskCompletion(taskId) {
            const task = importantTasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
            }
        }

        // Función para determinar el estado de la fecha
        function getDateStatus(dueDate) {
            const today = new Date();
            const due = new Date(dueDate);
            const diffTime = due - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays < 0) return 'overdue';
            if (diffDays <= 3) return 'due-soon';
            return 'normal';
        }

        // Función para renderizar las tareas
        function renderTasks() {
            if (importantTasks.length === 0) {
                tasksListContainer.style.display = 'none';
                emptyState.style.display = 'block';
                return;
            }

            tasksListContainer.style.display = 'flex';
            emptyState.style.display = 'none';

            // Ordenar tareas por fecha de entrega
            const sortedTasks = [...importantTasks].sort((a, b) => {
                if (a.completed && !b.completed) return 1;
                if (!a.completed && b.completed) return -1;
                return new Date(a.dueDate) - new Date(b.dueDate);
            });

            tasksListContainer.innerHTML = sortedTasks.map(task => {
                const dateStatus = getDateStatus(task.dueDate);
                const dateFormatted = new Date(task.dueDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                return `
                    <div class="important-task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
                        <div class="task-checkbox-container">
                            <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTaskCompletion(${task.id})"></div>
                            <div class="task-content">
                                <div class="task-title">${task.title}</div>
                                <div class="task-date ${dateStatus}">
                                    <i class="fas fa-calendar-alt"></i>
                                    ${dateFormatted}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }




        // Functionality for Monthly Goals Panel
const monthlyGoalsBtn = document.getElementById('monthly-goals-btn');
const monthlyGoalsOverlay = document.getElementById('monthly-goals-overlay');
const closeMonthlyGoalsBtn = document.getElementById('close-monthly-goals-btn');
const goalsListContainer = document.getElementById('goals-list');
const goalsEmptyState = document.getElementById('goals-empty-state');

// Load goals from Metas Julio.txt content
const monthlyGoalsData = `
Avanzar Segundo EP Musical 1 hora diaria             Minimo tener borradores instrumentales de todas las canciones este mes
Avanzar Marie´s Delirium 1 vez por semana            Minimo que funcione bien la Lobby y la primera estructura del juego
Avanzar el curso de SQL 2 horas diarias   (Terminar este mes)
Avanzar el curso de Programacion desde 0  (Terminar este mes)
Hacer Covers en Tiktok 1 por semana                 Minimo 3/4 Covers bien hechos este mes
Subir un Cover a Youtube 1 por semana               Minimo 2 Covers Completos que esten bien en YT

Estudiar C 4 horas a la semana                      Minimo Pasar el Examen este mes
Avanzar CUCEI MART 7 horas a la semana                       Terminar el Area de Mapa interactivo y agregar mas emprendedores
Avanzar NEXCODE 7 horas a la semana                 Minimo curso de SQL y programacion desde 0 Terminados
Hacer Pagina Web                                    almenos 10 Emprendedores CUCEI


Curso de Guitarra 3 horas a la semana               Ya saber hacer solos a fin de mes
Curso de Voz 3 horas a la semana                    Mejorar mas la tecnica vocal
Curso de Composiciones 2 horas a la semana          Acabarlo y hacer 3 letras para fin de mes

Estudiar Repertorios Alonso, FS y Farid             Poder tener 2 horas de repertorio para restaurantes y que nos contraten por mas dinero, Poder ir a un estudio a sacar 2 Covers,     Tocar en vivo almenos 2 Canciones
Hacer ejercicio 1 hora diaria                       Subir minimo 2 kilos
Meditar 1 hora diaria
`;

let monthlyGoals = [];

function parseMonthlyGoals(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    return lines.map((line, index) => {
        // Attempt to separate main goal from sub-goal/minimum, if present
        const parts = line.split('Minimo');
        const title = parts[0].trim();
        const subgoal = parts.length > 1 ? `Minimo${parts[1].trim()}` : '';

        return {
            id: `monthly-goal-${index}`,
            title: title,
            subgoal: subgoal, // Store subgoal separately
            completed: false
        };
    });
}

// Load completed goals from localStorage
function loadCompletedMonthlyGoals() {
    const saved = localStorage.getItem('completedMonthlyGoals');
    return saved ? JSON.parse(saved) : {};
}

// Save completed goals to localStorage
function saveCompletedMonthlyGoals(completedGoals) {
    localStorage.setItem('completedMonthlyGoals', JSON.stringify(completedGoals));
}

let completedMonthlyGoals = loadCompletedMonthlyGoals();

// Function to render monthly goals
function renderMonthlyGoals() {
    goalsListContainer.innerHTML = '';
    const goalsToDisplay = monthlyGoals.filter(goal => !completedMonthlyGoals[goal.id]);

    if (goalsToDisplay.length === 0) {
        goalsListContainer.style.display = 'none';
        goalsEmptyState.style.display = 'block';
    } else {
        goalsListContainer.style.display = 'block';
        goalsEmptyState.style.display = 'none';
        goalsToDisplay.forEach(goal => {
            const goalItem = document.createElement('li');
            goalItem.className = `goal-item ${completedMonthlyGoals[goal.id] ? 'completed' : ''}`;
            goalItem.setAttribute('data-goal-id', goal.id);

            goalItem.innerHTML = `
                <div class="goal-checkbox ${completedMonthlyGoals[goal.id] ? 'checked' : ''}" data-goal-id="${goal.id}"></div>
                <div class="goal-text">
                    ${goal.title}
                    ${goal.subgoal ? `<br><small style="opacity: 0.8; font-style: italic;">${goal.subgoal}</small>` : ''}
                </div>
            `;
            goalsListContainer.appendChild(goalItem);
        });

        // Add event listeners to new checkboxes
        goalsListContainer.querySelectorAll('.goal-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                const goalId = e.target.getAttribute('data-goal-id');
                toggleMonthlyGoalCompletion(goalId);
            });
        });
    }
}

// Function to toggle monthly goal completion
function toggleMonthlyGoalCompletion(goalId) {
    if (completedMonthlyGoals[goalId]) {
        delete completedMonthlyGoals[goalId];
    } else {
        completedMonthlyGoals[goalId] = true;
    }
    saveCompletedMonthlyGoals(completedMonthlyGoals);
    renderMonthlyGoals(); // Re-render to update display
}


// Open monthly goals panel
monthlyGoalsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    monthlyGoalsOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderMonthlyGoals(); // Render goals every time it opens
});

// Close monthly goals panel
function closeMonthlyGoalsPanel() {
    monthlyGoalsOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeMonthlyGoalsBtn.addEventListener('click', closeMonthlyGoalsPanel);

// Close when clicking outside the panel
monthlyGoalsOverlay.addEventListener('click', (e) => {
    if (e.target === monthlyGoalsOverlay) {
        closeMonthlyGoalsPanel();
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && monthlyGoalsOverlay.classList.contains('active')) {
        closeMonthlyGoalsPanel();
    }
});

// Initialize monthly goals on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    monthlyGoals = parseMonthlyGoals(monthlyGoalsData);
    renderMonthlyGoals(); // Initial render on page load
});