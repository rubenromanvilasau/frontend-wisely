<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PendingTasksTable from '@/components/PendingTasksTable.vue'
import CompletedTasksTable from '@/components/CompletedTasksTable.vue'
import Topbar from '@/components/Topbar.vue'
import TasksTableSkeleton from '@/components/skeletons/TasksTableSkeleton.vue'
import NewTask from '@/components/NewTask.vue'
import SelectUser from '@/components/SelectUser.vue'
import { useTasksStore } from '@/stores/useTasksStore.js'

const tasksStore = useTasksStore()

const route = useRoute()
const router = useRouter()

watch(
  () => route.query.userId,
  (newUserId, oldUserId) => {
    if (newUserId !== oldUserId) {
      tasksStore.fetchTasks(newUserId).catch((error) => {
        if (!error.response) {
          router.push('/error')
        }
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <header>
    <Topbar />
  </header>
  <p class="text-red-500 text-lg uppercase" v-if="tasksStore.error">{{ error }}</p>
  <SelectUser />
  <div class="mt-16">
    <PendingTasksTable v-if="!tasksStore.isLoading" />
    <TasksTableSkeleton v-if="tasksStore.isLoading" :title="'Pending tasks'" />
    <NewTask />
  </div>
  <div class="mt-16">
    <CompletedTasksTable v-if="!tasksStore.isLoading" />
    <TasksTableSkeleton v-if="tasksStore.isLoading" :title="'Completed tasks'" />
  </div>
</template>
