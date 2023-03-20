import Mock from 'mockjs';

Mock.mock('/product/search', {
  ret: 0,
  data: {
    mtime: '@datetime',
    'score|1-800': 800,
    'rank|1-100': 80,
    nickname: '@cname',
  },
});
