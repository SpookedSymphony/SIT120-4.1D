<script setup>
  import AboutVideo from '../components/AboutVideo.vue';
  import Footer from '../components/Footer.vue'
  import myMap from '../components/map.vue'
  import founders from '../components/canvas.vue'
  import '@/assets/column.css';
</script>

<style scoped>
  img { /* class for centering content */
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
</style>

<template>
  <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <div class="row">
      <AboutVideo/> <!-- YouTube Video Component-->
      <founders/> <!-- Canvas Heading Component-->
      <section> <!-- First Founder Info-->
        <div class="col-1">
          <img src='@/assets/study.jpg' alt="study" style="width:250px;height:200px;">
          <p>My name is Amelia Schultz and I'm currently studying my first year Bachelor's degree in information technology. The major which I have selected is cyber security however I also enjoy other aspects of I.T. such as web development.</p>
        </div>
      </section>
      <section> <!-- Second Founder Info-->
        <div class="col-2">
          <img src='@/assets/cat.jpg' alt="cat" style="width:250px;height:200px;">
          <p>The activities which I enjoy doing in my down-time include playing video games and baking tasty treats! I also enjoy playing with my cat Huggy, and my dog Daisy. </p>
        </div>
      </section>
      <myMap/> <!-- Google Maps Embed Component -->
    </div>
    <Footer/> <!-- Footer Component -->
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
