<template>
  <span class="cat">{{ char }}</span>
</template>

<script>
export default {
  name: 'Cat',
  props: {
    char: String,
  },
}
</script>

<style>
.cat {
  padding: 0.5rem 0.5rem 2.5rem;
  z-index: 2;
  transition: all .3s;
}
</style>
