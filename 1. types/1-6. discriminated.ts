{
  /**
   * Discriminated
   * 유니온 타입을 사용할 때 구분하기 쉽게 만들어준다
   */
  // ex) 로그인 함수 (정의한 타입을 가지고 타입을 만들 수도 있다)
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function Login(): LoginState {
    return {
      result: "success",
      response: {
        body: "login",
      },
    };
  }

  //ex) 로그인함수 반환값 출력
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
