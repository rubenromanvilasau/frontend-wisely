<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useTasksStore } from '@/stores/useTasksStore.js'

const tasksStore = useTasksStore()

const route = useRoute()
const newTask = ref('')

const addNewTask = async () => {
  const userId = route.query.userId
  await tasksStore.createTask(newTask.value, userId)
  newTask.value = ''
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
