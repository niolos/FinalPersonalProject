export class Admins {
    _id:string;
    userName:String;
    password:String;
   

    constructor(_id?: string, eventImg?:File, userName?: String, password?: String, location?: String, description?: String, cost?:Number, status?:String){
        this._id = _id!;
        this.userName = userName!;
        this.password = password!;
    }
}