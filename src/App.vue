<script setup>
import { RouterLink, RouterView } from 'vue-router'

import sidebar from './components/Sidebar.vue'
</script>

<template>
  <header>
    <sidebar/>
  </header>
  
  <RouterView v-slot="{Component}">
    <Transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

</template>

<style scoped>

.page-opactity-enter-active,
.page-opactity-active {
  transition: 600ms ease all;
}

.page-opactity-enter,
.page-opactity-leave-to {
  opacity: 0;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0 ;
  transform: translateY(60px);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 2rem 0 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
