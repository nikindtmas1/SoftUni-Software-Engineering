function demo(){

    let obj = {
        name: 'engineering',
        director: 'Ted Thomson',
        employeeCount: 25,
        age: function(arg){
           return `My age is ${arg}`;
        }
    };

    
    let {name, employeeCount} = obj;
    /*
    console.log(obj.age(46));
    console.log(name);
    console.log(employeeCount);
    
    let num = 5;
    
    const parser = {
        
        increment(){return ++num; },
        decrement(){ num--; },
        reset(){ num = 0; }
    }
    
    console.log( parser[reset]());
    */

     let myObj = {

        firstName: 'Nikolai',
        lastName: 'Nikolaev',
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
     }

     console.log(myObj.fullName());
}
demo();