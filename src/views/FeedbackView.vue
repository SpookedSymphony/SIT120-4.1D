<script setup>
    import Footer from '../components/Footer.vue'
    import BetterButton from '../components/BetterButton.vue';
    import { ref } from 'vue'
    import '@/assets/style.css';
  
    /* Variables for v-models */
    const messagea = ref(''); 
    const messageb = ref(''); 
    const checked = ref(true);

    /*Validation*/
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('feedback').addEventListener('submit', function(event) {
            if (!isValid()) {
            event.preventDefault();
            }
        });
    });

    function isValid() {
        if (messagea.value === '') {
            alert('Please enter your name.');
            return false;
         }
        if (messageb.value === '') {
            alert('Please enter your email.');
            return false;
        }
        return true; 
        }
            

</script>

<template>
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <h1>Contact Me</h1> 
        <div class="centered-container">
            <form id="feedback" action="/submit" method="post"> 
                <h4>Please enter your name:</h4>
                <input v-model.trim="messagea" type="text" placeholder="Jane Doe" required/>
                <p>Thank you! Your name is... <br>{{ messagea }}</p>

                <h4>Please enter your email:</h4>
                <input v-model.trim="messageb" type="email" placeholder="email@email.com" required/>
                <p>Thank you! Your email is... <br>{{ messageb }}</p> <br>

                <h4>Do you want promotions?</h4>
                <input type="checkbox" id="promo" value="yes" v-model="checked"/>
                <label for promo>Yes</label>
                <p>Thank you! You have selected: <br>{{ checked }}</p> <br>

                <h4>Please enter your question:</h4>
                <textarea required style="resize:none;"></textarea>

                <BetterButton> <!-- Submission button & pop-up -->
                    Submit
                </BetterButton>
            </form>
        </div>
        <Footer/> <!-- Footer Component -->
    </main>
</template>
