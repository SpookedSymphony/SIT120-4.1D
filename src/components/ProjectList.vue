<template>
    <main>
        <div>
      <h1>Project Details</h1>
            <ul>
                <li v-for="project in projects" :key="project.id">
                    <h2> {{ project.title }}</h2>
                    <p> {{ project.details }}</p>
                </li>
            </ul>
        </div>
    </main>
</template>
  
<script>
    export default {
        data() {
            return {
                projects: []
            }
        },
        mounted() {
        console.log('Component mounted');
        fetch('./projects.json')
            .then(res => res.json())
            .then (data => this.projects = data.projects)
            .catch(err => console.log(err.message))
        }
    }
</script>
  