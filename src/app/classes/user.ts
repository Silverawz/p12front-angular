export class User {
    firstname:string;
    lastname:string;
    email:string;
    active:boolean;

    constructor(UserReponse : any){
        this.firstname = UserReponse.firstname;
        this.lastname = UserReponse.lastname;
        this.email = UserReponse.email;
        this.active = UserReponse.active;
    }


}
