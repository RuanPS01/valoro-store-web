import { GetProductsResponse } from "../../../domain/usecases/product/interfaces/get-products-response";

export interface GetProductsUseCase {
  execute(): Promise<GetProductsResponse>;
}
