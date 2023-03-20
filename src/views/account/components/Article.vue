<template>
  <div>
    <h1>Article</h1>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in cities" :key="city" :label="city">{{
        city
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    const cityOptions = ['上海', '北京', '广州', '深圳']
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
    }
  },
  created() {
    console.log('Article created')
  },
}
</script>
