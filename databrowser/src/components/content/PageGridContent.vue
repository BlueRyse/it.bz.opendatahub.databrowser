<template>
  <PageContent
    class="grid grid-cols-1 gap-4 pb-12 lg:gap-8"
    :class="{ 'pt-8': !disablePaddingTop }"
  >
    <slot></slot>
  </PageContent>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import PageContent from './PageContent.vue';

defineProps<{ disablePaddingTop?: boolean }>();
</script>
