<template>
  <div v-if="itemsInternal.length > 0">
    <div v-if="itemsInternal.length > 3">
      <h1 v-if="more">{{ newItemsAll?.join(separator) }}</h1>
      <h1 v-else>{{ newItems?.join(separator) }}</h1>
      <button @click="more = !more">+more</button>
    </div>
    <div v-else>
      <span v-if="newItems != null">{{ newItems?.join(separator) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, toRefs, computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    items?: Record<string, unknown>[];
    separator?: string;
    max?: string;
    fieldName?: string;
  }>(),
  {
    items: () => [],
    separator: undefined,
    max: undefined,
    fieldName: undefined,
  }
);

const { items, max, fieldName } = toRefs(props);

const itemsInternal = computed(() => items.value ?? []);

const more = ref(false);

const newItems = computed(() => {
  return [
    ...itemsInternal.value
      .map((item) => item[fieldName.value])
      .slice(0, parseInt(max.value, 10)),
  ];
});
const newItemsAll = computed(() => {
  return [...itemsInternal.value.map((item) => item[fieldName.value])];
});
</script>
