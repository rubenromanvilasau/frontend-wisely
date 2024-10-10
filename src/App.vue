<script setup>
import { getUserTasks } from './services/tasks.service.js'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import PendingTasksTable from './components/PendingTasksTable.vue'
import CompletedTasksTable from './components/CompletedTasksTable.vue'
import Topbar from './components/Topbar.vue'
import TasksTableSkeleton from './components/skeletons/TasksTableSkeleton.vue'
import NewTask from './components/NewTask.vue'

const route = useRoute()

const isLoading = ref(true)
const pendingTasks = ref(null)
const completedTasks = ref(null)
const error = ref(null)

/**
 * Get tasks associated to an especific user
 */
const fetchData = async () => {
  try {
    const { data } = await getUserTasks(1) //TODO GET USER

    pendingTasks.value = data.data.filter((task) => !task.done)
    completedTasks.value = data.data.filter((task) => task.done)
  } catch (error) {
    error.value = error
  } finally {
    isLoading.value = false
  }
}

fetchData()
// watch(() => route.query.user, fetchData, { immediate: true })
</script>

<template>
  <header>
    <Topbar />
  </header>
  <p class="text-red-500 text-lg uppercase" v-if="error">{{ error }}</p>
  <div class="mt-16">
    <PendingTasksTable v-if="!isLoading" :tasks="pendingTasks" :updateTasks="fetchData" />
    <TasksTableSkeleton v-if="isLoading" :title="'Pending tasks'" />
    <NewTask :updateTasks="fetchData" />
  </div>
  <div class="mt-16">
    <CompletedTasksTable v-if="!isLoading" :tasks="completedTasks" :updateTasks="fetchData" />
    <TasksTableSkeleton v-if="isLoading" :title="'Completed tasks'" />
  </div>
</template>
