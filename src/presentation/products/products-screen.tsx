import React, { useState } from "react";
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
  const category = queryParameters.get("category");
  const inPromotion = queryParameters.get("inPromotion") ? true : props.inPromotion;
  return (
    <div className="bg-dark overflow-hidden">
      <div className="
          flex
          items-center
          justify-center
          flex-col
      ">
        <TopBar logged={true} />
        <ListProductsWithFilter category={category || props.category} inPromotion={inPromotion} />
        <Footer />
      </div>
    </div>
  );
}
