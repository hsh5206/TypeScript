{
  /**
   * Union Types
   * OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // ex) 로그인 함수 (정의한 타입을 가지고 타입을 만들 수도 있다)
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function Login(): LoginState {
    return {
      response: {
        body: "login",
      },
    };
  }

  //ex) 로그인함수 반환값 출력
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
  // 더 좋은 코드 -> 1-6. discriminated
}
