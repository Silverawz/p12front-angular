export class User {
    id:number;
    email:string;
    firstname:string;
    lastname:string;
    password:string;

    constructor(id:number, email:string ,firstname:string, lastname:string, password:string){
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;    
    }
}
