import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@ObjectType()
export class InvoiceType {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  vendor_name: string;

  @Field(() => Float)
  @IsNumber()
  amount: number;

  @Field()
  due_date: Date;

  @Field({ nullable: true })
  @IsString()
  description?: string;

  @Field(() => Int, { nullable: true })
  user_id?: number;

  @Field()
  @IsBoolean()
  paid: boolean;
}
