export class Subscriptions {
    _id:string;
    fName: string;
    lName: string;
    alias: string;
    email: string;
    phoneNumber:number;
    dob: string;

    constructor(_id?: string, fName?: string, lName?: string, alias?:string, email?: string, phoneNumber?: number, dob?:string){
        this._id = _id!;
        this.fName = fName!;
        this.lName = lName!;
        this.email = email!;
        this.alias = alias!;
        this.phoneNumber = phoneNumber!;
        this.dob = dob!;
    }
}