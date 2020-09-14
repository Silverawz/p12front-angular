import { User } from "./user";
import { Categories } from "./categories";
import { Post } from "./post";

export class Topic {

    id_topic:number;
    title:string;
    active:string;
    user: User;
    categories: any[] = [];
    postList: any[] = [];

    constructor(id_topic:number, title:string, active:string, user:User, postList:Post[], categories:Categories[]){
        this.id_topic = id_topic;
        this.title = title;
        this.active = active;
        this.user = user;
        this.postList = postList;
        this.categories = categories;
    }
}
