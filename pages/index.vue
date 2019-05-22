<template>
  <div class="container">
    <list />
    <cadastro />
  </div>
</template>

<script>
import cadastro from '~/components/cadastro'
import list from '~/components/list'

export default {
  components: {
    cadastro,
    list
  }
}
</script>
