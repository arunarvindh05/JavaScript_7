//1
//Class Movie
/*
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/

class Movie{
    //a) & b)
    constructor(title,studio,rating='PG'){
        this.title = title
        this.studio = studio
        this.rating = rating
    }

    // //b)
    // constructor(title,studio){
    //     this.title = title
    //     this.studio = studio
    //     this.rating = 'PG'
    // }

    getTitle(){
        return this.title;
    }
    getStudio(){
        return this.studio;
    }
    getRating(){
        return this.rating;
    }
    
}

//c)

let mov1 = new Movie("Movie1","Studio1","PG");
let mov2 = new Movie("Movie2","Studio2","PG");
let mov3 = new Movie("Movie3","Studio3","PG");
let mov4 = new Movie("Movie4","Studio4","PG13");
let mov5 = new Movie("Movie5","Studio5","NC17");
let mov6 = new Movie("Movie6","Studio6","R");
  
  
let movies = [mov1,mov2,mov3,mov4,mov5,mov6];
console.log("Total movie object :",movies);
  
let pgMov = movies.filter(mov => mov.getRating() === "PG");
  
console.log("Only PG rating movie array",pgMov);

//d)
var m1=new Movie('Casino Royale','Eon Productions','PG­13')
console.log("-----------Movie Object-------------")
console.log("Title: ",m1.getTitle())
console.log("Studio: ",m1.getStudio())
console.log("Rating: ",m1.getRating())

//-----------------------------------------------------------------------------------------------------------------------------------------

//2

//Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }

    circle(){
        return `color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius){
        this.radius=radius;
        return `radius is ${this.radius}`;
    }
    circle(radius,color){
        this.radius=radius;
        this.color=color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getRadius(){
        return this.radius;
    }
    setColor(color="red"){
        this.color=color;
    }
    getColor(){
        return this.color;
    }

    getArea(){
        return 3.14 *(this.radius)*(this.radius);
    }
    getCircumference(){
        return (this.radius)*2*3.14;
    }
}
let circ = new Circle(6,"black");

console.log(circ);

console.log(circ.circle()); 
console.log(circ.circle(5)); 
console.log(circ.circle(4,"white")); 
circ.setRadius();
console.log("The radius is :",circ.getRadius()); 
circ.setColor('Green');
console.log("The color is :",circ.getColor());
console.log("The area of circle :",circ.getArea()); 
console.log("The circumference of circle: ",circ.getCircumference());

//-----------------------------------------------------------------------------------------------------------------------------------------

//3
// Write a “person” class to hold all the details.


class Person{
    constructor(name,dob,age,email,mobileNo,address)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.mobileNo=mobileNo;
        this.address=address;
    }
    getName()
    {
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
    getEmail()
    {
        return this.email;
    }
    getMobileNo()
    {
        return this.mobileNo;
    }
    getAddress()
    {
        return this.address;
    }
}

var p1=new Person('arun',22,'arun@gamil.com','9500000000','Chennai')
console.log('Name :',p1.getName())
console.log('Age :',p1.getAge())
console.log('Email :',p1.getEmail())
console.log('Mobile Number :',p1.getMobileNo())
console.log('Address :',p1.getAddress())


//-----------------------------------------------------------------------------------------------------------------------------------------

//4
// write a class to calculate uber price.

class Uber {
    constructor(BaseFare=10,CostPerMile=2,CostPerMinute=1,BookingFee=6,time=1,mile=1){
    this.BaseFare=BaseFare;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    this.time=time;
    this.mile=time;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(`the total price is RS.${(this.BaseFare)+(this.BookingFee)+
            ((this.CostPerMinute)*(time))+((this.CostPerMile)*(mile))} only`);
    }
}
let u1 = new Uber();
u1.totalPrice(10,100); 
u1.totalPrice(15,20); 
