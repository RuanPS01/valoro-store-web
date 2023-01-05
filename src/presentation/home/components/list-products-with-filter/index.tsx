import React from "react";
import GenericButton from "../../../../components/generic-button";
import { TiFilter } from "react-icons/ti";
import ProductButton from "../../../../components/product-button";
import TacticalKnife from '../../../../assets/images/TacticalKnife.webp';
import { TiPlus } from "react-icons/ti";
import useWindowDimensions from "../../../../hooks/window-dimensions";
import Filter from "../../../../components/filter";

export interface ListProductsWithFilterProperties {
  categories?: string[];
  inPromotion?: boolean;
  promotionPercentMin?: number;
  spotPriceMax?: number;
  spotPriceMin?: number;
  forwardPriceMax?: number;
  forwardPriceMin?: number;
  maxInstallmentsInterestFreeMin?: number;
  collection?: string;
  origin?: string;
  haveResources?: boolean
}

export interface LeftButtonrProperties {
  leftButtonText?: string;
  leftButtonAction?: string;
  leftButtonType?: string;
}
export interface RightButtonrProperties {
  rightButtonText?: string;
  rightButtonAction?: string;
  rightButtonType?: string;
}

export default function ListProductsWithFilter(
  props: ListProductsWithFilterProperties | LeftButtonrProperties | RightButtonrProperties): JSX.Element {
  const { width } = useWindowDimensions();
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  return (
    <div className="flex flex-col justify-center items-center h-fit mt-10 mb-20">
      <div className="mb-6">
        <GenericButton active={true} text={"Filter"} icon={TiFilter} type="secondary" />
      </div>
      <Filter />
      
      <div className={`grid ${width < 800 ? 'grid-cols-2 gap-3' : 'grid-cols-7 gap-4'} gap-4`}>
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
        <ProductButton
          category={"Melee"}
          name={"Tatical Knife"}
          promotionPercent={50}
          spotPrice={289}
          forwardPrice={300}
          maxInstallmentsInterestFree={12}
          image={TacticalKnife}
        />
      </div>
      <div className="flex justify-between items-center w-full mt-10">
        <GenericButton text={"tentar a sorte"} type={"secondary"}/>
        <GenericButton text={"ver mais"} icon={TiPlus} type={"secondary"}/>
        <GenericButton text={"voltar ao topo"} type={"secondary"} onClick={scrollTop} />
      </div>
    </div>
  );
}

