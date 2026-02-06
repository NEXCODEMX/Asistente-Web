'use strict';
class TaskFormatter {
    static formatTask(task) {
        return task.trim();
    }
    static formatDueDate(dueDate) {
        if (!dueDate) return 'Sin fecha límite';
        
        const date = new Date(dueDate + 'T00:00:00');
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }
    static formatCategory(category) {
        const categories = {
            trabajo: { icon: 'fa-briefcase', label: 'Trabajo' },
            personal: { icon: 'fa-user', label: 'Personal' },
            proyecto: { icon: 'fa-folder-open', label: 'Proyecto' },
            estudio: { icon: 'fa-graduation-cap', label: 'Estudio' },
            salud: { icon: 'fa-heartbeat', label: 'Salud' },
            compras: { icon: 'fa-shopping-cart', label: 'Compras' }
        };
        return categories[category] || categories.personal;
    }
    static isOverdue(dueDate) {
        if (!dueDate) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const taskDate = new Date(dueDate + 'T00:00:00');
        return taskDate < today;
    }
    static getDaysUntilDue(dueDate) {
        if (!dueDate) return null;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const taskDate = new Date(dueDate + 'T00:00:00');
        const diffTime = taskDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
}
class StorageManager {
    static STORAGE_KEY = 'taskMasterPro_tasks';
    static THEME_KEY = 'taskMasterPro_theme';
    static saveTasks(tasks) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
            return true;
        } catch (error) {
            console.error('Error saving tasks:', error);
            return false;
        }
    }
    static loadTasks() {
        try {
            const tasksJSON = localStorage.getItem(this.STORAGE_KEY);
            return tasksJSON ? JSON.parse(tasksJSON) : [];
        } catch (error) {
            console.error('Error loading tasks:', error);
            return [];
        }
    }
    static saveTheme(theme) {
        localStorage.setItem(this.THEME_KEY, theme);
    }
    static loadTheme() {
        return localStorage.getItem(this.THEME_KEY) || 'light';
    }
    static exportTasks(tasks) {
        const dataStr = JSON.stringify(tasks, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        const fecha = new Date().toISOString().split('T')[0];
        link.download = `respaldo_tareas_${fecha}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }
}

class TaskManager {
    constructor() {
        this.tasks = StorageManager.loadTasks();
    }
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
    addTask(taskData) {
        const newTask = {
            id: this.generateId(),
            task: TaskFormatter.formatTask(taskData.task),
            dueDate: taskData.dueDate || null,
            category: taskData.category || 'personal',
            completed: false,
            createdAt: new Date().toISOString(),
            completedAt: null
        };

        this.tasks.unshift(newTask);
        this.save();
        return newTask;
    }
    updateTask(id, updates) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = {
                ...this.tasks[taskIndex],
                ...updates
            };
            this.save();
            return this.tasks[taskIndex];
        }
        return null;
    }
    deleteTask(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.save();
        return this.tasks.length < initialLength;
    }
    toggleComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.save();
            return task;
        }
        return null;
    }
    getFilteredTasks(filters = {}) {
        let filtered = [...this.tasks];
        if (filters.status === 'pending') {
            filtered = filtered.filter(task => !task.completed);
        } else if (filters.status === 'completed') {
            filtered = filtered.filter(task => task.completed);
        }
        if (filters.category && filters.category !== 'all') {
            filtered = filtered.filter(task => task.category === filters.category);
        }
        if (filters.sortBy) {
            filtered = this.sortTasks(filtered, filters.sortBy);
        }

        return filtered;
    }
    sortTasks(tasks, criteria) {
        const sorted = [...tasks];
        
        switch (criteria) {
            case 'dueDate':
                sorted.sort((a, b) => {
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;
                    return new Date(a.dueDate) - new Date(b.dueDate);
                });
                break;
            case 'category':
                sorted.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case 'status':
                sorted.sort((a, b) => a.completed - b.completed);
                break;
            case 'date':
            default:
                sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
        }
        
        return sorted;
    }
    clearCompleted() {
        const beforeCount = this.tasks.length;
        this.tasks = this.tasks.filter(task => !task.completed);
        this.save();
        return beforeCount - this.tasks.length;
    }
    clearAll() {
        const count = this.tasks.length;
        this.tasks = [];
        this.save();
        return count;
    }
    getStatistics() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
        return {
            total,
            completed,
            pending,
            progress,
            overdue: this.tasks.filter(task => 
                !task.completed && TaskFormatter.isOverdue(task.dueDate)
            ).length
        };
    }
    save() {
        StorageManager.saveTasks(this.tasks);
    }
}
class UIManager {
    constructor(taskManager) {
        this.taskManager = taskManager;
        this.currentFilters = {
            status: 'all',
            category: 'all',
            sortBy: 'date'
        };
        this.editingTaskId = null;
        this.initializeElements();
        this.attachEventListeners();
        this.initializeTheme();
        this.render();
    }
    initializeElements() {
        this.taskForm = document.getElementById('taskForm');
        this.taskInput = document.getElementById('taskInput');
        this.dueDateInput = document.getElementById('dueDateInput');
        this.categoryInput = document.getElementById('categoryInput');
        this.btnText = document.getElementById('btnText');
        this.filterButtons = document.querySelectorAll('[data-filter]');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.sortBySelect = document.getElementById('sortBy');
        this.clearCompletedBtn = document.getElementById('clearCompleted');
        this.clearAllBtn = document.getElementById('clearAll');
        this.exportBtn = document.getElementById('exportTasks');
        this.tasksContainer = document.getElementById('tasksContainer');
        this.emptyState = document.getElementById('emptyState');
        this.alertContainer = document.getElementById('alertContainer');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.pendingTasksEl = document.getElementById('pendingTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.progressPercentEl = document.getElementById('progressPercent');
        this.progressValueEl = document.getElementById('progressValue');
        this.mainProgressBar = document.getElementById('mainProgressBar');
        this.taskCountEl = document.getElementById('taskCount');
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.editModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
        this.editTaskForm = document.getElementById('editTaskForm');
        this.editTaskInput = document.getElementById('editTaskInput');
        this.editDueDateInput = document.getElementById('editDueDateInput');
        this.editCategoryInput = document.getElementById('editCategoryInput');
        this.editTaskId = document.getElementById('editTaskId');
        this.saveEditBtn = document.getElementById('saveEditBtn');
    }
    attachEventListeners() {
        this.taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddTask();
        });
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilterChange(e.target.dataset.filter);
            });
        });
        this.categoryFilter.addEventListener('change', () => {
            this.currentFilters.category = this.categoryFilter.value;
            this.render();
        });
        this.sortBySelect.addEventListener('change', () => {
            this.currentFilters.sortBy = this.sortBySelect.value;
            this.render();
        });
        this.clearCompletedBtn.addEventListener('click', () => {
            this.handleClearCompleted();
        });
        this.clearAllBtn.addEventListener('click', () => {
            this.handleClearAll();
        });
        this.exportBtn.addEventListener('click', () => {
            this.handleExport();
        });
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        this.saveEditBtn.addEventListener('click', () => {
            this.handleSaveEdit();
        });
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                this.taskInput.focus();
            }
        });
    }
    initializeTheme() {
        const savedTheme = StorageManager.loadTheme();
        this.applyTheme(savedTheme);
    }
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        StorageManager.saveTheme(theme);
    }
    handleAddTask() {
        const task = this.taskInput.value.trim();
        const dueDate = this.dueDateInput.value;
        const category = this.categoryInput.value;
        if (!task) {
            this.showAlert('Por favor, ingresa una descripción para la tarea', 'warning');
            return;
        }
        if (this.editingTaskId) {
            this.taskManager.updateTask(this.editingTaskId, { task, dueDate, category });
            this.showAlert('Tarea actualizada exitosamente', 'success');
            this.editingTaskId = null;
            this.btnText.textContent = 'Agregar Tarea';
        } else {
            this.taskManager.addTask({ task, dueDate, category });
            this.showAlert('Tarea agregada exitosamente', 'success');
        }
        this.resetForm();
        this.render();
    }
    handleFilterChange(filter) {
        this.currentFilters.status = filter;
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        this.render();
    }
    handleEditTask(id) {
        const task = this.taskManager.tasks.find(t => t.id === id);
        if (!task) return;

        this.editTaskInput.value = task.task;
        this.editDueDateInput.value = task.dueDate || '';
        this.editCategoryInput.value = task.category;
        this.editTaskId.value = id;

        this.editModal.show();
    }
    handleSaveEdit() {
        const id = this.editTaskId.value;
        const task = this.editTaskInput.value.trim();
        const dueDate = this.editDueDateInput.value;
        const category = this.editCategoryInput.value;
        if (!task) {
            this.showAlert('La descripción de la tarea no puede estar vacía', 'warning');
            return;
        }
        this.taskManager.updateTask(id, { task, dueDate, category });
        this.showAlert('Tarea actualizada exitosamente', 'success');
        this.editModal.hide();
        this.render();
    }
    handleToggleComplete(id) {
        this.taskManager.toggleComplete(id);
        this.render();
    }
    handleDeleteTask(id) {
        const taskElement = document.querySelector(`[data-task-id="${id}"]`);
        if (taskElement) {
            taskElement.classList.add('deleting');
            setTimeout(() => {
                this.taskManager.deleteTask(id);
                this.showAlert('Tarea eliminada exitosamente', 'info');
                this.render();
            }, 400);
        } else {
            this.taskManager.deleteTask(id);
            this.render();
        }
    }
    handleClearCompleted() {
        if (confirm('¿Estás seguro de que deseas eliminar todas las tareas completadas?')) {
            const count = this.taskManager.clearCompleted();
            this.showAlert(`${count} tarea(s) completada(s) eliminada(s)`, 'success');
            this.render();
        }
    }
    handleClearAll() {
        if (confirm(' ¿Estás seguro de que deseas eliminar TODAS las tareas? Esta acción no se puede deshacer.')) {
            const count = this.taskManager.clearAll();
            this.showAlert(`${count} tarea(s) eliminada(s)`, 'success');
            this.render();
        }
    }
    handleExport() {
        StorageManager.exportTasks(this.taskManager.tasks);
        this.showAlert('Tareas exportadas exitosamente', 'success');
    }
    render() {
        const tasks = this.taskManager.getFilteredTasks(this.currentFilters);
        this.renderTasks(tasks);
        this.updateStatistics();
    }
    renderTasks(tasks) {
        if (tasks.length === 0) {
            this.emptyState.style.display = 'block';
            this.tasksContainer.innerHTML = '';
            this.tasksContainer.appendChild(this.emptyState);
            return;
        }
        this.emptyState.style.display = 'none';
        this.tasksContainer.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            this.tasksContainer.appendChild(taskElement);
        });

        this.taskCountEl.textContent = tasks.length;
    }
    createTaskElement(task) {
        const div = document.createElement('div');
        div.className = `task-item ${task.completed ? 'completed' : ''}`;
        div.setAttribute('data-task-id', task.id);
        const categoryInfo = TaskFormatter.formatCategory(task.category);
        const isOverdue = !task.completed && TaskFormatter.isOverdue(task.dueDate);
        const daysUntil = TaskFormatter.getDaysUntilDue(task.dueDate);
        let dueDateHTML = '';
        if (task.dueDate) {
            const dateClass = isOverdue ? 'overdue' : '';
            let dueDateText = TaskFormatter.formatDueDate(task.dueDate);
            if (daysUntil !== null) {
                if (daysUntil === 0) {
                    dueDateText += ' (¡Hoy!)';
                } else if (daysUntil === 1) {
                    dueDateText += ' (Mañana)';
                } else if (daysUntil > 1 && daysUntil <= 7) {
                    dueDateText += ` (en ${daysUntil} días)`;
                } else if (daysUntil < 0) {
                    dueDateText += ` (Vencida hace ${Math.abs(daysUntil)} días)`;
                }
            }
            dueDateHTML = `
                <div class="task-date ${dateClass}">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${dueDateText}</span>
                </div>
            `;
        }
        div.innerHTML = `
            <div class="task-header">
                <div class="task-text">${this.escapeHtml(task.task)}</div>
                <span class="task-category category-${task.category}">
                    <i class="fas ${categoryInfo.icon}"></i>
                    ${categoryInfo.label}
                </span>
            </div>
            <div class="task-meta">
                ${dueDateHTML}
                <span class="task-status ${task.completed ? 'status-completed' : 'status-pending'}">
                    <i class="fas ${task.completed ? 'fa-check-circle' : 'fa-hourglass-half'}"></i>
                    ${task.completed ? 'Completada' : 'Pendiente'}
                </span>
            </div>
            <div class="task-actions">
                <button class="btn btn-sm btn-outline-primary" onclick="uiManager.handleEditTask('${task.id}')" 
                        title="Editar tarea">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm ${task.completed ? 'btn-outline-warning' : 'btn-outline-success'}" 
                        onclick="uiManager.handleToggleComplete('${task.id}')"
                        title="${task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}">
                    <i class="fas ${task.completed ? 'fa-undo' : 'fa-check'}"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="uiManager.handleDeleteTask('${task.id}')"
                        title="Eliminar tarea">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        return div;
    }
    updateStatistics() {
        const stats = this.taskManager.getStatistics();
        this.totalTasksEl.textContent = stats.total;
        this.pendingTasksEl.textContent = stats.pending;
        this.completedTasksEl.textContent = stats.completed;
        this.progressPercentEl.textContent = `${stats.progress}%`;
        this.progressValueEl.textContent = `${stats.progress}% completado`;
        
        this.mainProgressBar.style.width = `${stats.progress}%`;
        this.mainProgressBar.setAttribute('aria-valuenow', stats.progress);
    }
    showAlert(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show custom-alert`;
        alertDiv.setAttribute('role', 'alert');
        const iconMap = {
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            danger: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        alertDiv.innerHTML = `
            <i class="fas ${iconMap[type]} me-2"></i>
            <strong>${message}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        this.alertContainer.appendChild(alertDiv);
        setTimeout(() => {
            alertDiv.classList.add('hiding');
            setTimeout(() => {
                alertDiv.remove();
            }, 400);
        }, 5000);
    }
    resetForm() {
        this.taskInput.value = '';
        this.dueDateInput.value = '';
        this.categoryInput.value = 'trabajo';
    }
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}
class ClockManager {
    constructor() {
        this.clockElement = document.getElementById('clock-text');
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }
    updateClock() {
        const now = new Date();
        
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                       'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const dayName = days[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        
        const timeString = `${hours}:${minutes} ${ampm}`;
        const dateString = `${dayName}, ${day} de ${month} del ${year}`;
        
        this.clockElement.textContent = `${dateString} - ${timeString}`;
    }
}
let taskManager;
let uiManager;
let clockManager;
document.addEventListener('DOMContentLoaded', () => {
    try {
        taskManager = new TaskManager();
        uiManager = new UIManager(taskManager);
        clockManager = new ClockManager();
        console.log('ToDoList initialized successfully');
        console.log(`Loaded ${taskManager.tasks.length} tasks from storage`);

    } catch (error) {
        console.error('Error initializing application:', error);
        alert('Hubo un error al inicializar la aplicación. Por favor, recarga la página.');
    }
});
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && uiManager) {
        uiManager.render();
    }
});
window.addEventListener('beforeunload', (e) => {
    if (uiManager && uiManager.editingTaskId) {
        e.preventDefault();
        e.returnValue = '';
    }
});
if (typeof window !== 'undefined') {
    window.TaskMasterPro = {
        taskManager,
        uiManager,
        clockManager,
        version: '2.0.0'
    };
}