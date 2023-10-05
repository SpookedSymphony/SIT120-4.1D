import { ref, computed } from 'vue';

export const collapsed = ref(true);

export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export let sHeight = ref(window.Height);

export const sHeightCollapsed = 50;

export const sidebarHeight = computed(() => `${collapsed.value ? sHeightCollapsed : sHeight}px`);

export function updateSidebarHeightOnResize() {
  sHeight = window.innerHeight;
}

