{
  /**
   * getter 와 setter
   * 함수형이지만 사용할 때는 멤버 변수처럼 사용 가능
   */

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 3;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("age should be greater than 0");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.age = 6;
  console.log(user.age);
}
