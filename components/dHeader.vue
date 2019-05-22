<template>
  <div class="header">
    <div class="icon">
      <img :src="icon" />
    </div>
    <div class="text">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
