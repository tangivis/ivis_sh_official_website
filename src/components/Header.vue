<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航 logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/ivisjp_logo.jpg" />
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name, item.path)"
        >
          <span class="nav-text">{{ item.name }}</span>
          <span v-if="item.children.length > 0" class="glyphicon glyphicon-menu-down"></span>
          <i class="underline"></i>
          <!-- 二级导航：点击子菜单时阻止 li 的点击 -->
          <dl v-if="item.children.length > 0">
            <dt v-for="(child, n) in item.children" :key="n">
              <span @click.stop="navClickChild(child.path)">{{ child.name }}</span>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/ivisjp_logo.jpg" alt="logo" />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item.name, item.path)"
            data-toggle="collapse"
            data-target="#menu"
          >
            {{ item.name }}
            <i class="underline"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function updateNavFromRoute() {
  // 根据当前 route.path 匹配 navList 中的项
  const index = navList.findIndex(item => item.path === route.path)
  if (index !== -1) {
    navIndex.value = index
    menuName.value = navList[index].name
    sessionStorage.setItem('navIndex', index)
  }
}

// 初始化时调用
onMounted(() => {
  updateNavFromRoute()
})

// 监听路由变化，更新 navIndex
watch(
  () => route.path,
  (newPath, oldPath) => {
    updateNavFromRoute()
  }
)

const navIndex = ref(sessionStorage.getItem('navIndex') ?? 0)
const menuName = ref('首页')

const menuClass = ref('glyphicon glyphicon-menu-down')
const navList = [
  {
    name: '首页',
    path: '/',
    children: []
  },
  {
    name: '公司介绍',
    path: '/companyintroduction',
    children: []
  },
  // {
  //   name: '软件产品',
  //   path: '/software',
  //   children: [
  //     {
  //       name: '智能小镇管理系统',
  //       path: '/software/smartTown'
  //     },
  //     {
  //       name: '大数据管理系统',
  //       path: '/software/bigData'
  //     }
  //   ]
  // },
  {
    name: '相关服务',
    path: '/service',
    children: []
  },
  {
    name: '工作机会',
    path: '/jobchance',
    children: []
  },
  {
    name: '联系我们',
    path: '/contactus',
    children: []
  }
]

// function navClick(index, name) {
//   navIndex.value = index
//   sessionStorage.setItem('navIndex', index)
//   menuName.value = name
// }
// function menuClick() {
//   if (menuClass.value == 'glyphicon glyphicon-menu-down') {
//     menuClass.value = 'glyphicon glyphicon-menu-up'
//   } else {
//     menuClass.value = 'glyphicon glyphicon-menu-down'
//   }
// }

function navClick(index, name, path) {
  navIndex.value = index
  sessionStorage.setItem('navIndex', index)
  menuName.value = name
  router.push(path)
}

function menuClick() {
  menuClass.value =
    menuClass.value === 'glyphicon glyphicon-menu-down'
      ? 'glyphicon glyphicon-menu-up'
      : 'glyphicon glyphicon-menu-down'
}
</script>

<style scoped>
/* 顶部 */
#header {
  background: #f4f4f4;
  transition: all ease 0.6s;
}

#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}

/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}

/* 导航栏 */
#header .header-nav {
  height: 110px;
}

/* 导航栏 logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}

/* 导航栏 logo 图片 */
#header .header-nav .header-nav-logo img {
  width: 95px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}

#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: right;
  margin: 0;
  max-width: 800px;
}

/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}

/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  text-decoration: none;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}

/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #1e73be;
  text-decoration: none;
  border-bottom: 2px solid #1e73be;
}

/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}

/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}

#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}

/* 针对 li 内部的下划线 */
#header .header-nav .header-nav-wrapper > li .underline {
  display: block;
  position: absolute;
  bottom: 18px;   /* 调整这里：将 -2px 改为 0，或根据需要调整为 -1px 等 */
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}

/* 鼠标悬停时（或处于 active 状态）显示下划线 */
#header .header-nav .header-nav-wrapper > li:hover .underline,
#header .header-nav .header-nav-wrapper > li.active .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}

/* 同时确保 li 内显示文本的 span 的样式 */
#header .header-nav .header-nav-wrapper > li .nav-text {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
  cursor: pointer;
}

/* 鼠标悬停时改变文字颜色 */
#header .header-nav .header-nav-wrapper > li:hover .nav-text {
  color: #1e73be;
}

@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }

  /* 导航栏 logo 容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }

  /* 导航栏 logo 图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }

  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }

  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }

  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>