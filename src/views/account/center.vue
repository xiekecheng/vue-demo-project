<template>
  <div>
    <el-row :gutter="24">
      <el-col :md="7" :lg="7" :xl="12">
        <div class="grid-content bg-purple">
          <div class="top-content">
            <div class="avatar">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                height="104"
                alt=""
              />
              <div class="name">Serati Ma</div>
              <div class="signature">海纳百川，有容乃大</div>
            </div>
            <div class="info">
              <p><i class="el-icon-s-custom" />交互专家</p>
              <p><i class="el-icon-s-cooperation" />蚂蚁金服-某某某事业群-某某平台部-某某技术部-UED</p>
              <p><i class="el-icon-location" />浙江省杭州市</p>
            </div>
          </div>
          <div class="middle-content">
            <h6>标签</h6>
            <el-tag
              v-for="tag in dynamicTags"
              :key="tag"
              :disable-transitions="false"
              effect="plain"
              type="info"
              size="mini"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="saveTagInput"
              v-model="inputValue"
              class="input-new-tag"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="mini" @click="showInput">+</el-button>
          </div>
          <div class="bottom-content"></div>
        </div>
      </el-col>
      <el-col :md="17" :lg="17" :xl="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子'],
      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-content {
  background-color: #ffffff;
  min-height: 400px;
  padding: 24px;
}
.top-content {
  .avatar {
    text-align: center;
    .name {
      font-size: 20px;
    }
    img {
      margin-bottom: 20px;
    }
    .signature {
      font-size: 14px;
    }
  }
  .info {
    font-size: 14px;
    padding-left: 26px;
  }
}
.middle-content {
  border-top: 1px dashed rgba(0, 0, 0, 0.06);
  border-bottom: 1px dashed rgba(0, 0, 0, 0.06);
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
  height: 20px;
  margin-bottom: 5px;
  ::v-deep .el-input__inner{
    height: 20px !important;
  }
}
.button-new-tag {
  margin-left: 10px;
  height: 20px;
  line-height: 20px;
  padding-top: 0;
  padding-bottom: 0;
}
.el-tag + .el-tag {
  margin-left: 8px;
  margin-bottom: 5px;
}
</style>
