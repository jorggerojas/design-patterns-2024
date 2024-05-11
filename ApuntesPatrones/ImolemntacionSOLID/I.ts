interface IWorker {
    work(): void;
}
interface IEater {
    eat(): void;
}

class HumanWorker implements IWorker, IEater {
    work(): void {
        console.log('Trabajando...');
    }

    eat(): void {
        console.log('Comiendo durante el descanso...');
    }
}

class RobotWorker implements IWorker {
    work(): void {
        console.log('Robot trabajando...');
    }
}

function makeThemWork(worker: IWorker) {
    worker.work();
}

let human = new HumanWorker();
let robot = new RobotWorker();

makeThemWork(human); // Salida: Trabajando...
makeThemWork(robot); // Salida: Robot trabajando...
