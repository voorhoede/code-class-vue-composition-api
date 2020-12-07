<template>
  <div class="exercise-4">
    <h1>Exercise 4</h1>
    <router-link :to="{ name: 'Exercise4Answer' }">See answer</router-link>
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
      
      /**
       * @TODO:
       * 1. Modify `useSearch` to make `filteredBrands` a computed property,
       *    returning only the brands matching the searchQuery.
       *    Be aware that the returned `filteredBrands` isn't used initially ;)
       * 2. Modify `useSearch` to make `sortedBrands` a computed property,
       *    returning the brands sorted by the `activeSortingOption`
       * 3. Make the two composition functions work together:
       *    the result of the one should be the input for the other.
       */

      const { searchQuery, filteredBrands } = useSearch(brands)
      const {
        availableSortingOptions,
        activeSortingOption,
        sortedBrands
      } = useSorting(brands)
      
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
    // Be aware of the fact `searchRegex` isn't reactive outside of the `computed` callback.
    const searchRegex = new RegExp(searchQuery.value, 'gi');
    const filteredBrands = brands;

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
    // make use of the sortBrands function
    const sortedBrands = brands

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
