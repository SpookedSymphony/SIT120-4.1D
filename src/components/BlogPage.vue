<script setup>
    import { computed, ref, watchEffect } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'

    import CreateBlog from './CreateBlog.vue'
    import hideButton from './hideButton.vue'

    const isAdmin = computed(() => {
        const isAdminValue = localStorage.getItem('isAdmin') === 'true';
        console.log('isAdmin:', isAdminValue);
        return isAdminValue;
    }); 

    const posts = ref([]);

    function createPost(newPost) {
        posts.value.push(newPost);
        updateLocalStoragePosts();
    }

    function getPostsFromLocalStorage() {
        const storedPosts = localStorage.getItem('posts');
        return storedPosts ? JSON.parse(storedPosts) : [];
    }

    function updateLocalStoragePosts() {
        localStorage.setItem('posts', JSON.stringify(posts.value));
    }

    posts.value = getPostsFromLocalStorage();

    watchEffect(() => {
        updateLocalStoragePosts();
    });


</script>

<style scoped>
    hr {
        display: block;
        unicode-bidi: isolate;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: auto;
        margin-inline-end: auto;
        overflow: hidden;
        border-style: inset;
        border-width: 1px;
        }

    li {
        text-align: center;
        padding-left: 0;
        background-color: white;
        color: Black;
    }

    li:before {
        content: '';
        float: left;
        height: 30px;
        width: 30px;
        background-image: url("@/assets/newlogo.png");
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: -40px;  
    }

    h2,
    a {
        display: flex;
        justify-content: center;
        margin: auto !important;
        color: teal;
    }

</style>

<template>
    <main>
        <div v-if="isAdmin">
            <h1>Admin Dashboard</h1>
            <div>
                <hideButton buttonText="Toggle Create Post">
                        <CreateBlog @createPost="createPost" />
                </hideButton>
            </div>
        </div>
        <div v-else>
            <h2>Login to create posts:</h2>
            <RouterLink to="/login">Login</RouterLink> 
        </div>
        <div>
            <h1>Welcome to the Blog</h1>
            <div>
                <h2>List of Blog Posts</h2>
                    <ul> 
                    <li v-for="(post, index) in posts" :key="post.index">
                        {{ post.title }}
                         <RouterLink :to="{name: 'post-detail', params: {index: index}}">
                            View this post 
                        </RouterLink>                    
                     <hr> 
                    </li>
                     </ul> 
            </div>
        </div>
    </main>
  </template>
  
