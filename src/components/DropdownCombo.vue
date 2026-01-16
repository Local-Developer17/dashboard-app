<template>
    <div class="main">
        <select v-model="selectedModel" :class="comboStyle" @change="onChange">
            <option value="" disabled hidden>
                {{ label }}
            </option>
            <option v-for="option in comboOptions">
                {{ option }}
            </option>
        </select>
    </div>
</template>
<script setup>
import { defineProps, ref, defineEmits } from 'vue'
const selectedModel = ref('')
const emit = defineEmits(['onChange'])
const props = defineProps({
    label: {
        type: String,
        default: 'Select an option',
    },
    comboOptions: {
        type: Array,
        required: true,
    },
    comboStyle: {
        type: String,
        default: 'combobox rounded-full py-2 w-full text-center shadow-md',
    },
})
const onChange = () => {
    emit('onChange', selectedModel.value)
}
</script>
