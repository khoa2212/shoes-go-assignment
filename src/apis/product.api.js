import instance from '../utils/axios/instance.axios';
import { PRODUCTS } from './_constant';

export const findAll = () => instance.get(PRODUCTS.GET);
export const getAllProductInCart = () => instance.get(PRODUCTS.GET_CART_PRODUCT);
export const addToCart = (data = {}) => instance.patch(PRODUCTS.ADD_TO_CART, data);
export const removeFromCart = (data = {}) => instance.patch(PRODUCTS.REMOVE_FROM_CART, data);
export const changeQuantity = (data = {}) => instance.patch(PRODUCTS.CHANGE_QUANTITY, data);