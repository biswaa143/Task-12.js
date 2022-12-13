class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.mrks=marks;
    }
    setPlacementAge(minAge){
        return minMarks=>{
            if(this.marks>minMarks && this.age>minAge){
                console.log(this.name + " is ready for placements");
            } else {
                console.log(this.name + " is not ready for placements");
            }
        }
    }
}
const Amar=new student('Amar',20,70);
const Biswa=new student('Biswa',13,35);
Amar.setPlacementAge(30)(80);
Biswa.setPlacementAge(20)(40);