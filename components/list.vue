<template>
  <div>
    <dHeader icon="/img/list-ul-solid.svg" title="Lista de amigos" />
    <div class="list">
      {{ amigos.length }}
      <ul v-if="amigos.length">
        <li v-for="(amigo, index) in amigos" :key="index">
          <div class="img">
            <img :src="amigo.img" />
          </div>
          <div class="text">
            <p>{{ amigo.nome }}</p>
            <p>{{ amigo.raca | capitalize(amigo.raca) }}</p>
            <p>{{ amigo.date | moment('LLL') }}</p>
          </div>
        </li>
      </ul>
      <p v-else class="not-register">Nenhum amigo cadastrado</p>
    </div>
  </div>
</template>

<script>
import dHeader from '~/components/dHeader'

export default {
  components: {
    dHeader
  },
  filters: {
    capitalize(s) {
      if (typeof s !== 'string' && s.length) return ''
      return (s.charAt(0).toUpperCase() + s.slice(1)).replace('-', ' ')
    }
  },
  computed: {
    amigos() {
      return this.$store.state.amigos
    }
  }
}
</script>
