<script setup>
  import { computed, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  const { index } = useRoute().params;
  const router = useRouter();
  
  const posts = ref(getPostsFromLocalStorage());
  
  const selectedPost = computed(() => {
    return posts.value[index];
  });
  

  function getPostsFromLocalStorage() {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  }
  

  function updatePost() {
  if (selectedPost) {
    localStorage.setItem('posts', JSON.stringify(posts.value));
    router.push({ name: 'post-detail', params: { index } });
    }
  }


</script>

<style scoped>
  textarea {
    width: auto !important;
    height: 500px !important;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
</style>

<template>
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <h1>Edit Post</h1>
      <form @submit.prevent="updatePost">
        <span>{{ selectedPost.title }}</span>
        <textarea v-model="selectedPost.body" rows="20" cols="80"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
</template>
  
  
  