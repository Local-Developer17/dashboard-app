<template>
    <div class="people-table w-full h-[55vh] bg-white rounded-lg shadow-md p-4 flex flex-col overflow-hidden">
        <div class="table-wrapper flex-1 overflow-y-auto overflow-x-hidden">
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="flex items-center px-4 py-3">
                            <input type="checkbox" :checked="isPageFullySelected" @click="toggleAll" />
                        </th>
                        <th v-for="header in tableHeaders" :key="header.key"
                            class="px-4 py-2 text-left font-medium text-gray-600">
                            {{ header.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in paginatedRows" :key="row.id" class="hover:bg-gray-50">
                        <td class="px-4 py-2">
                            <input type="checkbox" :checked="selectedIds.has(row.id)" @change="toggleRow(row.id)" />
                        </td>
                        <td class="px-4 py-2">{{ row.name }}</td>
                        <td class="px-4 py-2">{{ row.role }}</td>
                        <td class="px-4 py-2">{{ row.department }}</td>
                        <td class="px-4 py-2">{{ row.location }}</td>
                        <td class="px-4 py-2">{{ row.status }}</td>
                        <td class="px-4 py-2">
                            <button @click="onOpen(row)"
                                class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                Details
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination mt-4 flex justify-center">
            <button @click="curPage = firstPage" class="px-3 py-1 mx-1 bg-gray-400 rounded hover:bg-gray-300">
                First Page
            </button>
            <button class="px-3 py-1 mx-1 bg-gray-200 rounded hover:bg-gray-300" :disabled="curPage === 1"
                @click="curPage--">
                Prev
            </button>
            <span class="px-3 py-1 mx-1">Page {{ curPage }} </span>
            <span>Page Size Per Row:
                <select name="pageSize" id="pageSize" v-model.number="pageSize"
                    class="ml-2 border border-gray-300 rounded px-2 py-1">
                    <option value="" disabled hidden>
                        {{ pageSize }}
                    </option>
                    <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
                </select>
            </span>
            <button class="px-3 py-1 mx-1 bg-gray-200 rounded hover:bg-gray-300" :disabled="curPage >= totalRows"
                @click="curPage++">
                Next
            </button>
            <button @click="curPage = lastPage" class="px-3 py-1 mx-1 bg-gray-400 rounded hover:bg-gray-300">
                Last Page
            </button>
        </div>
    </div>
    <DetailModal :open="modalOpen" @close="modalOpen = false" modalTitle="Employee Details">
        <template #slotBody>
            <div class="size-full">
                <div class="basic-info">
                    <div class="left-con"></div>
                    <div class="right"></div>
                </div>
                <div class="detail-con"></div>
            </div>
        </template>
    </DetailModal>
</template>
<script setup>
import { computed, inject, onMounted, reactive, ref, watch } from 'vue'
import DetailModal from './DetailModal.vue'
const selectedFilter = inject('selectedFilter')
const tableHeaders = reactive([
    { label: 'Name', key: 'name' },
    { label: 'Role', key: 'role' },
    { label: 'Department', key: 'department' },
    { label: 'Location', key: 'location' },
    { label: 'Status', key: 'status' },
    { label: 'Actions', key: 'actions' },
])
const selectedIds = ref(new Set())
const tableRows = reactive([])
const curPage = ref(1)
const pageSize = ref(5)
const totalRows = computed(() => Math.ceil(tableRows.length / pageSize.value))
const modalOpen = ref(false)
const employeeDetails = ref({})
onMounted(() => getData())

async function getData() {
    const url = 'https://dummyjson.com/users'
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        data.users.forEach((row) => {
            row.id = row.id
            row.name = row.firstName + ' ' + row.lastName
            row.role = row.company?.title
            row.department = row.company?.department
            row.location = row.address.country + '/' + row.address.state
            row.status = Math.floor(Math.random() * 2) === 0 ? 'Active' : 'Inactive'
            tableRows.push(row)
        })
    } catch (error) {
        console.error('Error fetching user data:', error)
    }
}
const toggleRow = (id) => {
    selectedIds.value.has(id) ? selectedIds.value.delete(id) : selectedIds.value.add(id)
}
const toggleAll = (event) => {
    if (event.target.checked) {
        paginatedRows.value.forEach((row) => selectedIds.value.add(row.id))
    } else {
        paginatedRows.value.forEach((row) => selectedIds.value.delete(row.id))
    }
}
const isPageFullySelected = computed(
    () =>
        paginatedRows.value.length > 0 &&
        paginatedRows.value.every((row) => selectedIds.value.has(row.id)),
)
const filteredRows = computed(() => {
    if (tableRows.filter((row) => row.status === selectedFilter.value).length === 0) {
        return tableRows
    } else {
        return tableRows.filter((row) => row.status === selectedFilter.value)
    }
})
const paginatedRows = computed(() => {
    const start = (curPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredRows.value.slice(start, end)
})
const pageSizes = computed(() => {
    const sizes = []
    tableRows.forEach((_, index) => {
        const size = (index + 1) * 5
        if (size <= filteredRows.value.length && !sizes.includes(size)) {
            sizes.push(size)
        }
    })
    return sizes
})
const firstPage = computed(() => 1)
const lastPage = computed(() => Math.ceil(filteredRows.value.length / pageSize.value))
const onOpen = (row) => {
    modalOpen.value = true
    employeeDetails.value = tableRows.find((r) => r.id === row.id)
    console.log('Employee Details:', employeeDetails)
}
watch(pageSize, (newSize) => {
    if (newSize >= filteredRows.value.length) {
        curPage.value = 1
    }
})
</script>
