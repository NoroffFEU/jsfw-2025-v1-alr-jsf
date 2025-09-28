import { ref, computed } from "vue";

export function useProductSearch(initialProducts = ref([])) {
  const searchQuery = ref("");
  const sortOption = ref("name-asc");

  const filteredProducts = computed(() => {
    let list = initialProducts.value;

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }

    switch (sortOption.value) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name-desc":
        list = [...list].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  });

  return { searchQuery, sortOption, filteredProducts };
}
