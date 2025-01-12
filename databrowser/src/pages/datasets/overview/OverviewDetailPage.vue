<template>
  <AppLayout>
    <template v-if="dataset">
      <OverviewDetailHero :dataset="dataset" />

      <PageGridContent>
        <OverviewCardDescription :dataset="dataset" />
        <OverviewCardAccess :dataset="dataset" />
        <OverviewCardTabs :dataset="dataset" />
        <OverviewCardSuggestion :datasets="randomDatasets" />

        <CardDivider />

        <PartnersAndContributors />
      </PageGridContent>
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '../../../layouts/AppLayout.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  DatasetDescription,
  datasetsForPages,
} from '../../../config/config-for-pages';
import OverviewCardTabs from './OverviewCardTabs.vue';
import OverviewCardDescription from './OverviewCardDescription.vue';
import OverviewCardAccess from './OverviewCardAccess.vue';
import { getRandomElementsFromArray } from '../../../components/utils/array';
import OverviewDetailHero from './OverviewDetailHero.vue';
import PartnersAndContributors from '../../../components/partners/PartnersAndContributors.vue';
import CardDivider from '../../../components/card/CardDivider.vue';
import PageGridContent from '../../../components/content/PageGridContent.vue';
import OverviewCardSuggestion from './OverviewCardSuggestion.vue';

const route = useRoute();

const dataset = computed(() =>
  datasetsForPages.tourism.find((dataset) => dataset.id === route.params.id)
);

const randomDatasets = ref<DatasetDescription[]>([]);

watch(
  () => dataset.value,
  () => {
    // Get 3 random datasets, sorted by title.
    // Note that the current dataset will never be in
    // in the result list, because it is filtered out
    randomDatasets.value = getRandomElementsFromArray(
      datasetsForPages.tourism.filter(
        (dataset) => dataset.id !== route.params.id
      ),
      3
    ).sort((a, b) => a.title.localeCompare(b.title));
  },
  { immediate: true }
);
</script>
