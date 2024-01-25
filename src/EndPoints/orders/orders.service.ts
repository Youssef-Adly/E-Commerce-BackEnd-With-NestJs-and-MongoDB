import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('orders') private orderModule,
    @InjectModel('products') private productModule
  ){}

  async create(createOrderDto: CreateOrderDto) {
    let newOrder = new this.orderModule(createOrderDto);
    await  newOrder.save()
    return {'msg': 'posted Successfuly', 'data': createOrderDto};
  }

  findAll() {
    return this.orderModule.find({});
  }

  findOne(id: number) {
    return this.orderModule.find({_id: id});
  }

  async findOrdersProducts(id: number) {
    let order = await this.findOne(id);
    return this.productModule.find({productID: {$in: order[0].products}})
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    let updated = await this.orderModule.updateOne({_id: id}, updateOrderDto);
    return {'msg': 'Updated Succeded', 'info': updated};
  }

  async remove(id: number) {
    const deleted = await this.orderModule.deleteOne({ _id: id });
    return {'msg': 'Removed Successfully', 'data': deleted};
  }
}
