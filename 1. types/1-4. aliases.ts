{
  /**
   * Type Aliases
   * 새로운 타입을 정의할 수 있음
   */
  type Text = string;
  const name: Text = "2HS";
  type Student = {
    name: string;
    age: number;
  };
  const students: Student = {
    name: "2HS",
    age: 25,
  };

  /**
   * String Literal Types
   * 특정 값 자체를 타입으로 가짐
   */
  type Name = "2HS";
  let MyName: Name = "2HS";
}
