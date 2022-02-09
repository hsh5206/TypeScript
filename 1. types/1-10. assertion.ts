{
  /**
   * Type Assertion 타입 강요
   * as 키워드
   * 특정 변수의 타입을 확실하게 알고 있을 때 사용
   * 추천 X
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  // 에러 + 앱 터짐
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // 확신해서 사용할 때 ! 사용 가능
  numbers.push(2);
}
