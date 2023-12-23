<template>
  <div
    class="virtual-list"
    :style="{ height: containerHeight + 'px' }"
    @scroll="onScroll"
  >
    <div
      class="virtual-list-ph"
      :style="{ height: totalHeight + 'px' }"
    ></div>
    <div
      v-for="item in visibleItems"
      :key="item.id"
      class="virtual-list-item"
      :style="{ transform: `translateY(${item.y}px)` }"
    >
      {{ item.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number,
      required: true
    },
    containerHeight: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      scrollTop: 0
    };
  },
  computed: {
    totalHeight() {
      return this.items.length * this.itemHeight;
    },
    visibleCount() {
      return Math.ceil(this.containerHeight / this.itemHeight);
    },
    startIdx() {
      return Math.floor(this.scrollTop / this.itemHeight);
    },
    endIdx() {
      return this.startIdx + this.visibleCount;
    },
    visibleItems() {
      return this.items.slice(this.startIdx, this.endIdx).map((item, idx) => ({
        ...item,
        y: (this.startIdx + idx) * this.itemHeight
      }));
    }
  },
  methods: {
    onScroll(e) {
      this.scrollTop = e.target.scrollTop;
    }
  }
};
</script>

<style>
.virtual-list {
  overflow-y: scroll;
  position: relative;
  width: 100%;
}
.virtual-list-ph {
  width: 100%;
}
.virtual-list-item {
  position: absolute;
  width: 100%;
}
</style>
