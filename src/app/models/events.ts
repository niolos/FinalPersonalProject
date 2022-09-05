export class Events {
    _id:string;
    eventName:String;
    eventDate:String;
    location: String;
    description: String;
    cost: Number;
    status:String;
    eventImg:File;

    constructor(_id?: string, eventImg?:File, eventName?: String, eventDate?: String, location?: String, description?: String, cost?:Number, status?:String){
        this._id = _id!;
        this.eventImg = eventImg!;
        this.eventName = eventName!;
        this.eventDate = eventDate!;
        this.location = location!;
        this.description = description!;
        this.cost = cost!;
        this.status =status!;
    }
}