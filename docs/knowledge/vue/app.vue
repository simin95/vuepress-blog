<template>
  <div>
    hello there {{num}}
    <button @click="add"></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      num: 0
    }
  },
  methods: {
    add() {
      this.num++
    }
  }
})
</script>
