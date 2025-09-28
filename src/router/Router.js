import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductDetail from "../views/ProductDetail.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutSuccess from "../views/CheckoutSuccessPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/product/:id", component: ProductDetail, ProductDetail },
  { path: "/cart", component: CartPage },
  { path: "/checkout-success", component: CheckoutSuccess },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});
