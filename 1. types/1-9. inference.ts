{
  /**
   * Type Inference 타입 추론
   * 명확하게 명시를 안해줘도 자동으로 결정됨
   * 사용X
   */
  let text = "hello";
  // text = 1; Error (자동으로 string으로 지정)
  function print(message = "hello") {
    console.log(message);
  }
  // print(0); Error

  //리턴값을 number로 추론
  function add(x: number, y: number) {
    return x + y;
  }
  //result를 number로 추론
  const result = add(1, 2);
}
