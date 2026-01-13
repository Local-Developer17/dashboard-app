<template>
    <div class="people-main p-16 h-1/3 py-4">
        <div class="title h-1/2">
            <h1 :class="titleStyle">{{ peopleTitle }}</h1>
        </div>
        <div class="people-row flex w-full">
            <div class="row-left  w-1/2">
                <ul class="w-full flex gap-4">
                    <div class="progress-div w-full" v-for="item in progress.listItems" :key="item.label">
                        <p class="pl-2"> {{ item.label }}</p>
                        <li :class="[listItemsStyle, 'w-full bg-gray-200 rounded-full']">
                            <span :class="[item.backgroundColor, 'rounded-full px-4 py-2 text-center']"
                                :style="{ width: item.percent }">{{
                                    item.percent
                                }}</span>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="row-right w-1/2"></div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const peopleTitle = 'People'

const titleStyle = [
    'font-sans',
    'text-7xl',
    'text-gray-800',
]

const listItemsStyle = [
    'items-center',
    'text-left',
    'flex',
    'gap-8',
    'font-medium',
    'text-gray-600',
    'rounded-full',
]

const progress = reactive({
    listItems: [
        { label: 'Interviews', percent: '25%', backgroundColor: 'bg-blue-100' },
        { label: 'Hired', percent: '51%', backgroundColor: 'bg-green-100' },
        { label: 'Project Time', percent: '10%', backgroundColor: 'bg-yellow-100' },
        { label: 'Output', percent: '14%', backgroundColor: 'bg-purple-100' },
    ],
})
</script>
