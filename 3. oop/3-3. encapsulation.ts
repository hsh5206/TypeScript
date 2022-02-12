{
  /**
   * 캡슐화
   * public : 기본
   * private : 외부에서 접근불가
   * protected : 상속할때 외부에서 접근 X, 자식 클래스는 접근 O
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level : 오브젝트마다 생성 X
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      return new CoffeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value ffor beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeMaker.makeMachine(21);
  console.log(maker);
  maker.fillCoffeeBeans(14);
  console.log(maker);
}
