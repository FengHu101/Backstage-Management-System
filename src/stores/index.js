import { defineStore } from "pinia";
import { ref } from "vue";

function initState() {
  return {
    isCollapse: false,
  };
}

export const useAllDataStore = defineStore("allData", () => {
  const state = ref(initState());

  // Action to toggle the collapse state
  const toggleCollapse = () => {
    state.value.isCollapse = !state.value.isCollapse;
  };

  return { state, toggleCollapse };
});
