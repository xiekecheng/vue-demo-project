<template>
  <div class="content">
    <custom-comp>
      <template #header>
        <button @click="handleAdd">增加</button>
      </template>
      <template #content>这里是content</template>
      <template #footer>当前值:{{ $store.state.count }}</template>
    </custom-comp>
  </div>
</template>

<script>
// import axios from '@/utils/axios'
import CustomComp from "./components/CustomComp.vue";

export default {
  data () {
    return {
      dialogVisible: false,
      input: "",
    };
  },
  components: {
    CustomComp,
  },
  methods: {

    handleAdd () {

    }
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: red;
}

::v-deep .el-input__inner {
  background-color: red;
}
</style>
