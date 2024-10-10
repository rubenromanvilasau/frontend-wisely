<script setup>
import { createTask } from '../services/tasks.service.js'
import { ref } from 'vue'

const props = defineProps({
  updateTasks: {
    type: Function,
    required: true
  }
})
const newTask = ref('')

const addNewTask = async () => {
  try {
    await createTask(newTask.value, 1) //TODO GET USER
    newTask.value = ''
    props.updateTasks()
  } catch (error) {
    console.log('Error creating task:', error.response)
  }
}
</script>
<template>
  <input
    type="text"
    v-model="newTask"
    v-on:keyup.enter="addNewTask()"
    placeholder="Add new task"
    class="mt-4 w-full rounded-xl outline-none h-10 py-2 px-4 bg-[#2a2a2a] text-white"
  />
  <div class="flex justify-end">
    <button v-on:click="addNewTask()" class="mt-4 py-2 px-6 bg-[#568aef] rounded-md text-white">
      Add
    </button>
  </div>
</template>
<style></style>
