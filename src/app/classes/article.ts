import { User } from "./user";
import { Categories } from "./categories";

export class Article {

    id:number;
    title:string;
    message:string;
    date:Date;
    active:boolean;
    user: User;
    categories: any[] = [];

    constructor(id:number, title:string, message:string, date:Date, active:boolean, user:User, categories:Categories[]){
        this.id = id;
        this.title = title;
        this.message = message;
        this.date = date;
        this.active = active;
        this.user = user;
        this.categories = categories;
    }
    
}

