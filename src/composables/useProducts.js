import { ref, onMounted } from "vue";
import { fetchProducts } from "../services/api";

export function useProducts() {
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);

  onMounted(async () => {
    try {
      products.value = await fetchProducts();
    } catch (err) {
      error.value = err.message || "Unknown error";
    } finally {
      loading.value = false;
    }
  });

  return { products, loading, error };
}
