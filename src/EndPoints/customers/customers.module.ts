import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersSchema } from './customers.schema';
import { OrdersSchema } from '../orders/orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'customers',
        schema: CustomersSchema,
      },
      {
        name: 'orders',
        schema: OrdersSchema,
      },
    ]),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
