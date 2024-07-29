import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType()
export class CreateInvoiceInput {
  @Field()
  @IsString()
  vendor_name: string;

  @Field(() => Float)
  amount: number;

  @Field()
  due_date: Date;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  user_id?: number;

  @Field()
  @IsBoolean()
  paid: boolean;
}

@InputType()
export class UpdateInvoiceInput {
  @Field({ nullable: true })
  @IsString()
  vendor_name?: string;

  @Field(() => Float, { nullable: true })
  amount?: number;

  @Field({ nullable: true })
  due_date?: Date;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  user_id?: number;

  @Field({ nullable: true })
  @IsBoolean()
  paid?: boolean;
}
