<template>
  <div
    class="inline-flex gap-2 items-center py-1 px-3 rounded"
    :class="[classNames.background, textSizeClass]"
  >
    <div
      v-if="hasDot"
      class="w-1 h-1 rounded-full"
      :class="classNames.dot"
    ></div>
    <span :class="classNames.text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { TagSize, TagType } from './types';

interface Color {
  background: string;
  text: string;
  dot: string;
}

const types: Record<TagType, Color> = {
  black: {
    background: 'bg-black',
    text: 'text-white',
    dot: 'bg-white',
  },
  blue: {
    background: 'bg-hint-calm-secondary',
    text: 'text-hint-calm',
    dot: 'bg-hint-calm',
  },
  green: {
    background: 'bg-hint-info-secondary',
    text: 'text-hint-info',
    dot: 'bg-hint-info',
  },
  red: {
    background: 'bg-hint-error-secondary',
    text: 'text-hint-error',
    dot: 'bg-hint-error',
  },
  yellow: {
    background: 'bg-hint-warning-secondary',
    text: 'text-hint-warning',
    dot: 'bg-hint-warning',
  },
};

const props = withDefaults(
  defineProps<{
    type: TagType;
    text: string;
    size?: TagSize;
    hasDot?: boolean;
  }>(),
  {
    size: 'md',
    hasDot: false,
  }
);

const classNames = computed(() => types[props.type]);
const textSizeClass = computed(() => (props.size === 'xs' ? 'text-xs' : ''));
</script>
