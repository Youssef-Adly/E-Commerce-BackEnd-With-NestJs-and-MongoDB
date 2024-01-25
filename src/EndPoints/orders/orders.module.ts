import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersSchema } from './orders.schema';
import { ProductsSchema } from '../products/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'orders',
        schema: OrdersSchema,
      },
      {
        name: 'products',
        schema: ProductsSchema,
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule { }
