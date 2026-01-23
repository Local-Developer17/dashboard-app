<template>
    <div class="filter-main flex flex-row gap-4 w-full py-2">
        <div class="filter-left flex justify-start w-3/5 bg-white p-4 rounded-lg gap-4">
            <DropdownCombo v-for="filter in leftFilters" :key="filter.label" :label="filter.label"
                :comboOptions="filter.options" :comboStyle="filterStyle" v-model="filter.value"
                :containerStyle="'w-1/6 flex'" @change="onFilterChange" @click="onClick" />
                <button class="clear-filter bg-blue-500 text-white rounded-full px-4 py-2 ml-2 hover:bg-blue-600" @click="onFilterChange"> Clear Filters </button>
            
        </div>
        <div class="filter-right flex justify-end gap-4 w-2/5 bg-white p-4 rounded-lg">
                <div class="search-con flex gap-4 items-center">
                <input type="text" v-model="searchedVal" placeholder="Type Your Search..."
                    class="rounded-full px-4 py-2 shadow-md" />
                <button class="bg-blue-500 text-white rounded-full px-4 py-2 ml-2 w-20" @click="searchedVal = ''">
                    Clear
                </button>
            </div>
        </div>
    </div>
</template> 
<script setup>
import { inject, reactive, ref, defineEmits } from 'vue'
import DropdownCombo from './DropdownCombo.vue'
const emit = defineEmits('click') 
const departmentOptions = ref([])
const roleOptions = ref([])
const filterStyle = 'shadow-md rounded-lg p-2 w-full'
const selectedFilter = inject('selectedFilter')
const searchedVal = inject('searchedVal')
const leftFilters = reactive([
    {
        label: 'Department',
        options: departmentOptions.value,
        value: '',
    },
    {
        label: 'Role',
        options: roleOptions.value,
        value: '',
    },
    {
        label: 'Status',
        options: ['Active', 'Inactive'],
        value: '',
    },
])

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
                    if(!roleOptions.value.includes(user.company.title)){
                        roleOptions.value.push(user.company.title)
                    }
                })
            })
    } catch (error) {
        console.log('Error fetching data:', error)
    }
}
const onClick = () => {
    getData()
}
const onSearch = () => {
    console.log(this)
}
const onFilterChange = (val) => {
  if (val instanceof Event) {
    selectedFilter.value = ''
    leftFilters.forEach(f => f.value = '')
    return
  }
  selectedFilter.value = val
  leftFilters.forEach(f => {
    if (f.value !== val) {
      f.value = ''
    }
  })
}

</script>
