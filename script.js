/*const numbers2 =[1,2,15,98,256]
const macNumber =numbers2.reduce((prev,curr) =>prev > curr ? prev : curr)
console.log(macNumber)*/


const Person =function(firstName,birthYear){    // buyuk harfe yapiliyor onemkli


    this.birthYear =birthYear;
    this.firstName= firstName;
}


const ebuze =new Person('ebuzer', 1990)
console.log(ebuze)