//una clase debe estar encargada de una única tarea
class Reportt {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    public generateReport(): string {
        // Lógica para generar el informe
        return "Report content";
    }
}

class ReportPrinter {
    protected report: Reportt

    constructor(report: Reportt){
        this.report = report;
    }

    public printReport(report: Reportt): void {
        console.log(report.generateReport());
    }
}

// Uso
const report = new Reportt('someData');
const printer = new ReportPrinter(report);
printer.printReport(report);