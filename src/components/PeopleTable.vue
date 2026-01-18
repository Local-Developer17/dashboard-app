<template>
    <div class="people-table w-full h-2/4 bg-white rounded-lg shadow-md p-4">
        <table class="w-full table-auto">
            <thead>
                <tr class="bg-gray-100">
                    <th class="flex items-center px-4 py-3">
                        <input type="checkbox" @click="onClick" />
                    </th>
                    <th v-for="header in tableHeaders" :key="header.key"
                        class="px-4 py-2 text-left font-medium text-gray-600">
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in tableRows" :key="row.name" class="hover:bg-gray-50">
                    <td class="px-4 py-2">
                        <input type="checkbox" v-model="row.checked" />
                    </td>
                    <td class="px-4 py-2">{{ row.name }}</td>
                    <td class="px-4 py-2">{{ row.role }}</td>
                    <td class="px-4 py-2">{{ row.department }}</td>
                    <td class="px-4 py-2">{{ row.location }}</td>
                    <td class="px-4 py-2">{{ row.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const tableHeaders = reactive([
    { label: 'Name', key: 'name' },
    { label: 'Role', key: 'role' },
    { label: 'Department', key: 'department' },
    { label: 'Location', key: 'location' },
    { label: 'Status', key: 'status' },
])
const tableRows = reactive([
    {
        name: 'John Doe',
        role: 'Manager',
        department: 'Sales',
        location: 'New York',
        status: 'Active',
        checked: false,
    },
    {
        name: 'Jane Smith',
        role: 'Developer',
        department: 'Engineering',
        location: 'San Francisco',
        status: 'Inactive',
        checked: false,
    },
    {
        name: 'Sam Johnson',
        role: 'Designer',
        department: 'Marketing',
        location: 'Chicago',
        status: 'Active',
        checked: false,
    },
    {
        name: 'Alice Brown',
        role: 'Analyst',
        department: 'Finance',
        location: 'Boston',
        status: 'Pending',
        checked: false,
    },
])

const onClick = (event) => {
    const isChecked = event.target.checked
    tableRows.forEach((row) => {
        row.checked = isChecked
    })
}
</script>
