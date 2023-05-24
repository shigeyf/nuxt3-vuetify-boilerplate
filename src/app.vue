<script setup lang="ts">
  import { mdiAccount } from '@mdi/js'
</script>

<template>
  <div>
    <v-container>
      <v-btn color="primary">Primary</v-btn>
      <v-icon :icon="mdiAccount"></v-icon>
    </v-container>
    <NuxtWelcome />
  </div>
</template>
