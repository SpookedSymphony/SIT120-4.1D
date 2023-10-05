<script setup>
    import { ref } from 'vue';

    const isVisible = ref(true);

    const toggleVisibility = () => {
        isVisible.value = !isVisible.value;
    };

    const props = defineProps({
        buttonText: {
            type: String,
            default: 'Toggle'
        }
    });
</script>

<style scoped>

    button {
        display: flex;
        justify-content: center;
        margin: auto !important;
        float: center;
        width: 250px;
    }

</style>

<template>
    <div>
      <button @click="toggleVisibility">{{ buttonText }}</button>
      <div v-if="isVisible">
        <slot></slot>
      </div>
    </div>
  </template>