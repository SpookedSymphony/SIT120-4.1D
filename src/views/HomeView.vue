<script setup>
  import { ref } from 'vue'
  import Header from '../components/Header.vue' 
  import Footer from '../components/Footer.vue'
  import chatbot from '../components/chatbot.vue'
  import '@/assets/style.css';


  // Variables for interpolation
  const html = '<h1 style="color: teal";> Welcome to My Portfolio </h1>'
  const begin = 'Where'; 
  const here = 'Next?';

  // Variables for style binding
  const font = ref(25); 
  const align = ref('center');
</script>

<style scoped>
  .audio-centered { /* class to center audio player */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <Header/> <!-- Header component -->
    <chatbot/> <!-- Chatbot component -->

    <span v-html="html"></span> <!-- interpolation headings -->
   
    <div 
    class="spanned" 
    :style="{fontSize: font + 'px', textAlign: align}">
      <span>{{ begin + ' ' + here }}</span> 
    </div>

    <p style="padding:30px; font-size: 20px"> Click on one of the links on the navigation panel to learn more about me and explore what I can do! 
  </p> <br>

  <!-- Audio player -->
  <div class=audio-centered>
    <audio controls autoplay muted>
      <source src='@/assets/beat.mp3' type="audio/mpeg">
    </audio>
  </div>

  <Footer/> <!-- Footer component -->

  </main>
</template>
