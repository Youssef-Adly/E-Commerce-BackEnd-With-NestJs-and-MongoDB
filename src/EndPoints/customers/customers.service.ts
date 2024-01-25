import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomersService {

  constructor(
    @InjectModel('customers') private customersModel,
    @InjectModel('orders') private orderModel
  ){}

  async create(createCustomerDto: CreateCustomerDto) {
    let newCustomer = new this.customersModel(createCustomerDto);
    await newCustomer.save();
    return {'msg': 'posted Successfuly', 'data': createCustomerDto};
  }

  findAll() {
    return this.customersModel.find({});
  }

  findOne(id: number) {
    return this.customersModel.find({userID: id});
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    let updated = await this.customersModel.updateOne({userID: id}, updateCustomerDto);
    return {'msg': 'Updated Succeded', 'info': updated};
  }

  async remove(id: number) {
    const deleted = await this.customersModel.deleteOne({ userID: id });
    return {'msg': 'Removed Successfully', 'data': deleted};
  }

  findOrders(id: any) {
    let orders: [] = this.orderModel.find({'userID': id}, {'products': 1, _id: 0})
    return  this.orderModel.find({'userID': id})
    // return  orders
    }
  }