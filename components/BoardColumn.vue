<template>
  <UContainer class="column">
    <div class="column-header">
      <div>
        <h2
          v-if="!editColumnNameState"
          class="column-name"
        >
          {{ column.name }}
        </h2>
        <UInput
          v-if="editColumnNameState"
          type="text"
          v-model="column.name"
        />
      </div>
      <div>
        <UButton
          class="edit-column-name-button"
          @click="editColumnNameState = !editColumnNameState"
        >
          Edit
        </UButton>
        <UButton
          class="delete-column-button"
          @click="deleteColumn(columnIndex)"
        >
          Delete
        </UButton>
      </div>
    </div>
    <ul>
      <li v-for="task in column.tasks" :key="task.id">
        <UCard class="task-card">
          <h4>{{ task.title }}</h4>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
  </UContainer>
</template>

<script setup>
import { useBoardStore } from '../stores/boardStore';

// store
const boardStore = useBoardStore();

defineProps({
  column: {
    type: Object,
    required: true,
  },
  columnIndex: {
    type: Number,
    required: true,
  },
});

const editColumnNameState = ref(false);

function deleteColumn(columnName) {
  console.log("🚀 ~ file: index.vue:69 ~ deleteColumn ~ columnName:", columnName);

  boardStore.deleteColumn(columnName);
}
</script>
