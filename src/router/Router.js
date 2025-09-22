import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutSuccess from "../views/CheckoutSuccess.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/product/:id", component: ProductDetail, props: true },
  { path: "/cart", component: CartPage },
  { path: "/checkout-success", component: CheckoutSuccess },
  { path: "/contact", component: Contact },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
