<template>
  <div id="ContactUs">
    <!-- 顶部 Banner 区域 -->
    <div class="header">
      <h1>联系我们</h1>
      <p>欢迎您随时联系我们，期待与您合作！</p>
    </div>

    <!-- 联系信息区域 -->
    <div class="contact-container">
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <div class="contact-detail">
          <span>公司地址:</span>
          {{ address }}
        </div>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone-alt"></i>
        <div class="contact-detail">
          <span>联系电话:</span>
          {{ phone }}
        </div>
      </div>
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <div class="contact-detail">
          <span>电子邮箱:</span>
          {{ email }}
        </div>
      </div>
      <div class="contact-item">
        <i class="fas fa-clock"></i>
        <div class="contact-detail">
          <span>工作时间:</span>
          周一至周五 9:00 - 18:00
        </div>
      </div>
      <!-- 社交媒体链接，可根据需要删除或修改 -->
      <!-- <div class="social">
        <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
// 该组件无需业务逻辑，只用于展示联系信息
const address = import.meta.env.VITE_APP_ADDRESS
const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
</script>

<style scoped>
/* 基本重置 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #f7f7f7;
  color: #333;
}

/* 顶部 Banner 样式 */
.header {
  background: url('@/assets/img/banner_1.jpg') center center / cover no-repeat;
  text-align: center;
  padding: 60px 20px;
  color: #fff;
}

.header h1 {
  font-size: 48px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.header p {
  font-size: 20px;
  margin-top: 10px;
}

/* 联系信息容器 */
.contact-container {
  max-width: 800px;
  background: #fff;
  margin: 60px auto;
  /* padding: 30px; */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* 每行一条联系信息 */
.contact-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item i {
  font-size: 40px;
  width: 60px;
  text-align: center;
  color: #2c3e50;
}

.contact-detail {
  flex: 1;
  font-size: 20px;
  line-height: 1.4;
}

.contact-detail span {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

/* 社交链接 */
.social {
  text-align: center;
  margin-top: 30px;
}

.social a {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
  background: #2c3e50;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  transition: background 0.3s;
}

.social a:hover {
  background: #1a242f;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 36px;
  }

  .contact-detail {
    font-size: 18px;
  }
}
</style>