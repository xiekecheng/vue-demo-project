<template>
  <div class="components-container">
    <split-pane split="vertical" @resize="resize">
      <template v-slot:paneL>
        <div class="left-container" />
      </template>
      <template v-slot:paneR>
        <split-pane split="horizontal">
          <template v-slot:paneL>
            <div class="top-container" />
          </template>
          <template v-slot:paneR>
            <div class="bottom-container" />
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane';

export default {
  components: {
    splitPane,
  },
  methods: {
    resize() {
      console.log('resize');
    },
  },
};
</script>

<style lang="scss" scoped>
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #f38181;
  height: 100%;
}

.right-container {
  background-color: #fce38a;
  height: 200px;
}

.top-container {
  background-color: #fce38a;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95e1d3;
  height: 100%;
}
</style>
