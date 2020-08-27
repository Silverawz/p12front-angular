import { User } from "./user";

export class Article {

    id:number;
    title:string;
    message:string;
    date:Date;
    active:boolean;
    user: User;

    constructor(id:number, title:string, message:string, date:Date, active:boolean, user:User){
        this.id = id;
        this.title = title;
        this.message = message;
        this.date = date;
        this.active = active;
        this.user = user;
    }
    
}
