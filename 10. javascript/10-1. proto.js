{
  /**
   * prototype : 자바스크립트에서 상속을 이용하기 위한, 재사용을 위한
   * __proto__
   */
  const x = {}
  const y = {}
  console.log(x.__proto__ === y.__proto__) // true : 객체의 proto를 상속

  const array = [] // array는 객체의 proto를 상속한 배열의 proto를 상속

  function CoffeeMachine(beans) {
    this.beans = beans;
    //// instance member level : 만들어지는 인스턴스마다 가지고 있음
    // this.makeCoffee = (shots) => {
    //   console.log('making...')
    // }
  }
  // protothpe member level : 만들어지는 인스턴스 안의 __proto__에 가지고 있음
  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...')
  }
  const machine1 = new CoffeeMachine(10)
  const machinne2 = new CoffeeMachine(20)

  function LatteMachine(milk) {
    this.milk = milk
  }
  // 라떼 머신은 커피머신을 상속, 커피머신은 Object를 상속
  LatteMachine.prototype = Object.create(CoffeeMachine.prototype)
  const latteMachine = new LatteMachine(123)
}