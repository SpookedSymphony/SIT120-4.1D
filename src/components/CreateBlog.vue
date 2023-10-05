<script setup>
import { ref } from 'vue';

const { createPost } = defineProps(['createPost']);
const emits = defineEmits(['createPost']);

const newPost = ref({
  title: '',
  body: '',
});

function savePostsToLocalStorage(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function handleSubmit() {
  if (newPost.value.title.trim() === '' || newPost.value.body.trim() === '') {
    return;
  }
  console.log('Emitting createPost event', newPost.value);
  emits('createPost', { ...newPost.value });

  savePostsToLocalStorage();

  newPost.value = { title: '', body: '' };
}
</script>

<style scoped>

    button,
    label,
    input,
    textarea,
    h2 {
        display: flex;
        justify-content: center;
        margin: auto !important;
        float: center;
        width: 250px;
    }
</style>

<template>
    <div>
      <h2 style="color: teal;">Create a New Blog Post</h2>
        <form @submit.prevent="handleSubmit">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="newPost.title" required />
          <br />
    
          <label for="body">Body:</label>
          <textarea id="body" v-model="newPost.body" required></textarea>
          <br />
          <button type="submit">Create Post</button>

        </form>
    </div>
</template>
  