<template>
  <div>
    <label>{{ title }}</label>
    <select @change="$emit('input', $event.target.value)">
      <option value="">Selecione</option>
      <option v-for="(value, index) in options" :key="index" :value="value">
        {{ value | capitalize }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return (s.charAt(0).toUpperCase() + s.slice(1)).replace('-', ' ')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
