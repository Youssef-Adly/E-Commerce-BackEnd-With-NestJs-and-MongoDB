import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

  constructor(@InjectModel('products') private productModel) {}

  async create(createProductDto: any) {
    let newProduct = new this.productModel(createProductDto);
    await newProduct.save();
    return {"msg": 'Post Succeded', "data": newProduct}
  }

  findAll() {
    return this.productModel.find({});
  }

  findOne(id: number) {
    return this.productModel.find({'productID': id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let updated = await this.productModel.updateOne({'productID': id}, updateProductDto);
    return {'msg': 'Updated Succeded', 'info': updated};
  }

  async remove(id: number) {
    const deleted = await this.productModel.deleteOne({ "productID": id });
    return {'msg': 'Removed Successfully', 'data': deleted}
  }
}
