<template>
  <div>
    <label>
      {{ title }}
    </label>
    <input type="text" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
