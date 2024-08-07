//! 1) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

//!  a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//! b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//! d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const a = new Movie("Dada", "Olympia Movies", "9.3");
const b = new Movie("Jailer", "Sun Pictures");
const c = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(a.title, a.studio, a.rating);
console.log(b.title, b.studio, b.rating);
console.log(c.title, c.studio, c.rating);

//! 1) c)  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie1 {
  constructor(title, studio, rating = "PG") {
    this.title = title; //key: value  // leo = title
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(films) {
    return films.filter((films) => films.rating === "PG");
  }
}
const mov = new Movie1("Dada", "Olympia Movies", "9.3");
const films = [
  new Movie1("Romeo", "Vijay Antony Film Corporation", "7.5"),
  new Movie1("Agilan", "Screen Scene Media Entertainment"),
  new Movie1("Iraivan", "Passion Studios"),
  new Movie1("Let's Get Married", "Dhoni Entertainment"),
  new Movie1("Paramporul", "Kavi Creations", "8.5"),
];
const pgMovies = Movie1.getPG(films);
console.log(pgMovies);

//! 2)circle task
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(c) {
    this.color = c;
  }
  get toString() {
    return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}
let obj = new Circle(1.0, "red");
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.Radius = 3.5;
console.log(obj.Radius);
obj.Color = "green";
console.log(obj.Color);

//! 3)Write a “person” class to hold all the details.

class Person {
  constructor(name, age, gender, martialstatus, contact, email) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.MartialStatus = martialstatus;
    this.Contact = contact;
    this.Email = email;
  }
}
const person1 = new Person(
  "Jayakumar",
  "61",
  "Male",
  "Married",
  "8651265861",
  "jaya@gamil.com"
);
const person2 = new Person(
  "Venkat",
  "32",
  "Male",
  "Married",
  "8956123475",
  "venkat@gamil.com"
);
console.log(
  person1.Name,
  person1.Age,
  person1.Gender,
  person1.MartialStatus,
  person1.Contact,
  person1.Email
);
console.log(
  person2.Name,
  person2.Age,
  person2.Gender,
  person2.MartialStatus,
  person2.Contact,
  person2.Email
);

//! 4) write a class to calculate the Uber price.

class UberPrice {
  constructor(kilometer, price = 50) {
    this.Kilometer = kilometer;
    this.Price = price;
  }
  set amount(n) {
    this.Kilometer = n;
  }
  get amount() {
    return this.Kilometer * this.Price;
  }
}
const Uber = new UberPrice(20);
console.log(Uber.amount);
