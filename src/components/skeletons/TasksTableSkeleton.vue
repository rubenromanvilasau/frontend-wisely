<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <h2 class="text-2xl font-medium tracking-widest text-white">{{ title }}</h2>
  <table class="table-auto w-full border-separate mt-4">
    <thead>
      <tr>
        <td class="text-slate-300 font-bold text-lg">Actions</td>
        <td class="text-slate-300 font-bold text-lg">Name</td>
        <td class="text-slate-300 font-bold text-lg">Date</td>
      </tr>
    </thead>
    <tbody class="mt-4">
      <tr class="bg-[#2a2a2a]">
        <td class="py-2 px-4 h-12 rounded-l-xl bg-slate-700 animate-pulse"></td>
        <td class="py-2 px-4 h-12 bg-slate-700 animate-pulse"></td>
        <td class="py-2 px-4 rounded-r-xl h-12 bg-slate-700 animate-pulse"></td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
