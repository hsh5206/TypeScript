{
  // use let & cnst

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array ...
   */

  // TypeScript

  /**기본1 */
  const num: number = 12;
  const str: string = "hello";
  const boal: boolean = true;

  let age: number | undefined; // 숫자 또는 undefined
  let person: string | null; // 문자열 또는 null

  function find(): number | undefined {
    return undefined;
  }

  /**기본1 */
  // unknown : 알 수 없는 데이터 (가능한 사용 X)
  let notSure: unknown = 0;
  notSure = "hello";

  // any : 어떠한 데이터든 들어갈 수 있음 (가능한 사용 X)
  let anything: any = 0;
  anything = "hello";

  // void : 함수에서 빈값을 리턴하면 사용 (생략 가능)
  function print(): void {
    console.log("hello");
    return;
  }
  // never : 리턴 하지 않는 경우 (어플리케이션이 터지는 경우) (함수가 안끝남)
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }

  //object : 원시타입을 제외한 모든 object (객체,배열 등등)
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "me" });
  acceptSomeObject([1, 2, 3, 4]);
}
