<template>
  <div class="balance">
    <h1>Balance</h1>
    <table>
      <thead>
        <tr>
          <th>address</th>
          <th>balance</th>
          <th>hoge coin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.address">
          <td>{{account.address}}</td>
          <td>{{account.balance}}</td>
          <td>{{account.hoge}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "balance",
  created() {
    this.$store.dispatch('fetchAccounts');
  },
  computed: {
    ...mapGetters({
      'accounts': 'getAccounts'
    })
  },
  components: {}
};
</script>
