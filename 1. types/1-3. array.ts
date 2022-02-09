{
  // 배열
  const fruits: string[] = ["tomato", "bsnana"];
  const nums: Array<number> = [1, 2, 3];
  function printArr(fruits: readonly string[]) {
    // 변경할 수 없음
    // readonly는 stirng[]에서만 사용가능
  }

  // 튜플 (권장X) 인덱스로 접근하게 때문에 -> interface, type alias, class로 대체 사용
  let student: [string, number];
  student = ["name", 123];
  const [name, age] = student;
}
