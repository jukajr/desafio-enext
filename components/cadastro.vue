<template>
  <form class="cadastro" @submit.prevent="save">
    <dHeader icon="/img/paw-solid.svg" title="Cadastrar amigo" />
    <bSelect
      :key="keyComponents"
      v-model="form.raca"
      title="Raça"
      :options="racas"
    />
    <bInput :key="keyComponents + 1" v-model="form.nome" title="Nome" />
    <div class="img">
      <img v-if="form.img.length" :src="form.img" />
    </div>
    <button type="submit">SALVAR</button>

    <vodal
      v-if="alert"
      :show="alert"
      :width="320"
      animation="rotate"
      @hide="alert = false"
    >
      <div class="alert">
        <span>Cadastro realizado com sucesso!</span>
        <img src="/img/ok.gif" />
      </div>
    </vodal>
  </form>
</template>

<script>
import serviceDog from '~/services/dog'
import dHeader from '~/components/dHeader'
import bSelect from '~/components/base/bSelect'
import bInput from '~/components/base/bInput'

export default {
  components: {
    dHeader,
    bSelect,
    bInput
  },
  data() {
    return {
      alert: false,
      racas: [],
      keyComponents: 0,
      form: {
        raca: '',
        nome: '',
        img: ''
      }
    }
  },
  watch: {
    'form.raca'(value) {
      this.getImg(value)
    }
  },
  mounted() {
    this.getRacas()
  },
  methods: {
    async getRacas() {
      const response = await serviceDog.list()

      if (response.status === 200) {
        const racas = response.data.message

        const arrayRacas = Object.entries(racas).map(raca => {
          if (raca[1].length) {
            return raca[1].map(i => `${raca[0]}-${i}`)
          } else {
            return [raca[0]]
          }
        })

        this.racas = arrayRacas.reduce((a, b) => {
          return a.concat(b)
        })
      }
    },
    async getImg(raca) {
      if (raca.length) {
        const response = await serviceDog.img({ raca })

        if (response.status === 200) {
          this.form.img = response.data.message
        }
      }
    },
    async save() {
      const obj = this.form
      this.form = {
        raca: '',
        nome: '',
        img: ''
      }

      obj.date = new Date()

      await this.$store.commit('addAmigo', obj)

      this.keyComponents = ++this.keyComponents
      this.alert = true
    }
  }
}
</script>
