import React, { useMemo } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./style.scss";
import nike from "./nike.png";
import checkIcon from "./check.png";
import minus from "./minus.png";
import plus from "./plus.png";
import trash from "./trash.png";
import { useQuery, useMutation } from "react-query";
import {
  findAll,
  getAllProductInCart,
  addToCart,
  removeFromCart,
  changeQuantity,
} from "../../apis/product.api";

function App() {

  // const [ total, setTotal ] = useState(0);

  const { data: dataProduct, refetch: refetchProduct } = useQuery(
    ["data-product"],
    findAll,
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  const { data: dataProductInCart, refetch: refetchProductInCart } = useQuery(
    ["data-product-in-cart"],
    getAllProductInCart,
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  const total = useMemo(() => {
    return dataProductInCart?.data?.reduce(
      (sum, product) => sum + ((product?.price ?? 0) * product?.count),
      0
    );
  }, [dataProductInCart?.data]);

  const { mutate: mutateAddToCart } = useMutation(addToCart);
  const { mutate: mutateRemoveFromCart } = useMutation(removeFromCart);
  const { mutate: mutateChangeQuantity } = useMutation(changeQuantity);

  const onAddToProduct = (productId) => {
    const obj = {
      id: productId,
    };

    mutateAddToCart(obj, {
      onSuccess: () => {
        refetchProduct();
        refetchProductInCart();
      },
      onError: (error) => {
        console.log("🚀 ~ error:", error);
      },
    });
  };

  const onRemoveFromCart = (productId) => {
    const obj = {
      id: productId,
    };

    mutateRemoveFromCart(obj, {
      onSuccess: () => {
        refetchProduct();
        refetchProductInCart();
      },
      onError: (error) => {
        console.log("🚀 ~ error:", error);
      },
    });
  };

  const onChangQuantity = (productId, optionChoice) => {
    const obj = {
      id: productId,
      option: optionChoice,
    };

    mutateChangeQuantity(obj, {
      onSuccess: () => {
        refetchProduct();
        refetchProductInCart();
      },
      onError: (error) => {
        console.log("🚀 ~ error:", error);
      },
    });
  };

  const header = (image, color) => {
    return <img alt="Card" src={image} style={{ background: `${color}` }} />;
  };

  const footer = (price, inCart, product) => (
    <>
      <div className="flex footer-style-card">
        <h2>${price}</h2>
        {!inCart ? (
          <Button
            label="Add to cart"
            className="btn-add-to-cart"
            onClick={() => onAddToProduct(product)}
          />
        ) : (
          <Button
            icon={
              <img style={{ height: "40px" }} src={checkIcon} alt="check" />
            }
            className="already-btn-add-to-cart"
          />
        )}
      </div>
    </>
  );

  return (
    <div className="background">
      <div className="hide-scrollbar-card">
        <img className="nike-img" src={nike} alt="nike" />
        <h1>Our products</h1>
        <div className="out-card">
          {dataProduct?.data?.map((product) => {
            return (
              <Card
                key={product?.id}
                id={product?.id}
                title={product?.name}
                footer={() =>
                  footer(product?.price, product?.inCart, product?.id)
                }
                header={() => header(product?.image, product?.color)}
                className="w-25rem custom-card"
              >
                <p className="m-0">{product?.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* seccond card */}
      <div className="hide-scrollbar-card">
        <img className="nike-img" src={nike} alt="nike" />
        <div className="flex justify-content-between">
          <h1>Your cart</h1>
          <h1>${total?.toFixed(2)}</h1>
        </div>
        <div className="out-card">
          {dataProductInCart?.data?.length === 0 && (
            <span>Your cart is empty</span>
          )}
          {dataProductInCart?.data?.map((product) => {
            return (
              <div key={product?.id} id={product?.id} className="item-in-cart">
                <div
                  className="circle-cart"
                  style={{ background: `${product?.color}` }}
                >
                  <img src={product?.image} alt={product?.id} />
                </div>
                <div className="item-in-cart-content">
                  <h3>{product?.name}</h3>
                  <h2>${product?.price}</h2>
                  <div className="button-box">
                    {/*calculate button*/}
                    <div className="button-box-start">
                      <Button
                        icon={
                          <img
                            style={{ height: "15px", width: "15px" }}
                            src={minus}
                            alt="minus"
                          />
                        }
                        className="btn-calculate"
                        onClick={() => onChangQuantity(product?.id, false)}
                      />
                      <span
                        style={{
                          fontSize: "20px",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                      >
                        {product?.count}
                      </span>
                      <Button
                        icon={
                          <img
                            style={{ height: "15px", width: "15px" }}
                            src={plus}
                            alt="plus"
                          />
                        }
                        className="btn-calculate"
                        onClick={() => onChangQuantity(product?.id, true)}
                      />
                    </div>
                    {/*trash button*/}
                    <div>
                      <Button
                        icon={
                          <img
                            style={{ height: "17px", width: "17px" }}
                            src={trash}
                            alt="trash"
                          />
                        }
                        className="btn-trash"
                        onClick={() => onRemoveFromCart(product?.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
