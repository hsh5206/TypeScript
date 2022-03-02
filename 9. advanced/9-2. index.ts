{
  const obj = {
    name: "2hs",
  };
  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
  type Name = Animal["name"];
  const text: Name = "monkey";
  type Gender = Animal["gender"]; // 'male' | 'female'
  type Keys = keyof Animal; // 'name' | 'ange' | 'gender'

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "2hs",
    gender: "male",
  };
}
