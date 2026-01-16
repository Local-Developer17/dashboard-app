<template>
    <div class="main flex flex-row gap-4 w-full py-4">
        <div class="filter-left flex w-4/5 bg-white p-4 rounded-lg shadow-md gap-4">
            <div class="filter-con w-1/6 flex" v-for="filter in leftFilters">
                <select :class="filterStyle">
                    <option v-for="item in filter.options" :value="item">{{ item }}</option>
                </select>
            </div>
            <div class="search-con">
                <input type="text" v-model="searchQuery" placeholder="Search..."
                    class="rounded-full px-4 py-2 shadow-md" />
            </div>
        </div>
        <div class="filter-right flex gap-4 justify-center w-1/5 bg-white p-4 rounded-lg shadow-md">
            <div class="action-btn flex" v-for="action in actionButtons">
                <button :class="buttonStyle">
                    {{ action.label }}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const filterStyle = 'shadow-md rounded-lg p-2'
const buttonStyle = 'bg-white text-black rounded-full shadow-md rounded-lg px-2'
const leftFilters = [
    {
        label: 'Column',
        options: ['Active', 'Inactive', 'Pending'],
    },
    {
        label: 'Department',
        options: ['Admin', 'User', 'Guest'],
    },
    {
        label: 'Site',
        options: ['Manager', 'Employee', 'Intern'],
    },
    {
        label: 'Lifecycle',
        options: ['Admin', 'Editor', 'Viewer'],
    },
    {
        label: 'Status',
        options: ['Tag1', 'Tag2', 'Tag3'],
    },
    {
        label: 'Entity',
        options: ['Tag1', 'Tag2', 'Tag3'],
    },
]
const actionButtons = [
    {
        label: 'Role',
    },
    {
        label: 'Location',
    },
    {
        label: 'Team',
    },
]
</script>
