interface Printer {
    print(content: any): void;
}

class ConsolePrinter implements Printer {

    public print(content: any): void {
        console.log(content);
    }

}

const addAndPrint = function (x: number, y: number, printer: Printer): void {
    const result = x + y;
    printer.print(result);
};

export { Printer, addAndPrint };