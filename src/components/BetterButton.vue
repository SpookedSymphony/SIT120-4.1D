<script setup>
    function say(message) { 
    alert(message)
  }
</script>

<style scoped>
    .better {
        font: italic;
        color: white;
        background: linear-gradient(160deg, darksalmon 10%, teal);
        border: none;
        border-radius: 15px;
        padding: 5px;
        box-shadow: 0 9px lightblue;
        cursor: pointer;
    }
    
    .better:active {
        background: slategray !important;
        box-shadow: 0 5px white;
        transform: translateY(4px);
    }

</style>

<template>
    <button class="better" @click="say('Validation in progress...')">
        <slot/>
    </button>
</template>