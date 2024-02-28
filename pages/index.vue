<template>
  <main class="board">
    <BoardColumn
      v-for="(column, columnIndex) in boardStore.board.columns"
      :key="column.id"
      :column="column"
      :columnIndex="columnIndex"
    />
    <UContainer class="column">
      <UInput
        type="text"
        placeholder="Create new column"
        icon="i-heroicons-plus-circle-solid"
        v-model="newColumnName"
        @keyup.enter="addColumn"
      />
    </UContainer>
  </main>
</template>

<script setup>
import BoardColumn from '../components/BoardColumn.vue';
import { useBoardStore } from '../stores/boardStore';

// store
const boardStore = useBoardStore();

// refs
const newColumnName = ref('');

function addColumn() {
  boardStore.addColumn(newColumnName.value);
  newColumnName.value = '';
}

</script>
