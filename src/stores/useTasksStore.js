import { defineStore } from 'pinia'
import { getUserTasks, createTask, updateTask, deleteTask } from '@/services/tasks.service'

// CRUD basic interactions for tasks
export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    completedTasks: [],
    pendingTasks: [],
    error: null,
    isLoading: true
  }),
  actions: {
    async fetchTasks(userId) {
      this.isLoading = true
      try {
        const { data } = await getUserTasks(userId)
        this.tasks = data
        this.completedTasks = data.filter((task) => task.done)
        this.pendingTasks = data.filter((task) => !task.done)
        this.isLoading = false
      } catch (error) {
        console.error('[useTodoStore] ERROR fetching tasks', error)
      }
    },
    async createTask(taskName, userId) {
      try {
        await createTask(taskName, userId)
        this.fetchTasks(userId)
      } catch (error) {
        console.error('[useTodoStore] ERROR creating task', error)
      }
    },
    async updateTask(taskId, task, userId) {
      try {
        await updateTask(taskId, task)
        this.fetchTasks(userId)
      } catch (error) {
        console.error('[useTodoStore] ERROR updating task', error)
      }
    },
    async deleteTask(taskId, userId) {
      try {
        await deleteTask(taskId)
        this.fetchTasks(userId)
      } catch (error) {
        console.error('[useTodoStore] ERROR deleting task', error)
      }
    }
  }
})
