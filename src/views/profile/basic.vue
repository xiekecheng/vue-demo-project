<template>
  <div>
    <h1>基础详情页</h1>
    <!-- <vue-pdf-embed :source="pdfSource" /> -->
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      // pdfSource: 'https://goldhosedev.s3.ap-east-1.amazonaws.com/openapitmp/06/bf/Fixed%20Coupon%20Note%20with%20Knock-In%20Feature_CSB%20Indicative%20TS_template.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231220T011516Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAV3DWDIQ4V2YBVFVW%2F20231220%2Fap-east-1%2Fs3%2Faws4_request&X-Amz-Signature=14f6ecb79eb9928f1b659cf7aa1bcfbc6cd171dabc16953dae23bbe1b5c8e692',
      pdfSource: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf',
      checkList: [],
      selectedData: [],
      tableData: [
        {
          id: 1,
          name: 'jack',
          age: 18,
        },
        {
          id: 2,
          name: 'tom',
          age: 18,
        },
        {
          id: 3,
          name: 'rose',
          age: 18,
        },
        {
          id: 4,
          name: 'jam',
          age: 18,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox__label {
  display: none;
}
</style>
