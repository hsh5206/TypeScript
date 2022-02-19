{
  interface Employee {
    pay(): void;
  }

  class FullTime implements Employee {
    pay() {
      console.log("full time");
    }
    workFullTime() {}
  }

  class PartTime implements Employee {
    pay() {
      console.log("part time");
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 추상적으로 리턴하면 Full인지 Part인지 정보가 사라짐
  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // 제네릭 + 조건 (extends Employee 해당 클래스를 확장한 아이만 가능)
  function pay2<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  /**
   * 추가 예제
   */
  const obj = {
    name: "2hs",
    age: 20,
  };
  // T의 키값인 K
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  console.log(getValue(obj, "name"));
  console.log(getValue(obj, "age"));
}
