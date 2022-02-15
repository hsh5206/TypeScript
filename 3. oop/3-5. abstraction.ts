{
  /**
   * 추상화
   * maker. 하면 나오는 여러 함수들을 private 처리해서 접근 가능한 함수 제한
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 인터페이스 : 꼭 구현해야할 양식을 지정
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // implements CoffeeMaker
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level : 오브젝트마다 생성 X
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value ffor beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not Enough coffee beans!");
      }
    }

    private preheat() {
      console.log("heating,,,");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 인터페이스로 타입을 받으면 인터페이스에 정의된 아이들만 이용 가능
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(32) - 인터페이스에 없는 함수라서 불가능
  maker2.makeCoffee(2);
  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.clean();

  // ex
  class Amateur {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class Pro {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }
  const machine: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const one = new Amateur(machine);
  const two = new Pro(machine);
  one.makeCoffee();
  two.makeCoffee();
}
