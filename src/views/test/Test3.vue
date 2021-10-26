<template>
  <div>
    <h1>测试页面3</h1>
    <Star />
    <br />
    <hr />
    <input type="text" :value="name" @input="nameChange" />
    <hr />
    请选择学历
    <select :value="level" @change="levelChange">
      <option v-for="item in levelList" :value="item.value" :key="item.value">
        {{ item.label }}
      </option>
    </select>
    已选择学历:{{ level }}
    <hr />
    游泳<input
      type="checkbox"
      :checked="fav.includes('游泳')"
      @change="hobbyChange"
      value="游泳"
    />
    篮球<input
      type="checkbox"
      :checked="fav.includes('篮球')"
      @change="hobbyChange"
      value="篮球"
    />
    足球<input
      type="checkbox"
      :checked="fav.includes('足球')"
      @change="hobbyChange"
      value="足球"
    />
    <hr />

    男<input
      type="radio"
      value="man"
      :checked="gender === 'man'"
      @change="genderChange"
    />
    女<input
      type="radio"
      value="women"
      :checked="gender === 'women'"
      @change="genderChange"
    />
    未知<input
      type="radio"
      value="no"
      :checked="gender === 'no'"
      @change="genderChange"
    />
  </div>
</template>

<script>
import Star from "./components/Star.vue";
export default {
  components: {
    Star,
  },
  data() {
    return {
      name: "jack",
      gender: "",
      level: "",
      fav: ["篮球", "足球"],
      levelList: [
        {
          value: 1,
          label: "高中",
        },
        {
          value: 2,
          label: "大专",
        },
        {
          value: 3,
          label: "本科",
        },
        {
          value: 4,
          label: "硕士",
        },
      ],
    };
  },
  methods: {
    nameChange(e) {
      console.log(e.target.value);
      this.name = e.target.value;
    },
    levelChange(e) {
      this.level = e.target.value;
    },
    hobbyChange(e) {
      console.log(e.target.value);
      const ele = e.target.value;
      !this.fav.includes(ele)
        ? this.fav.push(ele)
        : this.fav.splice(this.fav.indexOf(ele), 1);
      console.log(this.fav);
    },
    genderChange(e) {
      // console.log();
      this.gender = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
