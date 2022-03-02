{
  /**
   * Type vs Interface
   * type = 데이터를 담을 목적
   * interface = 어떠한 것을 구현하기 위해
   */
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // 오브젝트
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // 클래스
  class Pos1 implements PositionType {
    x: number = 1;
    y: number = 1;
  }
  class Pos2 implements PositionInterface {
    x: number = 1;
    y: number = 1;
  }

  // 확장
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositonType = PositionType & { z: number };

  // 추가 : 인터페이스만 합치기 가능
  interface PositionInterface2 {
    x: number;
    y: number;
  }
  interface PositionInterface2 {
    z: number;
  }

  // 타입만 가능한 것
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string
  type NumberType = number;
  type UnionType = number | undefined;
}
