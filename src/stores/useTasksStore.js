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
      } catch (error) {
        console.error('[useTodoStore] ERROR fetching tasks', error)
        this.error = error
        throw error
      } finally {
        this.isLoading = false
      }
    },
    async createTask(taskName, userId) {
      try {
        const response = await createTask(taskName, userId)
        const newTask = response.data
        this.pendingTasks = [...this.pendingTasks, newTask]
      } catch (error) {
        console.error('[useTodoStore] ERROR creating task', error)
        this.error = error
      }
    },
    async updateTask(taskId, task) {
      try {
        await updateTask(taskId, task)

        if (task.done) {
          this.completedTasks = [...this.completedTasks, task]
          this.pendingTasks = this.pendingTasks.filter((t) => t.id !== taskId)
        } else {
          this.pendingTasks = [...this.pendingTasks, task]
          this.completedTasks = this.completedTasks.filter((t) => t.id !== taskId)
        }
      } catch (error) {
        console.error('[useTodoStore] ERROR updating task', error)
        this.error = error
      }
    },
    async deleteTask(taskId) {
      try {
        await deleteTask(taskId)

        this.pendingTasks = this.pendingTasks.filter((t) => t.id !== taskId)
        this.completedTasks = this.completedTasks.filter((t) => t.id !== taskId)
      } catch (error) {
        console.error('[useTodoStore] ERROR deleting task', error)
        this.error = error
      }
    }
  }
})
