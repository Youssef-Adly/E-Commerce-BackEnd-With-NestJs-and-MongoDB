import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './EndPoints/customers/customers.module';
import { ProductsModule } from './EndPoints/products/products.module';
import { OrdersModule } from './EndPoints/orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CustomersModule,
    ProductsModule,
    OrdersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/ECommerce'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
