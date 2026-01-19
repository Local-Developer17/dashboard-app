<template>
    <Teleport to="body">
        <div v-if="open" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-1/3 relative">
                <h2 class="text-xl font-bold mb-4">Modal Title</h2>
                <p class="mb-4">This is a modal dialog.</p>
                <button @click="emit('close')" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Close
                </button>
                <button @click="emit('close')"
                    class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl leading-none"
                    aria-label="Close modal">
                    &times;
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineEmits } from 'vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => window.addEventListener('keydown', onEsc))
onUnmounted(() => window.removeEventListener('keydown', onEsc))
const emit = defineEmits(['close'])
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
})
const onEsc = (e) => {
    if (e.key === 'Escape') emit('close')
}
</script>
