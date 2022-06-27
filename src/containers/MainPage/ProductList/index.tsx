import React, { useEffect } from "react";
import { useProductsSlice } from "store/modules/Products/hook";
import { useDispatch, useSelector } from "react-redux";
import { selectData, selectLoading } from "store/modules/Products/selectors";

//style

import { ProductListWrapper } from "./style";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { actions } = useProductsSlice();
  const dispatch = useDispatch();

  const fetchProducts = () => dispatch(actions.fetchDataTrigger());

  const products = useSelector(selectData);
  const isProductLoading = useSelector(selectLoading);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListWrapper>
      {!isProductLoading ? (
        products?.map((item) => <ProductItem products={item} key={item.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </ProductListWrapper>
  );
};

export default ProductList;
