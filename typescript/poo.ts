class Animal{
    protected edad: number;
    constructor(edad:number){
    this.edad=edad
    }
    envejecer(){
        this.edad+=1  
      }
}
const Perro=new Animal (10) 