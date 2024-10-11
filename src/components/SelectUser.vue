<script setup>
import { ref } from 'vue'
import { getUsers } from '../services/users.service.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const users = ref([])

const fetchUsers = async () => {
  try {
    const { data } = await getUsers()
    users.value = data.data

    const firstUser = data.data[0]
    handleUserChange(firstUser.id)
  } catch (error) {
    console.log('error getting users', error)
  }
}

const handleUserChange = (userId) => {
  console.log('userId', userId)
  router.push({ path: '/', query: { userId } })
}

fetchUsers()
</script>
<template>
  <div class="flex justify-end w-full">
    <div class="flex flex-col gap-2">
      <label for="users">Tasks from user:</label>
      <select
        name="users"
        v-on:change="handleUserChange($event.target.value)"
        class="text-white uppercase font-bold bg-[#2a2a2a] px-4 py-2 rounded-lg outline-none"
        id="users"
      >
        <option v-for="user in users" v-bind:key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>
  </div>
</template>
<style></style>
