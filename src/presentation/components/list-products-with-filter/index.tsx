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
  sellerUserId?: string;
  sellerUserEmail?: string;
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
import { useSelector } from "react-redux";
import { RootState } from "../../../main/store";

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
    sellerUserEmail: props.sellerUserEmail,
    sellerUserId: props.sellerUserId,
  };
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectProducts);
  
  const hundleUpdateList = () => {
    dispatch(getProducts(paramsToFilter))
  };

  useEffect(() => {
    hundleUpdateList()
  }, [])

  //filters
  const [categoryFilter, setCategoryFilter] = useState(props.category);
  const [inPromotionFilter, setInPromotionFilter] = useState(props.inPromotion);
  const [promotionPercentMinFilter, setPromotionPercentMinFilter] = useState(0);
  const [spotPriceMaxFilter, setSpotPriceMaxFilter] = useState(0);
  const [spotPriceMinFilter, setSpotPriceMinFilter] = useState(0);
  const [maxInstallmentsInterestFreeMinFilter, setMaxInstallmentsInterestFreeMinFilter] = useState(0);
  const [haveResourcesFilter, setHaveResourcesFilter] = useState(false);
  const [orderPriceFilter, setOrderPriceFilter] = useState('asc');
  const [orderRarityFilter, setOrderRarityFilter] = useState('asc');

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
      order: orderPriceFilter,
      referenceOrder: 'spotPrice'
    }
  }, [orderPriceFilter]);
  useEffect(() => {
    paramsToFilter = {
      ...paramsToFilter,
      order: orderRarityFilter,
      referenceOrder: 'rarity'
    }
  }, [orderRarityFilter]);
  
  
  
  return (
    <div className="flex flex-col justify-center items-center h-fit mt-10 mb-20">
      <div className="mb-6">
        <GenericButton active={activeFilters} text={"Filter"} icon={TiFilter} type="secondary" onClick={() => setActiveFilters(!activeFilters)}/>
      </div>
      {activeFilters && <Filter 
        onChangeOrderPrice={(value) => setOrderPriceFilter(value)}
        onChangeOrderRarity={(value) => setOrderRarityFilter(value)}
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
          return props.category 
            ? product.category === props.category 
              ? <ProductButton
                  key={Math.random().toString()}
                  category={product.category}
                  name={product.name}
                  promotionPercent={product.promotionPercent}
                  spotPrice={product.spotPrice}
                  forwardPrice={product.forwardPrice}
                  maxInstallmentsInterestFree={product.maxInstallmentsInterestFree}
                  image={'data:image/png;base64,' + product.image}
                />
              : <></>
            : <ProductButton
            key={Math.random().toString()}
            category={product.category}
            name={product.name}
            promotionPercent={product.promotionPercent}
            spotPrice={product.spotPrice}
            forwardPrice={product.forwardPrice}
            maxInstallmentsInterestFree={product.maxInstallmentsInterestFree}
            image={'data:image/png;base64,' + product.image}
          />
          return 
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

