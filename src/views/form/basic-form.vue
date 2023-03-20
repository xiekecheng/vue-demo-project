<template>
  <div>
    <h1>基础表单</h1>
    <el-button @click="getInfo">获取信息</el-button>
    <div v-for="item in arr" :key="item.id">
      <el-upload
        ref="upload"
        class="upload-demo"
        multiple
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="item.fileList"
        :before-upload="(val) => handleBeforeUpload(val, item.fileList)"
      >
        <template v-slot:trigger>
          <el-button size="small" type="primary">选取文件</el-button>
        </template>
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >上传到服务器</el-button
        >
        <template v-slot:tip>
          <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      arr: [
        {
          id: 1,
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
        },
        {
          id: 2,
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
        },
        {
          id: 3,
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
        },
      ],
    }
  },
  computed: {
    ...mapState('right', ['isReadOnly']),
  },
  methods: {
    // 获取权限
    getRight() {},
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    // 处理上传前事件,校验文件大小
    handleBeforeUpload(file, fileData) {
      console.log('file', file)
      if (this.getFileContent(file) < 10) {
        console.log('文件大小:', this.getFileContent(file))
      }
      if (file.name === '555.pdf') {
        return false
      }
      fileData.push({
        name: file.name,
        url: 'www.baidu.com',
      })
      console.log('fileData', fileData)

      return false
    },
    // 上传文件
    uploadFile(val1, val2) {
      console.log('调用')
      // console.log('list',list);
      console.log('val1', val1)
      console.log('val2', val2)
      val2.push({
        name: '1111.jpg',
        url: '1111.com',
      })
    },
    getFileContent(file) {
      return file.size / (1024 * 1024)
    },
    getInfo() {
      console.log('arr', this.arr)
    },
  },
}
</script>
