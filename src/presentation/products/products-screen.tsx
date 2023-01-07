import React, { useEffect, useState } from "react";
import TopBar from "../components/top-bar";
import useWindowDimensions from "../../main/hooks/window-dimensions";
import ListProductsWithFilter from "../components/list-products-with-filter";
import Footer from "../components/footer";

export interface ProductsScreenProperties {
  category?: string;
  inPromotion?: boolean;
}

export default function ProductsScreen(props: ProductsScreenProperties): JSX.Element {
  const queryParameters = new URLSearchParams(window.location.search);
  const categoryQuery = queryParameters.get("category");
  const inPromotionQuery = queryParameters.get("inPromotion") ? true : props.inPromotion;
  
  const [category, setCategory] = useState('');
  const [inPromotion, setInPromotion] = useState();

  useEffect(() => {
    setCategory(categoryQuery ?? '');
    setInPromotion(inPromotion);
  }, []);
  
  return (
    <div className="bg-dark overflow-hidden">
      <div className="
          flex
          items-center
          justify-center
          flex-col
      ">
        <TopBar logged={true} />
        <ListProductsWithFilter category={category} inPromotion={inPromotion} />
        <Footer />
      </div>
    </div>
  );
}
