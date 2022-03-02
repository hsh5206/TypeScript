{
  /**
   * readonly로 타입을 변형 해줌
   */
  type ToDo = {
    title: string;
    description: string;
  };

  // 이미 Readonly<T>이 유틸리티로 정의 돼 있음
  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja";
  }
}
