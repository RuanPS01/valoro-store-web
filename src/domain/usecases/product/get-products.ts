import { GetProductsUseCase } from '../../../presentation/home/port/get-products-usecase';
import { GetProductsResponse } from './interfaces/get-products-response';
import { Product } from './interfaces/product';

export class GetProductsUseCaseImpl implements GetProductsUseCase {
  constructor() {
    console.log('constructor');
  }

  async execute(): Promise<GetProductsResponse> {
    console.log('rule to call services or another thing');
    const products = {} as GetProductsResponse;
    return products;
  }
}
