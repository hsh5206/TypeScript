{
  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>;

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : "undefined";

  type T0 = TypeName<string>; // string
  type T1 = TypeName<null>; // undefined
}
