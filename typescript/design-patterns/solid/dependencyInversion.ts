type Task = {};

// Interfaz para la fuente de datos de tareas
interface TaskRepository {
  getTasks(): Task[];
  addTask(task: Task): void;
}

// Clase concreta que implementa la interfaz TaskRepository, por ejemplo, usando una base de datos
class DatabaseTaskRepository implements TaskRepository {
  getTasks(): Task[] {
    // Lógica para obtener tareas de la base de datos
    return [];
  }

  addTask(task: Task): void {
    // Lógica para agregar una tarea a la base de datos
  }
}

// Clase TaskManager que depende de TaskRepository
class TaskManager {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  getAllTasks(): Task[] {
    return this.taskRepository.getTasks();
  }

  addNewTask(task: Task): void {
    this.taskRepository.addTask(task);
  }
}

// Ejemplo de uso
const dbTaskRepository = new DatabaseTaskRepository();
const taskManager = new TaskManager(dbTaskRepository);

// Ahora puedes utilizar taskManager para gestionar tareas sin que esté directamente acoplado a una implementación específica de la fuente de datos.
