<template>
  <div>
    <h1>拓扑编辑器</h1>
    <!--<div>现在的值:{{ count }}</div>-->
    <!--<el-button @click="increment">自增</el-button>-->
    <h1>实现进度条</h1>
    <el-button @click="importCase">引入用例</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ElProgress as Progress } from 'element-plus'
import * as Vue from 'vue'

window.$vueApp.use(Progress)
// import router from '@/router';
// import store from '@/store';
export default {
  data() {
    return {
      timerObj: {}, // 存储多个定时器
      progressObj: {}, // 存储多个引入用例的进度
      NotiDom: {}, // 进度条组件
    }
  },
  computed: {
    ...mapState('user', ['count']),
  },
  created() {
    this.$http
      .get('http://localhost:8088/user', {
        params: {
          curPage: 1,
          pageSize: 10,
        },
      })
      .then((res) => {
        console.log('res', res)
      })
  },
  methods: {
    ...mapMutations('user', ['increment']),
    // 引入用例
    importCase() {
      // 调用接口
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 200)
      }).then((isSuccess) => {
        // 接口调用成功
        if (isSuccess) {
          //   开启轮询
          this.startTimer()
        }
      })

      // const progressBar = ``
      // const html = `
      //     <div id='processId'>
      //       <el-progress :percentage="100"></el-progress>
      //       <el-button>abc</el-button>
      //     </div>
      //   `

      //   调用引入用例接口,生成通知进度条 dom
      //   this.NotiDom[processId] = this.generateProgress()

      // eslint-disable-next-line no-new
      // new Vue({
      //   el: '#processId',
      //   template:html,
      //   // render: res.render,
      //   // render: h => h(App)
      // })
    },
    // 开启定时器轮询获取进度
    startTimer() {
      // 生成随机key
      const num = Math.ceil(Math.random() * 10000000)
      const processId = 'process' + num

      // 定时器
      const startFn = () => {
        // 业务逻辑
        const handleFn = () => {
          //   调用接口,获取进度,更新进度条
          const result = this.getProcess(processId)
          this.setProgress(result.progress, processId)
          if (result.msg === '成功') {
            this.clearTimer(processId)
          }
        }

        // 如果定时器存在则先清除定时器
        if (this.timerObj[processId] !== null) {
          this.clearTimer(processId)
        }

        this.timerObj[processId] = setInterval(handleFn, 1000)
      }
      startFn()
    },

    // 获取进度
    getProcess(processId) {
      this.progressObj[processId] =
        typeof this.progressObj[processId] === 'number'
          ? this.progressObj[processId] + 20
          : 0
      console.log('this.progressObj[processId]', this.progressObj[processId])

      // 返回值
      const result = {
        code: 200,
        result: 'SUCCESS',
        progress: String(this.progressObj[processId]),
        msg: this.progressObj[processId] >= 100 ? '成功' : '',
      }
      return result
    },
    // 设置进度条进度
    setProgress(progress, processId) {
      // 进度条组件未创建则先生成
      if (!this.NotiDom[processId]) {
        this.NotiDom[processId] = this.generateProgress()
      }

      // 更新进度
      this.NotiDom[processId].message = progress
    },
    // 生成进度条
    generateProgress() {
      return this.$notify({
        title: 'HTML 片段',
        // dangerouslyUseHTMLString: true,
        message: '0',
        duration: 0, // 多少秒后消息
      })
    },
    // 清除定时器
    clearTimer(processId) {
      clearInterval(this.timerObj[processId])
      this.timerObj[processId] = null
    },
  },
}
</script>
