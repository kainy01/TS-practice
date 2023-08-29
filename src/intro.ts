// const sm = 1;
// const md = 2;
// const lg = 3;

//PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}

//this enum auto knows the values of these it gonna increase it it self
let mySize: Size = Size.Medium;
console.log(mySize); //2
