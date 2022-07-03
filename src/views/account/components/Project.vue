<template>
  <div>
    <el-row :gutter="24">
      <el-col v-for="o in 30" :key="o" :xs="24" :sm="12" :md="12" :lg="12" :xl="8">
        <el-card class="card-box" :body-style="{ padding: '0px' }" shadow="hover">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png" class="image" />
          <div style="padding: 14px">
            <span>AliPay</span>
            <div>
              <p class="description">那是一种内在的东西， 他们到达不了，也无法触及的</p>
              <div class="time-info">
                <div class="time">几秒前</div>
                <div class="user-list">
                  <ul>
                    <li class="img-item">
                      <span class="img-wrap"
                        ><img src="https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png" alt=""
                      /></span>
                    </li>
                    <li class="img-item">
                      <span class="img-wrap"
                        ><img src="https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png" alt=""
                      /></span>
                    </li>
                    <li class="img-item">
                      <span class="img-wrap"
                        ><img src="https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png" alt=""
                      /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-box {
  .image {
    width: 100%;
    display: block;
  }
  margin-bottom: 16px;
  .description {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  .time-info {
    display: flex;
    .time {
      flex: 1 1;
    }
    .user-list {
      flex: 0 1 auto;
      ul,
      li {
        margin: 0;
        list-style: none;
      }
      .img-item {
        display: inline-block;
        .img-wrap {
          display: inline-block;
          width: 24px;
          height: 24px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
