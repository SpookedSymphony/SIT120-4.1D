<script setup>
    import {computed, ref } from 'vue';
    import router from "@/router";

    import Footer from '../components/Footer.vue';

   function getPostsFromLocalStorage() {
      const storedPosts = localStorage.getItem('posts');
      return storedPosts ? JSON.parse(storedPosts) : [];
 }

    const { index } = defineProps(['index']);
    const emits = defineEmits(['postDeleted']);

    const posts = ref(getPostsFromLocalStorage());

    const selectedPost = computed(() => {
        return posts.value[index];
    });

    const isAdmin = computed(() => {
            const isAdminValue = localStorage.getItem('isAdmin') === 'true';
            console.log('isAdmin:', isAdminValue);
            return isAdminValue;
        }); 
        
    console.log(index);

    function editPost() {
    if (selectedPost) {
        router.push({ name: 'edit-post', params: { index } });
        }
    }

    function updateLocalStoragePosts() {
        localStorage.setItem('posts', JSON.stringify(posts.value));
    }
    
    function deletePost(index) {
        const deletedPost = posts.value.splice(index, 1)[0];
        updateLocalStoragePosts();
        emits('postDeleted', deletedPost); 
        router.push({ path: '/blog'});
    }

</script>

    <style scoped>

        p {
            font-size: 16px;
        }

</style>

<template>
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <h1 v-if="selectedPost">{{ selectedPost.title }}</h1>
        <p v-if="selectedPost">{{ selectedPost.body }}</p>
        <p v-else>No post found (Index: {{ index }})</p>
        <div v-if="isAdmin">
            <button @click="editPost">Edit Post</button>
            <button @click="deletePost(index)">Delete Post</button> 
        </div>
        <Footer />
    </div>
</template>
