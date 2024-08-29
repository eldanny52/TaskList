<template>
<div>
    <h2>Task List</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addNewTask">
    <button @click="addNewTask">Add Task</button>

    <ul>
        <li v-for="(task, index) in tareas":key="index">
            {{ task }} <button @click="deleteTask(index)">Delete</button>
        </li>
    </ul>
</div>
</template>

<script setup>
import {ref} from 'vue';

const tareas = ref([]);
const nuevaTarea = ref('');

const addNewTask = () =>{
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}

const deleteTask = (index)=>{
    tareas.value.splice(index, 1);
}

const ShowTask = () =>{
    const taskContainer = document.getElementById('taskContainer');
    
    while(taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild);
    }

    tareas.value.map(task =>{
        const newTaskLI = document.createElement('LI');
        newTaskLI.innerText = task;
        taskContainer.appendChild(newTaskLI);
    })
}
</script>
<style scoped>

</style>