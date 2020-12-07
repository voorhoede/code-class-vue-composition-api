<template>
  <div>
    <h1>Exercise 4</h1>
    <router-link :to="{ name: 'Exercise4' }">Back to exercise</router-link>
    <div>
      <label>
        Search
        <input type="search" v-model="searchQuery"/>
      </label>
      <label>
        Sort by
        <select v-model="activeSortingOption">
          <option
            v-for="sortingOption in availableSortingOptions"
            :key="sortingOption"
            :value="sortingOption"
          >{{ sortingOption }}</option>
        </select>
      </label>
      <ul class="list">
        <li v-for="brand in sortedBrands" :key="brand">{{ brand }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref, computed } from 'vue';

  export default {
    setup() {
      const brands = [
        'adidas Originals',
        'America Today',
        'Antony Morato',
        'ASICS',
        'Birkenstock',
        'Bjorn Borg',
        'Calvin Klein',
        'Clarks',
        'Converse',
        'Cowboysbag',
        'Desigual',
        'Diesel',
        'Dr. Martens',
        'Eastpak',
        'Ecco',
        'Esprit',
        'Expresso',
        'G-star',
        'Gaastra',
        'Gabor',
        'Guess',
        'Havaianas',
        'Hunkemoller',
        'Jack and Jones',
        'Kappa',
        'King Louie',
        'Lauren Ralph Lauren',
        'Levi\'s®',
        'Marco Polo',
        'Michael Kors',
        'New Balance',
        'New Look',
        'Nike',
        'Noppies',
        'Only',
        'Paprika',
        'Pieces',
        'Puma',
        'Ray Ban',
        'Reebok',
        'Scotch and Soda',
        'Skechers',
        'Superdry',
        'Supertrash',
        'Tamaris',
        'Ted Baker',
        'The North face',
        'Think',
        'TOM TAILOR',
        'Tommy Hilfiger',
        'Topman',
        'Topshop',
        'Tumble \'n Dry',
        'Vans',
        'Wood Wood',
        'Yoek',
      ]

      const { searchQuery, filteredBrands } = useSearch(brands)
      const {
        availableSortingOptions,
        activeSortingOption,
        sortedBrands
      } = useSorting(filteredBrands)
      
      return {
        searchQuery,
        availableSortingOptions,
        activeSortingOption,
        sortedBrands,
      }
    }
  }

  function useSearch(brands) {
    const searchQuery = ref('')
    const filteredBrands = computed(() => {
      const searchRegex = new RegExp(searchQuery.value, 'gi');
      return brands.filter((brand) => brand.match(searchRegex))
    })

    return { searchQuery, filteredBrands }
  }

  function useSorting(brands) {
    const availableSortingOptions = [
      'Length ascending',
      'Length descending',
      'Alphabetical ascending',
      'Alphabetical descending'
    ]
    const activeSortingOption = ref(availableSortingOptions[0])
    const sortedBrands = computed(() => {
      return sortBrands(brands.value, activeSortingOption.value)
    })

    return {
      availableSortingOptions,
      activeSortingOption,
      sortedBrands,
    }
  }

  function sortBrands(brands, sortingOption) {
    switch (sortingOption) {
      case ('Length ascending'): {
        return brands.sort((a, b) => a.length - b.length)
      }
      case ('Length descending'): {
        return brands.sort((a, b) => b.length - a.length)
      }
      case ('Alphabetical ascending'): {
        return brands.sort((a, b) => a.localeCompare(b))
      }
      case ('Alphabetical descending'): {
        return brands.sort((a, b) => b.localeCompare(a))
      }
      default: {
        return brands
      }
    }
  }
</script>

<style>
  .list {
    margin: 0 auto;
    margin-top: 4rem;
    text-align: left;
    width: min-content;
  }
</style>
