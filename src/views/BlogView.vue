<script setup>
    import blog from '../components/BlogPage.vue'
    import Footer from '../components/Footer.vue'
</script>

<style scoped>

    h2,
    a {
        display: flex;
        justify-content: center;
        margin: auto !important;
        float: center;
        width: 250px;
    }

</style>

<template>
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <blog/>
        <Footer/>
    </main>
</template>