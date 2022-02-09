{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //JavaScript
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //TypeScript
  function fetchNum(id: string): Promise<number> {
    //code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Optional Parameter
  function printName(firstName: string, lasName?: string) {
    console.log(firstName);
    console.log(lasName);
  }
  printName("2HS");

  // Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
