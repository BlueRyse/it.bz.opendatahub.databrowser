<template>
  <HeroContainer v-if="dataset">
    <HeroTitle>{{ dataset.title }}</HeroTitle>
    <HeroSubTitle class="lg:mt-3">Details</HeroSubTitle>
    <div
      class="grid grid-cols-2 gap-4 p-5 mt-4 w-full bg-white rounded md:grid-cols-4 md:gap-16"
    >
      <CardIconGrid>
        <IconSource class="mt-0.5" />
        <div class="flex flex-col gap-2 leading-tight text-gray-600">
          <span class="font-semibold">Sources</span>
          <ListWithMore :dataset="dataset" />
        </div>
      </CardIconGrid>
      <CardIconGrid>
        <IconAvailibilityOfData class="mt-0.5" />
        <div class="flex flex-col gap-2 leading-tight text-gray-600">
          <span class="font-semibold">Availability of data</span>
          <TagCustom
            v-if="dataset.access === 'opendata'"
            size="xs"
            type="blue"
            text="Full access"
            has-dot
          />
          <TagCustom
            v-if="dataset.access === 'limited' || dataset.access === 'closed'"
            size="xs"
            type="yellow"
            text="Limited access"
            has-dot
          />
        </div>
      </CardIconGrid>
      <CardIconGrid>
        <IconTermsOfUse class="mt-0.5" />
        <div class="flex flex-col gap-2 leading-tight text-gray-600">
          <span class="font-semibold">Terms of use</span>
          <TagCustom size="xs" type="blue" text="No limits" has-dot />
        </div>
      </CardIconGrid>
      <CardIconGrid>
        <IconNumberOfRecords class="mt-0.5" />
        <div class="flex flex-col gap-2 leading-tight text-gray-600">
          <span class="font-semibold">Available records</span>
          12304
        </div>
      </CardIconGrid>
    </div>
  </HeroContainer>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { DatasetDescription } from '../../../config/config-for-pages';
import HeroContainer from '../../../components/hero/HeroContainer.vue';
import HeroTitle from '../../../components/hero/HeroTitle.vue';
import HeroSubTitle from '../../../components/hero/HeroSubTitle.vue';
import CardIconGrid from '../../../components/card/CardIconGrid.vue';
import IconSource from '../../../components/svg/IconSource.vue';
import TagCustom from '../../../components/tag/TagCustom.vue';
import ListWithMore from '../../../components/list/ListWithMore.vue';
import IconAvailibilityOfData from '../../../components/svg/IconAvailibilityOfData.vue';
import IconTermsOfUse from '../../../components/svg/IconTermsOfUse.vue';
import IconNumberOfRecords from '../../../components/svg/IconNumberOfRecords.vue';

defineProps<{ dataset: DatasetDescription }>();
</script>
