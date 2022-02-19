{
  // number만 가능
  function checkNotNull1(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // type체크 불가능
  function checkNotNull2(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 제네릭 이용 : 어떠한 타입이든지 받을 수 있고 타입 보장 가능
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal = checkNotNull(true);
}
