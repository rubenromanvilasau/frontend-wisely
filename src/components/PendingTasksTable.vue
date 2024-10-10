<script setup>
import { formatDate } from '../utils/date.js'
import TrashIcon from '../components/icons/TrashIcon.vue'
import { deleteTask } from '../services/tasks.service.js'
import { updateTask } from '../services/tasks.service.js'

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  },
  updateTasks: {
    type: Function,
    required: true
  }
})

const deletePendingTask = async (taskId) => {
  try {
    await deleteTask(taskId)
    props.updateTasks()
  } catch (error) {
    console.log('Error deleting task:', error)
  }
}

const markTaskAsCompleted = async (taskId) => {
  try {
    await updateTask(taskId, { done: true })
    props.updateTasks()
  } catch (error) {
    console.log('Error marking task as completed:', error)
  }
}
</script>
<template>
  <h2 class="text-2xl font-medium tracking-widest text-white">Pending tasks</h2>
  <table class="table-auto w-full border-separate mt-4">
    <thead>
      <tr>
        <td class="text-slate-300 font-bold text-lg w-4">Actions</td>
        <td class="text-slate-300 font-bold text-lg">Name</td>
        <td class="text-slate-300 font-bold text-lg">Date</td>
      </tr>
    </thead>
    <tbody class="mt-4">
      <tr v-for="task in tasks" v-bind:key="task.id" class="bg-[#2a2a2a]">
        <td class="py-2 px-4 rounded-l-xl flex items-center gap-4">
          <input
            title="Mark as completed"
            v-on:change="markTaskAsCompleted(task.id)"
            v-model="task.done"
            type="checkbox"
            class="h-6 w-6"
            :checked="task.done"
          />
          <TrashIcon
            v-on:click="deletePendingTask(task.id)"
            class="h-8 w-8 cursor-pointer hover:scale-105 duration-200"
          />
        </td>
        <td class="py-2 px-4">{{ task.name }}</td>
        <td class="py-2 px-4 rounded-r-xl">{{ formatDate(task.created_at) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
