<!---->
<template>
  <div>
    <h1>实现进度条</h1>
    <el-button @click='importCase'>引入用例</el-button>
    <!--失败详情弹窗-->
    <FailDetails ref='FailDetailsRef' />
  </div>
</template>

<script>
import Vue from 'vue';
import FailDetails from '@/views/editor/components/FailDetails.vue';

export default {
  components: {
    FailDetails,
  },
  data() {
    return {
      progressObj: {}, // 存储多个引入用例的进度
    };
  },
  methods: {
    // 引入用例
    importCase() {
      // 调用接口
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 200);
      }).then((isSuccess) => {
        // 接口调用成功
        if (isSuccess) {
          // 生成随机key
          const num = Math.ceil(Math.random() * 10000000);
          const processId = 'process' + num;
          //   开启轮询
          this.startTimer(processId, '批量引入用例中...', (tableData,tableColumn) => {
            console.log('执行回调');
            this.$refs.FailDetailsRef.showFailDetails(tableData, tableColumn);
          }, () => {
            console.log('成功回调');
            //   刷新页面
          });
        }
      });

    },

    /**
     * 开启轮询进度
     * @param processId 处理id
     * @param progressTitle 进度条标题
     * @param failCallback 失败回调
     * @param successCallback 成功回调
     * @returns {string|null}
     */
    startTimer(processId, progressTitle, failCallback, successCallback) {
      let timer;
      // 设置定时器延迟 2分钟前1s调用1次   2分钟后 10秒调用1次
      let callTime = 0;
      // 定时器延时
      let delay = 1000;

      // 生成进度条组件
      let NotificationComp = this.$notify({
        title: progressTitle,
        dangerouslyUseHTMLString: true,
        message: `<div id='${processId}' />`,
        duration: 0,
      });
      let MyComponent = Vue.extend({
        data: () => {
          return {
            id: processId,
            progress: 0,
          };
        },
        computed: {
          progressStatus() {
            return this.progress === 100 ? 'success' : null;
          },
        },
        template: `
          <div :id='id' style='width:100%'>
          <el-progress :percentage='progress' style='width:100%' :status='progressStatus' />
          </div>
        `,
      });
      let ProgressComponent = new MyComponent().$mount(`#${processId}`);

      // 修改样式
      document.querySelector('.el-notification__group').style.width = '100%';

      // 轮询定时器任务
      const pollFn = async () => {
        // 累加调用时间  小于10秒,每秒调用1次 之后 5秒调用一次
        callTime += delay;
        if (callTime > 10000) {
          delay = 5000;
          clearInterval(timer);
          timer = setInterval(pollFn, delay);
        }
        // 创建进度条 => 获取进度 => 有异常提示异常 return; => 更新进度 =>
        try {
          const result = await this.getProcess(processId);
          // 更新进度
          ProgressComponent.progress = result.progress;
          //   判断进度是否>100 返回提示
          const isFinished = result.progress >= 100;
          if (isFinished) {
            // 清除定时器
            clearInterval(timer);

            // 关闭进度弹窗
            setTimeout(() => {
              NotificationComp.close();
            }, 1000);

            // 获取 成功&失败 信息通知
            this.getResultCard(result, failCallback);

            // 执行成功回调 刷新页面/表格
            successCallback();
          }
        } catch (err) {
          // 处理异常

          // 1.关闭定时器
          clearInterval(timer);

          // 2.关闭进度条
          NotificationComp.close();

          // 3.提示异常信息
          setTimeout(() => {
            this.$notify({
              title: err.data.title,
              message: err.data.content,
              type: 'error',
              duration: 0, // 多少秒后消息
            });
          }, 0);
        }
      };

      timer = setInterval(pollFn, delay);
    },

    // 创建成功&失败消息
    getResultCard(result, failCallback) {
      const { successCount, successTitle, successContent, failCount, failTitle, failContent, data,column } = result;
      // 存在成功
      if (successCount > 0) {
        setTimeout(() => {
          this.$notify({
            title: successTitle,
            message: successContent,
            type: 'success',
            duration: 5000, // 多少秒后消失
          });
        }, 0);
      }
      // 存在失败   1.点击查看详情出现弹窗 2.关闭通知卡片
      if (failCount > 0) {
        setTimeout(() => {
          this.$notify({
            title: failTitle,
            dangerouslyUseHTMLString: true,
            message: `<a style='color: red;cursor: pointer;'>${failContent}</a>`,
            duration: 0,
            type: 'error',
            onClick: () => {
              failCallback && failCallback(data,column);
            },
          });
        }, 0);
      }
    },

    // 模拟接口返回进度
    getProcess(processId) {
      return new Promise((resolve, reject) => {
        this.progressObj[processId] = typeof this.progressObj[processId] === 'number' ? this.progressObj[processId] + 20 : 0;
        console.log('this.progressObj[processId]', this.progressObj[processId]);
        // 设置进度
        let data;
        // 当进度未达到100,只返回进度
        if (this.progressObj[processId] < 100) {
          data = {
            progress: this.progressObj[processId],
          };
        } else {
          const params = new Array(15).fill(0).map((item, index) => (
            {
              column1: '风险' + index,
              failReason: '失败原因' + index,
            }
          ));
          data = {
            progress: this.progressObj[processId],
            successCount: 3,
            successTitle: '3个用例更新成功',
            successContent: '用例更新成功,请刷新页面或表格查看最新数据',
            failCount: 3,
            failTitle: '3个批量更新失败',
            failContent: '查看详情',
            data: params,
            column:[
              {
                property: 'column1',
                label: '风险',
              },
              {
                property: 'failReason',
                label: '失败原因',
              },
            ]
          };
        }

        // 返回值
        const result = {
          code: 200,
          result: 'SUCCESS',
          data,
          msg: null,
        };

        // 异常
        const errResult = {
          code: 200,
          result: 'FAIL',
          data: {
            title: '同步失败',
            content: '服务发生异常,请稍后重试',
          },
          msg: '',
        };
        // if(this.progressObj[processId]===60){
        //   reject(errResult);
        // }

        resolve(result.data);

      });
    },

  },
};
</script>

<style lang='scss' scoped></style>
