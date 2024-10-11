<script setup>
import { ref } from 'vue'
import { getUsers }  from '../services/users.service.js'

const users = ref([])

const fetchUsers = async () => {
  try {
    const { data } = await getUsers()
    users.value = data.data
  } catch (error) {
    console.log('error getting users', error);
  }
}

fetchUsers()
</script>
<template>
  <div class="flex justify-end w-full">
    <div class="flex flex-col gap-2">
      <label for="users">Tasks from user:</label>
      <select name="users" class="text-white uppercase font-bold bg-[#2a2a2a] px-4 py-2 rounded-lg outline-none" id="users">
        <option value="">ASd</option>
        <option value="">asdlk</option>
        <option value="">asdlkadslkadjkajdkla</option>
      </select>
    </div>
  </div>
</template>
<style></style>
