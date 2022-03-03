{
  /**
   * this : 호출한 곳
   */
  class Counter {
    count = 0
    // 바인딩을 해야함
    increase = function() {
      console.log(this)
    }
    // 화살표함수는 바인딩을 이용할 필요가 없음
    increase2 = () => {
      console.log(this)
    }
  }
  const counter = new Counter()
  counter.increase() // Counter : Counter에서 호출
  const caller = counter.increase
  caller() // undefined : const로 만들어 줬기에 정보를 잃어버림
  const caller2 = counter.increase.bind(counter)
  caller2() // Counter : 바인딩을 해서 counter와 묶어줘서 정보를 유지

  class Bob {}
  const bob = new Bob()
  bob.run = counter.increase;
  bob.run(); // Bob : Bob에서 호출했기 때문에
}