import { GetProductsUseCaseImpl } from "../../../domain/usecases/product/get-products";

export const makeGetProductsUseCase = () => {
  return new GetProductsUseCaseImpl();
};
