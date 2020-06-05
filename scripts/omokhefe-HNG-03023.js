class User {
    constructor(fullname, language, id, email ) {
        this.fullname= fullname
        this.language= language;
        this.id= id;
        this.email =email;
}
sayHello ( ) {
    let outputMessage  = `Hello World, this is ${this.fullname} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`;
return outputMessage;
   }
} 
const me = new User(
    "Grace Idumah",
    "Javascript",
    "HNG-03023",
    "idumahgrace@yahoo.com",
);
console.log(me.sayHello());