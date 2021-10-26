<template>
  <div>
    <slot name="header">
      <!-- 头部 -->
    </slot>
    <slot name="content">
      <!-- 内容 -->
    </slot>
    <div>
      <slot name="footer">
        <!-- 尾部 -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
