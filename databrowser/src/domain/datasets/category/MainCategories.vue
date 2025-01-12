<template>
  <div>
    <SelectCustom
      class="md:hidden"
      :options="selectOptions"
      :size="SelectSize.md"
      @change="setSelectedCategory"
    />

    <div class="hidden flex-col md:flex">
      <PillLink
        v-for="category in categories"
        :key="category.slug"
        class="py-1 px-4"
        :to="category.to"
        :active="slug === category.slug"
      >
        <span :class="{ 'text-error': category.isAnyFieldError === true }">
          {{ computeLabel(category.name, category.isAnyFieldRequired) }}
        </span>
      </PillLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import PillLink from '../../../components/pill/PillLink.vue';
import { Category } from './types';
import SelectCustom from '../../../components/select/SelectCustom.vue';
import { SelectOption, SelectSize } from '../../../components/select/types';

const props = defineProps<{
  categories: Category[];
  slug?: string;
}>();

const { categories, slug } = toRefs(props);

const computeLabel = (name: string, isAnyFieldRequired?: boolean) =>
  name + (isAnyFieldRequired ? ' *' : '');

const selectOptions = computed<SelectOption[]>(() =>
  categories.value.map((category) => ({
    label: computeLabel(category.name, category.isAnyFieldRequired),
    value: category.slug,
    selected: slug?.value === category.slug,
  }))
);

const router = useRouter();

const setSelectedCategory = (slug: string) => {
  const nextCategory = categories.value.find(
    (category) => category.slug === slug
  );

  if (nextCategory != null) {
    router.push(nextCategory?.to);
  }
};
</script>
