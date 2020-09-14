import { User } from "./user";

export class Post {

    id_post:number;
    message:string;
    date:Date;
    user: User;

    constructor(id_post:number, message:string, date:Date, user:User){
        this.id_post = id_post;
        this.message = message;
        this.date = date;
        this.user = user;
    }
}
