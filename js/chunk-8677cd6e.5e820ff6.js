(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8677cd6e"],{"0a20":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("树形控件")]),s("el-divider"),s("el-divider"),s("h1",[e._v("自定义接口懒加载")]),s("el-button",{attrs:{type:"primary"},on:{click:e.expand}},[e._v("展开")]),s("el-button",{attrs:{type:"primary"},on:{click:e.close}},[e._v("收起")]),s("el-tree",{ref:"treeRef",attrs:{"node-key":"id",props:e.props,"default-expanded-keys":e.defKeys,load:e.loadNode,lazy:"","show-checkbox":""}})],1)},o=[],r=(s("caad"),s("2532"),s("d3b7"),s("a27e")),l=function(e){return r({url:"/getParentTreeNode",method:"GET",params:e})},c={data:function(){return{props:{label:"name",children:"zones",isLeaf:"isLeaf"},checkAll:!1,defKeys:[],isIndeterminate:!1,openTreeKeys:[],openTreeKeys2:[],data:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{children:"children",label:"label"}}},methods:{nodeExpand:function(){this.checkStatus()},loadNode:function(e,t){console.log("node",e),0===e.level?l().then((function(e){console.log("res",e),t(e.data)})):l({nodeId:e.data.oid}).then((function(e){console.log("res",e),t(e.data)}))},openTreeEvent:function(){var e=this.$refs.tree.getCheckedKeys();e.length?this.openTreeKeys=e:this.$message({showClose:!0,message:"请选勾选",type:"warning"})},openTreeEvent2:function(){var e=this.$refs.tree2.getCheckedKeys();console.log("checkKeys",e),e.length?this.openTreeKeys2=e:this.$message({showClose:!0,message:"请选勾选",type:"warning"})},closeTreeEvent:function(){var e=this.$refs.tree.getCheckedKeys();if(console.log("checkKeys",e),e.length){var t=this.$refs.tree.store._getAllNodes();for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(console.log("nodes[i]",t[s]),e.includes(t[s].data.id)&&(t[s].expanded=!1))}else this.$message({showClose:!0,message:"请选勾选",type:"warning"})},closeTreeEvent2:function(){var e=this.$refs.tree2.getCheckedKeys();if(console.log("checkKeys",e),e.length){var t=this.$refs.tree2.store._getAllNodes();for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(console.log("nodes[i]",t[s]),e.includes(t[s].data.id)&&(t[s].expanded=!1))}else this.$message({showClose:!0,message:"请选勾选",type:"warning"})},getCheckedNodes:function(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys:function(){console.log(this.$refs.tree.getCheckedKeys())},setCheckedNodes:function(){this.$refs.tree.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}])},setCheckedKeys:function(){this.$refs.tree.setCheckedKeys([3])},resetChecked:function(){this.$refs.tree.setCheckedKeys([])},handleCheckAllChange:function(e){console.log("val",e),e?this.$refs.tree.setCheckedNodes(this.data):this.$refs.tree.setCheckedNodes([]),this.isIndeterminate=!1},nodeClick:function(e,t,s){console.log("data",e),console.log("node",t),console.log("comp",s)},nodeClick2:function(e,t,s){console.log("data",e.id)},checkStatus:function(){var e=this.$refs.tree.getCheckedKeys();if(!e.length)return this.checkAll=!1,void(this.isIndeterminate=!1);var t=this.$refs.tree.store._getAllNodes(),s=t.every((function(e){return!0===e.checked}));console.log("selectAllFlag",s),s?(this.checkAll=!0,this.isIndeterminate=!1):this.isIndeterminate=!0},nodeCheck:function(e,t,s){console.log("nodeCheck"),this.checkStatus()},expand:function(){console.log("展开事件");var e=this.$refs.treeRef.getCheckedKeys();console.log("checkdNodes",e),this.defKeys=e},close:function(){}}},i=c,d=s("2877"),a=Object(d["a"])(i,n,o,!1,null,"29866763",null);t["default"]=a.exports},2532:function(e,t,s){"use strict";var n=s("23e7"),o=s("e330"),r=s("5a34"),l=s("1d80"),c=s("577e"),i=s("ab13"),d=o("".indexOf);n({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~d(c(l(this)),c(r(e)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,s){var n=s("861d"),o=s("c6b6"),r=s("b622"),l=r("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==o(e))}},"5a34":function(e,t,s){var n=s("da84"),o=s("44e7"),r=n.TypeError;e.exports=function(e){if(o(e))throw r("The method doesn't accept regular expressions");return e}},ab13:function(e,t,s){var n=s("b622"),o=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[o]=!1,"/./"[e](t)}catch(n){}}return!1}}}]);
//# sourceMappingURL=chunk-8677cd6e.5e820ff6.js.map