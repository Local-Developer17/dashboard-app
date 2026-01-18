<template>
    <div class="filter-main flex flex-row gap-4 w-full py-4">
        <div class="filter-left flex w-4/5 bg-white p-4 rounded-lg gap-4">
            <DropdownCombo v-for="filter in leftFilters" :key="filter.label" :label="filter.label"
                :comboOptions="filter.options" :comboStyle="filterStyle" v-model="filter.value" />
            <div class="search-con flex items-center">
                <input type="text" v-model="searchQuery" placeholder="Search..."
                    class="rounded-full px-4 py-2 shadow-md" />
                <button class="bg-blue-500 text-white rounded-full px-4 py-2 ml-2" @click="onSearch">
                    Search
                </button>
            </div>
        </div>
        <div class="filter-right flex gap-4 justify-center w-1/5 bg-white p-4 rounded-lg">
            <div class="action-btn flex" v-for="action in actionButtons">
                <button :class="buttonStyle">
                    {{ action.label }}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, watch } from 'vue'
import DropdownCombo from './DropdownCombo.vue'
const leftFilters = reactive([
    {
        label: 'Column',
        options: ['Active', 'Inactive', 'Pending'],
        value: '',
    },
    {
        label: 'Department',
        options: ['Admin', 'User', 'Guest'],
        value: '',
    },
    {
        label: 'Site',
        options: ['Manager', 'Employee', 'Intern'],
        value: '',
    },
    {
        label: 'Lifecycle',
        options: ['Admin', 'Editor', 'Viewer'],
        value: '',
    },
    {
        label: 'Status',
        options: ['Tag1', 'Tag2', 'Tag3'],
        value: '',
    },
    {
        label: 'Entity',
        options: ['Tag1', 'Tag2', 'Tag3'],
        value: '',
    },
])
const searchQuery = ref('')
const filterStyle = 'shadow-md rounded-lg p-2'
const buttonStyle = 'bg-white text-black rounded-full shadow-md rounded-lg px-2'

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
const onSearch = (event) => {
    console.log('Search query:', searchQuery.value)
}
</script>
