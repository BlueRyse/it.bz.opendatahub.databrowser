<template>
  <h2 class="mt-2 max-w-2xl leading-tight text-gray-600 lg:mt-0 sub-title">
    <slot></slot>
  </h2>
</template>

<style>
.sub-title {
  font-size: 1.375rem;
}

@screen lg {
  .sub-title {
    font-size: 1.625rem;
  }
}
</style>
