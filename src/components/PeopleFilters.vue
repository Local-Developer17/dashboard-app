<template>
    <div class="filter-main flex flex-row gap-4 w-full py-2">
        <div class="filter-left flex w-4/5 bg-white p-4 rounded-lg gap-4">
            <DropdownCombo v-for="filter in leftFilters" :key="filter.label" :label="filter.label"
                :comboOptions="filter.options" :comboStyle="filterStyle" v-model="filter.value"
                :containerStyle="'w-1/7'" @change="onFilterChange" @click="onClick" />
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
import { inject, reactive, ref } from 'vue'
import DropdownCombo from './DropdownCombo.vue'
const searchQuery = ref('')
const departmentOptions = ref([])
const filterStyle = 'shadow-md rounded-lg p-2'
const buttonStyle = 'bg-white text-black rounded-full shadow-md rounded-lg px-2'

const selectedFilter = inject('selectedFilter')
const leftFilters = reactive([
    {
        label: 'Column',
        options: ['Active', 'Inactive', 'Pending'],
        value: '',
    },
    {
        label: 'Department',
        options: departmentOptions.value,
        value: '',
    },
    {
        label: 'Role',
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
        options: ['Active', 'Inactive', 'Pending'],
        value: '',
    },
    {
        label: 'Entity',
        options: ['Tag1', 'Tag2', 'Tag3'],
        value: '',
    },
])

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
async function getData() {
    const url = 'https://dummyjson.com/users'
    try {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                data.users.forEach((user) => {
                    if (!departmentOptions.value.includes(user.company.department)) {
                        departmentOptions.value.push(user.company.department)
                    }
                })
            })
    } catch (error) {
        console.log('Error fetching data:', error)
    }
}
const onClick = () => {
    getData()
    console.log(departmentOptions.value)
}
const onSearch = (event) => {
    console.log('Search query:', searchQuery.value)
}
const onFilterChange = (val) => {
    selectedFilter.value = val
}
</script>
