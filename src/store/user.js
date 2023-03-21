import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const count = ref(0);
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo')));

  function increase() {
    count.value++;
  }

  function login(payload) {
    return new Promise((resolve, reject) => {
      login(payload)
        .then((res) => {
          userInfo.value = res.data;
          // 将用户信息保存在localStorage
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  return { count, increase, login };
});
