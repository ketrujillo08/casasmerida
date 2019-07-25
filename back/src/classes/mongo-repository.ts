import { Model } from 'mongoose';
export class MongoBaseRepository {
    model: Model<any>;
    constructor(model: Model<any>) {
        this.model = model;
    }

    findAll() {
        this.model.find().exec();
    }
}