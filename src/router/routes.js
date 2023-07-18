// 页面侧边栏菜单按钮路由
const routes = [
  {
    menu: 'DashBoard',
    icon: 'Odometer',
    index: '0',
    content: [
      {
        menu: '分析页',
        to: '/dashboard/analysis',
        index: '0-1',
      },
      {
        menu: '监控页',
        to: '/dashboard/monitor',
        index: '0-2',
      },
      {
        menu: '工作台',
        to: '/dashboard/workplace',
        index: '0-3',
      },
    ],
  },

  {
    menu: '表单页',
    icon: 'Edit',
    index: '1',
    content: [
      {
        menu: '基础表单',
        to: '/form/basic-form',
        index: '1-1',
      },
      {
        menu: '分步表单',
        to: '/form/step-form',
        index: '1-2',
      },
      {
        menu: '高级表单',
        to: '/form/advanced-form',
        index: '1-3',
      },
    ],
  },

  {
    menu: '列表页',
    icon: 'Grid',
    index: '2',
    subMenu: [
      {
        menu: '搜索列表',
        icon: 'Grid',
        index: '2-1',
        content: [
          {
            menu: '搜索列表（文章）',
            to: '/list/search-list-article',
            index: '2-1-1',
          },
          {
            menu: '搜索列表（项目）',
            to: '/list/search-list-project',
            index: '2-1-2',
          },
          {
            menu: '搜索列表（应用）',
            to: '/list/search-list-application',
            index: '2-1-3',
          },
        ],
      },
    ],
    content: [
      {
        menu: '查询列表',
        to: '/list/table-list',
        index: '2-2',
      },
      {
        menu: '标准列表',
        to: '/list/basic-list',
        index: '2-3',
      },
      {
        menu: '卡片列表',
        to: '/list/card-list',
        index: '3-4',
      },
    ],
  },

  {
    menu: '详情页',
    icon: 'ScaleToOriginal',
    index: '3',
    content: [
      {
        menu: '基础详情页',
        to: '/profile/basic',
        index: '3-1',
      },
      {
        menu: '高级详情页',
        to: '/profile/advanced',
        index: '3-2',
      },
    ],
  },

  {
    menu: '结果页',
    icon: 'CircleCheck',
    index: '4',
    content: [
      {
        menu: '成功页',
        to: '/result/success',
        index: '4-1',
      },
      {
        menu: '失败页',
        to: '/result/fail',
        index: '4-2',
      },
    ],
  },
  {
    menu: '异常页',
    icon: 'WarnTriangleFilled',
    index: '5',
    content: [
      {
        menu: '403',
        to: '/exception/403',
        index: '5-1',
      },
      {
        menu: '404',
        to: '/exception/404',
        index: '5-2',
      },
      {
        menu: '500',
        to: '/exception/500',
        index: '5-3',
      },
    ],
  },
  {
    menu: '个人页',
    icon: 'User',
    index: '6',
    content: [
      {
        menu: '个人中心',
        to: '/account/center',
        index: '6-1',
      },
      {
        menu: '个人设置',
        to: '/account/settings',
        index: '6-2',
      },
      {
        menu: '添加用户',
        to: '/account/addUser',
        index: '6-3',
      },
    ],
  },
  {
    menu: '图形编辑器',
    icon: 'EditPen',
    index: '7',
    content: [
      {
        menu: '流程编辑器',
        to: '/editor/flow',
        index: '7-1',
      },
      {
        menu: '脑图编辑器',
        to: '/editor/mind',
        index: '7-2',
      },
      {
        menu: '拓扑编辑器',
        to: '/editor/koni',
        index: '7-3',
      },
    ],
  },
  {
    menu: '组件',
    icon: 'Menu',
    index: '8',
    content: [
      {
        menu: '富文本编辑器',
        to: '/component/richtext',
        index: '8-1',
      },
      {
        menu: '树形控件',
        to: '/component/tree',
        index: '8-2',
      },
      {
        menu: 'SplitPane',
        to: '/component/split-pane',
        index: '8-3',
      },
      {
        menu: '文件上传',
        to: '/component/file-upload',
        index: '8-4',
      },
    ],
  },
];

export default routes;
