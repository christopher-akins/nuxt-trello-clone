import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import boardData from '../data/board.json';

interface Column {
  id: number;
  name: string;
  tasks: any[];
};

export const useBoardStore = defineStore('boardStore', () => {
  const board = useStorage('board', boardData);

  function addColumn(columnName: string): void {
    const newColumn: Column = {
      id: Math.floor(Math.random() * 1000),
      name: columnName,
      tasks: [],
    };

    board.value.columns.push(newColumn);
  }

  function deleteColumn(columnIndex: number): void {
    board.value.columns.splice(columnIndex, 1);
  }

  return {
    board,
    addColumn,
    deleteColumn
  };
});
