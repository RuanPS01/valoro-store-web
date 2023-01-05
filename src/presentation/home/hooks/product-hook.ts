import { useCallback } from 'react';
import { changeProducts } from '../../../redux/reducer/products/get-products';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { GetProductsUseCase } from '../port/get-products-usecase';

export const useProduct = (useCaseGetProducts: GetProductsUseCase) => {
  const products = useAppSelector(state => state.product.products);
  const dispatch = useAppDispatch();

  const execute = useCallback(async () => {
    const response = await useCaseGetProducts.execute();
    dispatch(changeProducts({ products: response }));
  }, []);

  return {
    execute,
    products,
  };
};
