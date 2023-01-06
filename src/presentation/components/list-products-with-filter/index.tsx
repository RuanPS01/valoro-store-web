import React, { useEffect, useState } from "react";
import GenericButton from "../../../components/generic-button";
import { TiFilter } from "react-icons/ti";
import ProductButton from "../../../components/product-button";
import TacticalKnife from '../../../../assets/images/TacticalKnife.webp';
import { TiPlus } from "react-icons/ti";
import useWindowDimensions from "../../../main/hooks/window-dimensions";
import Filter from "../../../components/filter";

export interface ListProductsWithFilterProperties {
  category?: string;
  inPromotion?: boolean;
  promotionPercentMin?: number;
  spotPriceMax?: number;
  spotPriceMin?: number;
  forwardPriceMax?: number;
  forwardPriceMin?: number;
  maxInstallmentsInterestFreeMin?: number;
  collection?: string;
  origin?: string;
  haveResources?: boolean;
  leftButtonText?: string;
  leftButtonAction?: () => void;
  leftButtonType?: string;
  rightButtonText?: string;
  rightButtonAction?: () => void;
  rightButtonType?: string;
}

import { useAppSelector, useAppDispatch } from "../../../main/hooks/main-hooks";
import { getProducts } from "../../../domain/usecases/list-products/list-products-slice";
import { ListProductsRequest } from "../../../domain/usecases/list-products/interfaces/list-products-request";
import { selectProducts } from "../../../domain/usecases/list-products/list-products-slice";

export default function ListProductsWithFilter(
  props: ListProductsWithFilterProperties): JSX.Element {
  const [activeFilters, setActiveFilters] = useState(false);

  const { width } = useWindowDimensions();
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  let paramsToFilter: ListProductsRequest = {
    category: props.category,
    inPromotion: props.inPromotion,
  };
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts(paramsToFilter));
  }, [])

  //filters
  const [categoryFilter, setCategoryFilter] = useState('');
  const [inPromotionFilter, setInPromotionFilter] = useState(false);
  const [promotionPercentMinFilter, setPromotionPercentMinFilter] = useState(0);
  const [spotPriceMaxFilter, setSpotPriceMaxFilter] = useState(0);
  const [spotPriceMinFilter, setSpotPriceMinFilter] = useState(0);
  const [maxInstallmentsInterestFreeMinFilter, setMaxInstallmentsInterestFreeMinFilter] = useState(0);
  const [haveResourcesFilter, setHaveResourcesFilter] = useState(false);
  const [orderFilter, setOrderFilter] = useState('asc');

  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      category: categoryFilter,
    }
  }, [categoryFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      inPromotion: inPromotionFilter,
    }
  }, [inPromotionFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      promotionPercentMin: promotionPercentMinFilter,
    }
  }, [promotionPercentMinFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      spotPriceMax: spotPriceMaxFilter,
    }
  }, [spotPriceMaxFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      spotPriceMin: spotPriceMinFilter,
    }
  }, [spotPriceMinFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      maxInstallmentsInterestFreeMin: maxInstallmentsInterestFreeMinFilter,
    }
  }, [maxInstallmentsInterestFreeMinFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      haveResources: haveResourcesFilter,
    }
  }, [haveResourcesFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      order: orderFilter,
    }
  }, [orderFilter]);
  
  const hundleUpdateList = () => {
    dispatch(getProducts(paramsToFilter));
  };
  
  return (
    <div className="flex flex-col justify-center items-center h-fit mt-10 mb-20">
      <div className="mb-6">
        <GenericButton active={activeFilters} text={"Filter"} icon={TiFilter} type="secondary" onClick={() => setActiveFilters(!activeFilters)}/>
      </div>
      {activeFilters && <Filter 
        onChangeOrder={(value) => setOrderFilter(value)}
        onchangeCategory={(value) => setCategoryFilter(value)}
        onchangeHaveResources={(value) => setHaveResourcesFilter(value)}
        onchangeInPromotion={(value) => setInPromotionFilter(value)}
        onchangeMaxInstallmentsInterestFreeMin={(value) => setMaxInstallmentsInterestFreeMinFilter(value)}
        onchangePromotionPercentMin={(value) => setPromotionPercentMinFilter(value)}
        onchangeSpotPriceMax={(value) => setSpotPriceMaxFilter(value)}
        onchangeSpotPriceMin={(value) => setSpotPriceMinFilter(value)}
        updateEvent={() => {hundleUpdateList()}}
      />}
      
      
      <div className={`grid ${width < 800 ? 'grid-cols-2 gap-3' : 'grid-cols-7 gap-4'} gap-4`}>
        {list.products?.items.map((product) => {
          return <ProductButton
            key={Math.random().toString()}
            category={product.category}
            name={product.name}
            promotionPercent={product.promotionPercent}
            spotPrice={product.spotPrice}
            forwardPrice={product.forwardPrice}
            maxInstallmentsInterestFree={product.maxInstallmentsInterestFree}
            image={'data:image/png;base64,' + product.image}
          />
        })}
      </div>
      <div className="flex justify-between items-center w-full mt-10">
        <GenericButton text={"tentar a sorte"} type={"secondary"}/>
        <GenericButton text={"ver mais"} icon={TiPlus} type={"secondary"}/>
        <GenericButton text={"voltar ao topo"} type={"secondary"} onClick={scrollTop} />
      </div>
    </div>
  );
}

