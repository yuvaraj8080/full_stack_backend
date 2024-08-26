function PrintData(): void {
    console.log("MY Name is Yuvaraj Dekhane");
}

function printAddition(num1: number, num2: number): number {
    return num1 + num2;
}

function login(fn: (name: string, password: string) => void) {
    // Pass the arguments directly as values
    fn("Yuvaraj", "1234");
}

function user(name: string, password: string): void {
    console.log(name, password);
}

// Call the login function with user as a callback
login(user);

const ans: number = printAddition(4, 5);
console.log(ans);
PrintData();
