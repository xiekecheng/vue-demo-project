<template>
  <div>
    <el-row :gutter="24">
      <!--个人信息-->
      <el-col :md="8">
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
              <p>
                <el-icon>
                  <el-icon-s-custom />
                </el-icon>
                交互专家
              </p>
              <p>
                <el-icon>
                  <el-icon-s-cooperation />
                </el-icon>
                蚂蚁金服-某某某事业群-某某平台部-某某技术部-UED
              </p>
              <p>
                <el-icon>
                  <el-icon-location />
                </el-icon>
                浙江省杭州市
              </p>
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
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="mini" @click="showInput">+</el-button>
          </div>
          <div class="bottom-content">
            <h6>团队</h6>
            <el-row :gutter="10">
              <el-col :lg="12" :xl="12">
                <div class="group">
                  <span class="icon"
                    ><img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" alt height="24"
                  /></span>
                  科学搬砖组
                </div>
              </el-col>
              <el-col :lg="12" :xl="12">
                <div class="group">
                  <span class="icon"
                    ><img
                      src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                      alt
                      height="24" /></span
                  >全组都是吴彦祖
                </div>
              </el-col>
              <el-col :lg="12" :xl="12">
                <div class="group">
                  <span class="icon"
                    ><img
                      src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                      alt
                      height="24" /></span
                  >中二少女团
                </div>
              </el-col>
              <el-col :lg="12" :xl="12">
                <div class="group">
                  <span class="icon"
                    ><img
                      src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                      alt
                      height="24" /></span
                  >程序员日常
                </div>
              </el-col>
              <el-col :lg="12" :xl="12">
                <div class="group">
                  <span class="icon"
                    ><img
                      src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                      alt
                      height="24" /></span
                  >高逼格设计天团
                </div>
              </el-col>
              <el-col :lg="12" :xl="12">
                <div class="group">
                  <span class="icon"
                    ><img
                      src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                      alt
                      height="24" /></span
                  >骗你来学计算机
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <!--选项卡-->
      <el-col :md="16">
        <div class="article">
          <el-tabs v-model="activeName">
            <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.label" :name="item.name" />
          </el-tabs>
          <keep-alive>
            <component :is="activeName" />
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  Location as ElIconLocation,
  SCooperation as ElIconSCooperation,
  SCustom as ElIconSCustom,
} from '@element-plus/icons';
import Project from './components/Project';
import Application from './components/Application';
import Article1 from './components/Article.vue';

export default {
  components: {
    Project,
    Application,
    Article1,
    ElIconSCustom,
    ElIconSCooperation,
    ElIconLocation,
  },
  data() {
    return {
      dynamicTags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子'],
      tabs: [
        {
          label: '文章(8)',
          name: 'Article1',
        },
        {
          label: '项目(8)',
          name: 'Project',
        },
        {
          label: '应用(8)',
          name: 'Application',
        },
      ],
      inputVisible: false,
      inputValue: '',
      activeName: 'Project',
      currentDate: new Date(),
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
.article {
  background-color: #ffffff;
  padding: 12px;
}

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

.bottom-content {
  .group {
    line-height: 28px;
  }

  .icon {
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;
    height: 24px;
    line-height: 24px;
  }
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
  height: 20px;
  margin-bottom: 5px;

  ::v-deep .el-input__inner {
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

::v-deep .el-tabs__content {
  padding: 0 12px;
}
</style>
