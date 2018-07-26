class ConsolePrinter {

    public print(content: any): void {
        console.log(content);
    }

}

const addAndPrint = function (x: number, y: number): void {
    const result = x + y;
    const printer = new ConsolePrinter();
    printer.print(result);
};

export { ConsolePrinter, addAndPrint };