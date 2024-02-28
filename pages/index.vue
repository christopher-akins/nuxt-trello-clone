<template>
  <main class="board">
    <UContainer
      v-for="column in boardStore.board.columns"
      :key="column.name"
      class="column"
    >
      <h2 class="column-header">{{ column.name }}</h2>
      <ul>
        <li v-for="task in column.tasks" :key="task.id">
          <UCard class="task-card">
            <h4>{{ task.title }}</h4>
            <p>{{ task.description }}</p>
          </UCard>
        </li>
      </ul>
    </UContainer>
  </main>
</template>

<script setup>
import { useBoardStore } from '../stores/boardStore';

const boardStore = useBoardStore();

</script>
