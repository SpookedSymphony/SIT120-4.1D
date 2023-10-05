<script setup>
    import {ref, computed, watch} from 'vue'

    import Footer from '../components/Footer.vue'
    import ToDo from '../components/Todo.vue'
    import Video from '../components/TodoVideo.vue'
    import '@/assets/ToDo.css';

    components: { //declaration of components 
        Footer,
        ToDo,
        Video
    }

    //Variables for todo list
    const newTodoText = ref('')
    const todos = ref([
    {
        id: 1,
        title: 'Think of a task'
    }
    ])

    let nextTodoId = 2

    //function to add new tasks
    function addNewTodo() {
    todos.value.push({
        id: nextTodoId++,
        title: newTodoText.value
    })
    newTodoText.value = ''
    }

    //computation for how many tasks (0 or >0)
    const amount = computed(() => {
        return todos.value.length > 0? 'Yes' : 'No'
    })

    //watcher to log task activity
    watch(amount, (newValue, oldValue) => {
        console.log(`The ongoing tasks status have changed from ${oldValue} to ${newValue}`);
    });

    //automatically focuses with v-focus
    const vFocus = {
        mounted: (el) => el.focus()
    }
</script>

<template>
    <main>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <h1 style="font-size: 45px;">See What I Can Do For You!</h1>

        <Video/> <!-- Video component -->
        
        <div class="centered">
            <span style="color:darksalmon;">Do you have incomplete tasks: {{ amount }}</span>
        </div>
        <div class="centered">
            <form v-on:submit.prevent="addNewTodo"> 
                <label for="new-todo">Add a Task!</label>
                <input required v-focus v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat"/>
                <button style="display: block; margin: auto; margin-top: 10px; margin-bottom: 10px; width: 75px;">Add</button>
            </form>
        </div>
        <div class="centered">
            <ul class="todo-list">
                <ToDo
                    v-for="(todo, index) in todos" 
                    :key="todo.id" 
                    :title="todo.title" 
                    @remove="todos.splice(index, 1)"
                ></ToDo>
            </ul>
        </div>

        <Footer/>
    </main>
</template>