{
  /**
   * composition 구성
   * 상속의 문제점 : 상속의 깊이가 깊어질 수록 족보가 꼬임
   * 상속의 문제점 : 보무클래스를 수정하면 자식클래스 전부 영향이감
   * 상속의 문제점 : 하나 이상의 부모 클래스를 상속할 수 없음
   * 상속보다 구성을 선호해야한다.
   *
   * 인터페이스를 이용해서 클래스간의 교류를 해야한다.
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 우유
  class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Fancy!!!! Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕
  class SugarMixer implements SugarProvider {
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      console.log(`Adding sugar...`);
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
  }
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  //milk
  const cheapMilk = new CheapMilkSteamer();
  const fancyMilk = new FancyMilkSteamer();
  const noMilk = new NoMilk();
  // sugar
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  const sweetCoffeeMachine = new CoffeeMachine(32, noMilk, sugar);
  const cheapCaffeLatteMachine = new CoffeeMachine(32, cheapMilk, noSugar);
  const fancyCaffeLatteMachine = new CoffeeMachine(32, fancyMilk, noSugar);
  const sweetFancyCaffeLatteMAchine = new CoffeeMachine(32, fancyMilk, sugar);

  let coffee = sweetCoffeeMachine.makeCoffee(2);
  console.log(coffee);
  coffee = cheapCaffeLatteMachine.makeCoffee(2);
  console.log(coffee);
}
