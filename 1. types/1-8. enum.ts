{
  /**
   * Enum
   * 상수값들을 정의할 수 있도록
   * (JavaScript에는 없음)
   */
  // JavaScript
  const DAYS = Object.freeze({ MON: 1, TUE: 2, WEN: 3 });
  console.log(DAYS.MON);
  //TypeScript (값을 정하지 않으면 0부터 시작)
  enum Days {
    MON = 1,
    TUE,
    WED,
  }
  console.log(Days.MON);
  // 사용 비추
  // 어떠한 값도 넣을 수 있음 (아래와 같이) Union타입으로 대체 가능
  let day: Days = Days.WED;
  day = 10;
  console.log(day);
}
