import React, { useEffect, useState } from "react";
import TopBar from "../components/top-bar";
import useWindowDimensions from "../../main/hooks/window-dimensions";
import ListProductsWithFilter from "../components/list-products-with-filter";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import { RootState } from "../../main/store";
import GenericButton from "../../components/generic-button";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import GenericInput from "../../components/generic-input";
import { useAppDispatch } from "../../main/hooks/main-hooks";
import { registationProduct } from "../../domain/usecases/register-product/register-product-slice";
import { ProductRegister } from "../../domain/usecases/register-product/interfaces/register-product-response";
import { RegisterProductRequest } from "../../domain/usecases/register-product/interfaces/register-product-request";

export interface ProductsScreenProperties {
  category?: string;
  inPromotion?: boolean;
}

export default function AccountScreen(
  props: ProductsScreenProperties
): JSX.Element {
  const dispatch = useAppDispatch();
  const [closedModal, setClosedModal] = useState(true);
  const userAccess = useSelector(
    (state: RootState) => state.userAccess.userAccess
  );
  const registredProductStatus = useSelector(
    (state: RootState) => state.registredProduct.status
  );
  const navigation = useNavigate();

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [promotionPercent, setPromotionPercent] = useState(0);
  const [spotPrice, setSpotPrice] = useState(0);
  const [forwardPrice, setForwardPrice] = useState(0);
  const [maxInstallmentsInterestFree, setMaxInstallmentsInterestFree] =
    useState(0);
  const [collectionName, setCollectionName] = useState("");
  const [origin, setOrigin] = useState("");
  const [resources, setResources] = useState("");
  const [rarity, setRarity] = useState(0);
  const [image, setImage] = useState("");

  const handleRegister = () => {
    const newProduct: RegisterProductRequest = {
      category: category,
      name: name,
      promotionPercent: promotionPercent,
      spotPrice: spotPrice,
      forwardPrice: forwardPrice,
      maxInstallmentsInterestFree: maxInstallmentsInterestFree,
      collectionName: collectionName,
      origin: origin,
      resources: resources,
      image: image,
      rarity: rarity,
      header: {
        token: userAccess?.accessToken || '',
      }
    };
    dispatch(registationProduct(newProduct));
    
  };

  useEffect(() => {
    if (!userAccess?.user.email) {
      navigation("/");
    }
  }, []);

  useEffect(() => {
    if (registredProductStatus === 'success') {
      setClosedModal(true);
    }
  }, [registredProductStatus]);

  return (
    <div className="bg-dark overflow-hidden">
      <div
        className="
          flex
          items-center
          justify-center
          flex-col
      ">
        {!closedModal && (
          <div className="fixed w-screen h-screen bg-black/60 backdrop-blur-md  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-col justify-center items-center w-screen h-screen">
              <div className="w-fit h-fit bg-dark rounded-[21px] p-6">
                <div className="absolute flex flex-row h-20 justify-end items-start p-3">
                  <button className="w-128 h-16 -ml-80 flex flex-col justify-center items-center" onClick={() => setClosedModal(true)}>
                    <TiDeleteOutline className="h-12 w-12 text-primary-300" />
                  </button>
                </div>
                <div className="flex flex-col h-[99%] w-fit justify-start items-center p-3">
                  <p className="font-primary text-white text-2xl mb-8">
                    Preencha os dados do produto
                  </p>
                  <div className="flex flex-row justify-center items-start">
                    <div className="flex flex-col justify-center items-center">
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="categoria"
                        titlePosition="topLeft"
                        onChange={(value) => setCategory(value)}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="nome"
                        titlePosition="topLeft"
                        onChange={(value) => setName(value)}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="preço a vista"
                        titlePosition="topLeft"
                        onChange={(value) => setSpotPrice(Number(value))}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="preço parcelado"
                        titlePosition="topLeft"
                        onChange={(value) => setForwardPrice(Number(value))}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="parcela máxima"
                        titlePosition="topLeft"
                        onChange={(value) =>
                          setMaxInstallmentsInterestFree(Number(value))
                        }
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="raridade (0 a 100)"
                        titlePosition="topLeft"
                        onChange={(value) =>
                          setRarity(Number(value))
                        }
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="coleção"
                        titlePosition="topLeft"
                        onChange={(value) => setCollectionName(value)}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="porcentagem de promoção"
                        titlePosition="topLeft"
                        onChange={(value) => setPromotionPercent(Number(value))}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="origem"
                        titlePosition="topLeft"
                        onChange={(value) => setOrigin(value)}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="recursos"
                        titlePosition="topLeft"
                        onChange={(value) => setResources(value)}
                      />
                      <GenericInput
                        type={"text"}
                        characterIndicator="A"
                        title="imagem (base64)"
                        titlePosition="topLeft"
                        onChange={(value) => setImage(value)}
                      />
                    </div>
                  </div>

                  <GenericButton
                    text={"Cadastrar Produto"}
                    variantion={"big"}
                    type={"primary"}
                    onClick={() => handleRegister()}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <TopBar logged={true} />
        <div className="flex flex-row w-screen pl-[18%] pr-[18%]">
          <div className="flex flex-col justify-start items-start w-full">
            <p className="font-primary text-2xl text-primary-300 text-left">
              Usuário de e-mail:
            </p>
            <p className="font-primary text-4xl text-white text-left">
              {userAccess?.user.email}
            </p>
            <p className="font-primary text-xl text-light-gray text-left mt-6">
              Publicados:
            </p>
            <p className="font-primary text-xl text-light-gray text-left">
              Vendidos:
            </p>
            <p className="font-primary text-xl text-light-gray text-left">
              À venda:
            </p>
          </div>
          <div className="flex flex-col justify-start items-end w-full">
            <p className="font-primary text-2xl text-white text-right">
              Valor a receber:
            </p>
            <p className="font-primary text-8xl text-primary-300 text-right">
              R$ 0,00
            </p>
            <GenericButton
              className="mt-5 h-24 w-[500px]"
              text={"Cadastrar novo produto"}
              variantion={"big"}
              onClick={() => setClosedModal(false)}
            />
          </div>
          <div className="flex flex-col justify-start items-start"></div>
        </div>
        <p className="font-primary text-xl text-white text-left mt-20 -mb-6">
          Produtos cadastrados por vê para venda:
        </p>
        <ListProductsWithFilter
          sellerUserId={userAccess?.user.id}
          category={props.category}
          inPromotion={props.inPromotion}
        />
        <Footer />
      </div>
    </div>
  );
}

