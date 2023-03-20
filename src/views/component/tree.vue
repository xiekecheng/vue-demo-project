<template>
  <div>
    <h1>树形控件</h1>
    <!-- <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        <el-tree
          ref="tree"
          :data="data"
          show-checkbox
          :default-expanded-keys="openTreeKeys"
          node-key="id"
          highlight-current
          :props="defaultProps"
          @node-expand="nodeExpand"
          @node-click="nodeClick"
          @check-change="nodeCheck"
        >
        </el-tree>

        <div class="buttons">
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="getCheckedKeys">通过 key 获取</el-button>
          <el-button @click="setCheckedNodes">通过 node 设置</el-button>
          <el-button @click="setCheckedKeys">通过 key 设置</el-button>
          <el-button type="primary" @click="openTreeEvent">展开</el-button>
          <el-button type="primary" @click="closeTreeEvent">收起</el-button>
          <el-button @click="resetChecked">清空</el-button>
        </div> -->
    <el-divider></el-divider>
    <!-- <h1>节点懒加载</h1>
        <el-tree
          ref="tree2"
          node-key="id"
          :default-expanded-keys="openTreeKeys2"
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          :expand-on-click-node="false"
          @node-click="nodeClick2"
        >
        </el-tree>
        <el-button type="primary" @click="openTreeEvent2">展开2</el-button>
        <el-button type="primary" @click="closeTreeEvent2">收起2</el-button> -->
    <el-divider></el-divider>

    <h1>自定义接口懒加载</h1>
    <el-button type="primary" @click="expand">展开</el-button>
    <el-button type="primary" @click="close">收起</el-button>
    <el-tree
      ref="treeRef"
      node-key="id"
      :props="props"
      :default-expanded-keys="defKeys"
      :load="loadNode"
      lazy
      show-checkbox
    >
    </el-tree>
  </div>
</template>

<script>
import { getTreeData } from '@/api/tree';

export default {
  data() {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'isLeaf',
      },
      checkAll: false,
      defKeys: [],
      isIndeterminate: false,
      openTreeKeys: [],
      openTreeKeys2: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  methods: {
    // 节点展开触发事件
    nodeExpand() {
      this.checkStatus();
    },
    loadNode(node, resolve) {
      console.log('node', node);
      if (node.level === 0) {
        getTreeData().then((res) => {
          console.log('res', res);
          resolve(res.data);
        });
      } else
        getTreeData({ nodeId: node.data.oid }).then((res) => {
          console.log('res', res);
          resolve(res.data);
        });
    },
    // loadNode(node, resolve) {
    //   if (node.level === 0) {
    //     console.log('node.level', node.level);
    //     return resolve([
    //       { id: 1, name: 'region1' },
    //       { id: 2, name: 'region2' },
    //       { id: 3, name: 'region3' },
    //     ]);
    //   }
    //   if (node.level === 1) {
    //     console.log('node.level', node.level);
    //     const data = [
    //       { id: 4, name: '深圳' },
    //       { id: 5, name: '广州' },
    //     ];
    //     setTimeout(() => {
    //       console.log('setTimeout');
    //       return resolve(data);
    //     }, 3000);
    //   }
    //   if (node.level === 2) {
    //     console.log('node.level', node.level);
    //     const data = [
    //       { id: 6, name: '宝安' },
    //       { id: 7, name: '罗湖' },
    //     ];
    //     setTimeout(() => {
    //       console.log('setTimeout');
    //       return resolve(data);
    //     }, 3000);
    //   }
    //   if (node.level > 2) {
    //     console.log('node.level', node.level);
    //     return resolve([]);
    //   }
    // },
    // 展开事件
    openTreeEvent() {
      const checkKeys = this.$refs.tree.getCheckedKeys();
      if (!checkKeys.length) {
        this.$message({
          showClose: true,
          message: '请选勾选',
          type: 'warning',
        });
        return;
      }
      this.openTreeKeys = checkKeys;
    },
    // 展开事件2
    openTreeEvent2() {
      const checkKeys = this.$refs.tree2.getCheckedKeys();
      console.log('checkKeys', checkKeys);
      if (!checkKeys.length) {
        this.$message({
          showClose: true,
          message: '请选勾选',
          type: 'warning',
        });
        return;
      }
      this.openTreeKeys2 = checkKeys;
    },
    // 收起事件
    closeTreeEvent() {
      const checkKeys = this.$refs.tree.getCheckedKeys();
      console.log('checkKeys', checkKeys);
      if (!checkKeys.length) {
        this.$message({
          showClose: true,
          message: '请选勾选',
          type: 'warning',
        });
        return;
      }
      const nodes = this.$refs.tree.store._getAllNodes();
      // 或者方法二
      // const nodes = this.$refs.tree.store.nodesMap
      for (let i in nodes) {
        if (Object.prototype.hasOwnProperty.call(nodes, i)) {
          console.log('nodes[i]', nodes[i]);
          if (checkKeys.includes(nodes[i].data.id)) {
            nodes[i].expanded = false;
          }
        }
      }
    },
    // 收起事件2
    closeTreeEvent2() {
      const checkKeys = this.$refs.tree2.getCheckedKeys();
      console.log('checkKeys', checkKeys);
      if (!checkKeys.length) {
        this.$message({
          showClose: true,
          message: '请选勾选',
          type: 'warning',
        });
        return;
      }
      const nodes = this.$refs.tree2.store._getAllNodes();
      // 或者方法二
      // const nodes = this.$refs.tree.store.nodesMap
      for (let i in nodes) {
        if (Object.prototype.hasOwnProperty.call(nodes, i)) {
          console.log('nodes[i]', nodes[i]);
          if (checkKeys.includes(nodes[i].data.id)) {
            nodes[i].expanded = false;
          }
        }
      }
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: '二级 2-1',
        },
        {
          id: 9,
          label: '三级 1-1-1',
        },
      ]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
    handleCheckAllChange(val) {
      console.log('val', val);
      if (val) {
        this.$refs.tree.setCheckedNodes(this.data);
      } else {
        this.$refs.tree.setCheckedNodes([]);
      }
      this.isIndeterminate = false;
    },
    // 节点点击事件
    nodeClick(data, node, comp) {
      console.log('data', data);
      console.log('node', node);
      console.log('comp', comp);
    },
    // 节点点击事件
    nodeClick2(data, node, comp) {
      console.log('data', data.id);
      // console.log('node', node);
      // console.log('comp', comp);
    },
    // 全选状态
    checkStatus() {
      const checkKeys = this.$refs.tree.getCheckedKeys();
      // 未选中节点
      if (!checkKeys.length) {
        this.checkAll = false;
        this.isIndeterminate = false;
        return;
      }
      // 判断是否全选
      const nodes = this.$refs.tree.store._getAllNodes();
      const selectAllFlag = nodes.every((item) => {
        return item.checked === true;
      });
      console.log('selectAllFlag', selectAllFlag);
      if (!selectAllFlag) {
        // 未全选
        this.isIndeterminate = true;
      } else {
        this.checkAll = true;
        this.isIndeterminate = false;
      }
    },
    // 节点选中事件
    nodeCheck(data1, data2, data3) {
      console.log('nodeCheck');
      this.checkStatus();
      // const halfCheckedNodes = this.$refs.tree.getHalfCheckedNodes();
      // this.isIndeterminate = halfCheckedNodes.length ? true : false;

      // const nodes = this.$refs.tree.store._getAllNodes();
      // console.log('nodes', nodes);
      // 是否全选
      // const selectAllFlag = nodes.every((item) => {
      //   return item.checked === true;
      // });

      // 或者方法二
      // const nodes = this.$refs.tree.store.nodesMap
      // for (let i in nodes) {
      //   if (Object.prototype.hasOwnProperty.call(nodes, i)) {
      //     console.log('nodes[i]', nodes[i]);
      //     if (checkKeys.includes(nodes[i].data.id)) {
      //       nodes[i].expanded = false;
      //     }
      //   }
      // }

      // console.log('data1,data2,data3', data1, data2, data3);
      // const checkKeys = this.$refs.tree.getCheckedKeys();
      // console.log('checkKeys', checkKeys);
      // console.log('checkKeys.length === this.data.length', checkKeys.length, this.data.length);
      // 未勾选
      // if (!checkKeys.length) {
      //   this.checkAll = false;
      //   this.isIndeterminate = false;
      // } else if (checkKeys.length === this.data.length) {
      // 	// 全选状态
      //   this.checkAll = true;
      //   // this.isIndeterminate=true
      // } else {
      //   // this.checkAll = true;
      //   this.isIndeterminate = true;
      // }
      // console.log(data);
      // let arr = []
      // data.array.forEach(element => {
      // 	arr.push(element.id)
      // });
      // this.openTreeKeys = arr
      // this.openTreeKeys.indexOf(data.id)
      // this.$refs.tree.getCheckedNodes()
      // this.openTreeKeys.push(data.id)
      // this.openTreeKeys.push(data.id)
      // console.log(this.openTreeKeys);
    },
    // 展开节点
    expand() {
      console.log('展开事件');
      // 获取当前选中的节点
      const checkdNodes = this.$refs.treeRef.getCheckedKeys();
      console.log('checkdNodes', checkdNodes);
      this.defKeys = checkdNodes;
    },
    close() {},
    // openTreeEvent2() {},
    // closeTreeEvent2() {},
  },
};
</script>
