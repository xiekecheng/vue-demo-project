<!-- 文件上传 -->
<template>
  <div>
    <!-- 文件上传 -->
    <h1>文件上传</h1>
    <!-- 
		
		-->
    <el-upload
      ref="upload"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :auto-upload="false"
      :accept="acceptFileType"
      :file-list="fileList"
      list-type="picture"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button @click="viewImage">查看图片</el-button>
    <h1>图片预览</h1>
    <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"> </el-image>
    <ViewImageDialog ref="ViewImageDialogRef" :url="imgUrl" />
  </div>
</template>

<script>
import ViewImageDialog from './components/ViewImageDialog.vue';
export default {
  components: {
    ViewImageDialog,
  },
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      ],
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      acceptFileType: 'image/*',
      imgUrl: '',
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      this.imgUrl = file.url;
      this.$refs.ViewImageDialogRef.dialogVisible = true;
    },
    // 查看图片
    viewImage() {
      // 打开弹窗
      this.$refs.ViewImageDialogRef.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
