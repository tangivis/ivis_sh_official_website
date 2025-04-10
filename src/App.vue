<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
</script>

<template>
  <div class="layout">
    <Header />

    <main class="content">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view />
    </main>

    <Footer />
    <GoTop />
  </div>
</template>

<style>
/* 外层布局容器，撑满整页高度 */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 至少和视口一样高 */
}

/* 主内容区域自动填充剩余空间 */
.content {
  flex: 1;
}
</style>