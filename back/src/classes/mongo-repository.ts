import { Model } from 'mongoose';
export class MongoBaseRepository {
    model: Model<any>;
    constructor(model: Model<any>) {
        this.model = model;
    }
    async findById(id:string) {
        return this.model.findById(id).exec();
    }
    async findAll() {
        return await this.model.find().exec();
    }
    async update(id:string,updated:any) {
        return await this.model.findByIdAndUpdate(id,updated).exec();
    }
}