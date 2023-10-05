<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { collapsed, toggleSidebar, sidebarHeight, updateSidebarHeightOnResize } from '../assets/sidebar';

export default {
  props: {},
  setup() {

    function initializeSidebarHeight() {
    updateSidebarHeightOnResize();
    }

    onMounted(() => {
      initializeSidebarHeight();
      window.addEventListener('resize', updateSidebarHeightOnResize);
      document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
          collapsed.value = true;
        } else {
          collapsed.value = false;
        }
        updateSidebarHeightOnResize();
      });
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateSidebarHeightOnResize);
        document.removeEventListener('fullscreenchange', updateSidebarHeightOnResize);

    });

    return { collapsed, toggleSidebar, sidebarHeight };
  },
};
</script>

<style>
:root {
    --sidebar-bg-color: rgba(104, 104, 104, 0.288);
}

.collapse-icon {
    position: absolute;
    top: 0;
    padding: 0.75em;
    transition: 0.2s;
}

.collapse-icon:hover {
    scale: 140%;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    
    float: left;

    position: fixed;
    position: left;

    z-index: 1;
    top: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.5s ease;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.link-opactity-enter-active,
.link-opactity-active {
  transition: 600ms ease all;
}

.link-opactity-enter,
.link-opactity-leave-to {
  opacity: 0;
}

.link-slide-enter-active,
.link-slide-leave-active {
  transition: 400ms ease all;
}

.link-slide-enter-from,
.link-slide-leave-to {
  opacity: 0 ;
  transform: translateY(60px);
}

@media (max-height: 500px) {
  a {
    font-size: 18px;
    padding: 0 !important;
  }
}
@media (min-height: 600px) {
  a {
    padding: 3px !important;
  }
}
@media (min-height: 800px) {
  a {
    padding: 10px !important;
  }
}
@media (min-height: 900px) {
  a {
    padding: 18px !important;
  }
}

a:hover {
    background-color: rgb(233, 150, 122, 0.5);
    color: White;
    scale: 120%;
}
</style>

<template>
    <div>
    <div class="sidebar" :style="{height: sidebarHeight}">
        <span class="collapse-icon" :class="{'rotate-180':!collapsed}" @click="toggleSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"/></svg>        
        </span>
        <h1 style="font-size: 20px">
            <span v-if="collapsed">
                <div style="margin-left: 40px; margin-right: 40px">NAVIGATION</div>
            </span>
            <span v-else>
            <span style="margin-left: 40px; margin-right: 40px">NAVIGATION</span>
                <header>
        
                    <img alt="logo" class="logo" src="@/assets/newlogo.png" width="125" height="125" />

                    <div class="wrapper">
                    <nav class="sidebar-nav" :class="{'link-slide' : !collapsed}">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/about">About</RouterLink>
                        <RouterLink to="/feedback">Contact Us</RouterLink>
                        <RouterLink to="/todo">Demo</RouterLink>
                        <RouterLink to="/services">Services</RouterLink>
                        <RouterLink to="/projects">Projects</RouterLink>
                        <RouterLink to="/register">Register</RouterLink>
                        <RouterLink to="/login">Login</RouterLink>
                        <RouterLink to="/resume">Resume</RouterLink>
                        <RouterLink to="/blog">Blog</RouterLink>
                        
                    </nav>
                    </div>
                </header>
            </span>
        </h1>
    </div>
    </div>
</template>