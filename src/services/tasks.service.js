import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL

/**
 * Get all tasks associated to an user
 * @param {Integer} userId
 * @returns Promise
 */
export const getUserTasks = async (userId) => {
  if (!userId) throw new Error('userId is required')
  return axios.get(`${API_URL}/users/${userId}/tasks`).then((res) => res.data)
}

/**
 * Create new task with name and userId
 * @param {String} taskName
 * @param {Integer} userId
 * @returns Promise
 */
export const createTask = async (taskName, userId) => {
  if (!taskName) throw new Error('task is required')
  return axios.post(`${API_URL}/tasks`, { name: taskName, userId }).then((res) => res.data)
}

/**
 * Update a task
 * @param {Integer} taskId
 * @param {Object<{name?: string, done?: boolean}>} task
 * @returns Promise
 */
export const updateTask = async (taskId, task) => {
  if (!taskId || !task) throw new Error('taskId and task is required')
  return axios.put(`${API_URL}/tasks/${taskId}`, task).then((res) => res.data)
}

/**
 * Delete a task
 * @param {Integer} taskId
 * @returns Promise
 */
export const deleteTask = async (taskId) => {
  if (!taskId) throw new Error('taskId is required')
  return axios.delete(`${API_URL}/tasks/${taskId}`).then((res) => res.data)
}
