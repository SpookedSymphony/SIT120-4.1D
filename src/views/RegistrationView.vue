<script setup>
    import register from '../components/AdminRegister.vue'
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

        <register/>

        <h2>Already registered?</h2>
        <RouterLink to="/login">Login</RouterLink> 

        <Footer/>
    </main>
</template>