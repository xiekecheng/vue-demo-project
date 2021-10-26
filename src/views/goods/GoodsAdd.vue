<template>
  <div>
    <h1>发布商品</h1>
    <FileUpload
      target="http://localhost:8080/api/v1/vueadmin/uploadImage"
      action="POST"
      v-on:progress="progress"
      v-on:start="startUpload"
      v-on:finish="finishUpload"
    />
  </div>
</template>

<script>
import FileUpload from "vue-simple-upload/dist/FileUpload";
export default {
  components: {
    FileUpload,
  },
  methods: {
    startUpload(e) {
      // file upload start event
      console.log("startUpload", e);
    },
    finishUpload(e) {
      // file upload finish event
      console.log("finishUpload", e);
    },
    progress(e) {
      // file upload progress
      // returns false if progress is not computable
      console.log("progress", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
