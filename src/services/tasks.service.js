import axios from 'axios'

/**
 * Get all tasks associated to an user
 * @param {Integer} userId
 * @returns Promise
 */
export const getUserTasks = async (userId) => {
  console.log('env', import.meta.env.VUE_APP_BACKEND_URL)
  if (!userId) throw new Error('userId is required')
  //   return axios.get(`${import.meta.env.VUE_APP_BACKEND_URL}/users/${userId}/tasks`)
  return axios.get(`${'http://localhost:4000/api'}/users/${userId}/tasks`)
}

/**
 * Create new task with name and userId
 * @param {String} taskName
 * @param {Integer} userId
 * @returns Promise
 */
export const createTask = async (taskName, userId) => {
  if (!taskName) throw new Error('task is required')
  return axios.post(`${'http://localhost:4000/api'}/tasks`, { name: taskName, userId })
}

/**
 * Update a task
 * @param {Integer} taskId
 * @param {Object<{name?: string, done?: boolean}>} task
 * @returns Promise
 */
export const updateTask = async (taskId, task) => {
  if (!taskId || !task) throw new Error('taskId and task is required')
  return axios.put(`${'http://localhost:4000/api'}/tasks/${taskId}`, task)
}

/**
 * Delete a task
 * @param {Integer} taskId
 * @returns Promise
 */
export const deleteTask = async (taskId) => {
  if (!taskId) throw new Error('taskId is required')
  return axios.delete(`${'http://localhost:4000/api'}/tasks/${taskId}`)
}
