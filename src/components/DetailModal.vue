<template>
    <Teleport to="body">
        <div v-if="open" class="h-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 relative size-3/5 max-w-187.5 flex flex-col">
                <h2 class="text-3xl font-bold mb-4">{{ modalTitle }}</h2>
                <div class="modal-body h-4/5 w-full">
                    <slot name="slotBody"></slot>
                </div>
                
                <div class="button-con w-full flex justify-end mt-4 gap-4">
                    <slot name="buttons"></slot>
                    <button @click="emit('close')"
                        class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Close
                    </button>
                    <button @click="emit('close')"
                        class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl leading-none"
                        aria-label="Close modal">
                        &times;
                    </button>
                </div>
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
    modalTitle: {
        type: String,
        default: 'Modal Title',
    },
    open: {
        type: Boolean,
        required: true,
    },
})
const onEsc = (e) => {
    if (e.key === 'Escape') emit('close')
}
</script>
