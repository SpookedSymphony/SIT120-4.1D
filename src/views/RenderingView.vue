<script setup>
import { ref, reactive,} from 'vue'
import Footer from '../components/Footer.vue'

// Variables for conditional rendering
const myServices = reactive({
    1: 'Web Application Creation',
    2: 'UX Design',
    3: 'Database Creation'
  })

const Days = ["Monday, ", "Tuesday, ", "Wednesday, ", "Thursday"]
</script>

<style scoped>
    li { /* Styling for list items */
        color: teal;
        font-size: 20px;
        padding: 5px;
        list-style: square;
    }

    .centered { /* Class to center items */
        display: flex;
        justify-content: center;
    }
</style>

<template>
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <div class="centered">
            <ul>
                <h1 style="color:darksalmon;">Services I Offer</h1> 
                <li v-for="(value, key) in myServices" :key="key"> <!-- Displays items in the services object -->
                {{key}}: {{ value }}
                </li>
            </ul>
        </div><br>
        <div class="centered">
            <h4 style="padding-right: 10px;">Days available:</h4> 
            <template 
                v-for="day in Days">{{ day }} <!-- Displays items in the days array -->
            </template>
        </div>
        <br>

        <Footer/> <!-- Footer component -->
    </main>
</template>