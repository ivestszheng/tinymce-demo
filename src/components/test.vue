<!--
 * @Descripttion:
 * @Date: 2021-08-09 15:47:16
 * @LastEditTime: 2021-08-09 15:47:18
-->
<template>
  <div class="components-container">
    <aside>
      富文本是管理后端的一个核心特性，但同时它也是一个有很多坑的地方。在选富文本的过程中，我也走了很多弯路。市面上常见的富文本基本都用上了，我最终选择了Tinymce。请参阅更详细的富文本比较和介绍。
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html">文档</a>
    </aside>
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
  import Tinymce from '@/components/Tinymce'
    export default {
      name: "test",
      components: { Tinymce },
      data() {
        return {
          content:'请输入内容'
        }
      }
    }
</script>

<style scoped>
  .editor-content{
    margin-top: 20px;
  }
</style>
