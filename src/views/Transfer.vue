<template>
  <div class="transfer">
    <h1>Transfer</h1>
    <div>
      <label>from address: </label>
      <input :value="from" @input="updateFrom">
    </div>
    <div>
      <label>to address: </label>
      <input :value="to" @input="updateTo">
    </div>
    <div>
      <label>amount: </label>
      <input :value="amount" @input="updateAmount">
    </div>
    <button v-on:click="submit">submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "transfer",
  methods: {
    updateFrom(e) {
      this.$store.dispatch('Transfer/changeFrom', e.target.value);
    },
    updateTo(e) {
      this.$store.dispatch('Transfer/changeTo', e.target.value);
    },
    updateAmount(e) {
      this.$store.dispatch('Transfer/changeAmount', e.target.value);
    },
    ...mapActions('Transfer', {
      'submit': 'transfer'
    })
  },
  computed: {
    ...mapGetters('Transfer', {
      'from': 'getFrom',
      'to': 'getTo',
      'amount': 'getAmount',
    })
  }
}
</script>
