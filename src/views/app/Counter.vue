<template>
  <div>
    {{ count }}
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="scss" scoped></style>
