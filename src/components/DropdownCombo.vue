<template>
    <div :class="containerStyle">
        <select :value="modelValue" :class="comboStyle" @change="onChange" @click="onClick">
            <option value="" disabled hidden>
                {{ label }}
            </option>
            <option v-for="option in comboOptions" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['update:modelValue', 'change', 'click'])
const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: 'Select an option',
    },
    comboOptions: {
        type: Array,
        required: true,
    },
    comboStyle: {
        type: [String, Array],
        default: 'combobox rounded-full py-2 w-full text-center shadow-md',
    },
    containerStyle: {
        type: [String, Array],
        default: '',
    },
})
const onChange = (event) => {
    emit('update:modelValue', event.target.value)
    emit('change', event.target.value)
}
const onClick = (event) => {
    emit('click', event.target)
}
</script>
