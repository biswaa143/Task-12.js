class student{

    static count=0;  //static variable to call
    constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();
    }
static countStudent(){
return(student.count++);     //this is how u access static variable
}
eligible(){
if(this.marks >=40){
    console.log(`${this.name}  is eligible`);
}
else if(this.marks<40){
console.log(`${this.name} is not eligible`);
}
}
}

const Amar=new student('Amar',18,1234,34);

const Manisha=new student('Manisha',15,2345,35);

const Amiya=new student('Amiya',16,4567,60);

const Jasmine=new student('Jasmine',17,7891,70);

const Biswa=new student('Biswa',19,3456,80);

console.log(student.countStudent());

Amar.eligible();

Manisha.eligible();

Amiya.eligible();

Jasmine.eligible();

Biswa.eligible();