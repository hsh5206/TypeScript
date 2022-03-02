{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    // T의 키값 P?: P의 타입 T
    [P in keyof T]?: T[P]; // map for...in
  };
  type readOnly<T> = {
    readonly [P in keyof T]: T[P]; // map for...in
  };
  type VideoOptional = Optional<Video>;
  // type VideoOptional = {
  //   title?: StringConstructor;
  //   author?: string;
  //   description?: string;
  // };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
