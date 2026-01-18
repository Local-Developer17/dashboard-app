<template>
    <ul class="w-full flex gap-4">
        <li v-for="item in listItems" :key="item.label" class="progress-div w-full list-none">
            <p class="pl-2">{{ item.label }}</p>

            <div :class="listItemsStyle">
                <span :class="[item.backgroundColor, 'rounded-full px-4 py-2 text-center']"
                    :style="{ width: item.percent }">
                    {{ item.percent }}
                </span>
            </div>
        </li>
    </ul>
</template>
<script setup>
const props = defineProps({
    listItems: {
        type: Array,
        required: true,
    },
    listItemsStyle: {
        type: Array,
        default: [
            'items-center',
            'text-left',
            'flex',
            'gap-8',
            'font-medium',
            'text-gray-600',
            'rounded-full',
            'w-full',
            'bg-gray-200',
            'rounded-full',
            'shadow-lg',
        ],
    },
})
</script>
