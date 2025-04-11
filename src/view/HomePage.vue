<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper
      id="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      lazy
      loop
      autoplay
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide
        class="banner-swiper"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
        <div class="swiper-lazy-preloader"></div>
        <div class="swiper-slide-title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 大数据管理系统 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive"
            src="@/assets/img/img1.png"
            alt="大数据管理系统"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">
            绳家枫钢束擦嘱浑蹄简出满适矩问壶靶啦
            <small>/ Lorem ipsum dolor sit amet</small>
          </h2>
          <p>
            同矩去与人才剧院参谋长想，改了一了。飞速的以中是、的根据知道提出地。巩固是灵活性所小经验。科学院做成的，换的呀的。都了能够下来，所以里面呢指示教材了？为物质地点器官上交从如！斗地类说出地表城市透明，也看造成黑色，不对漂亮之发现和一早的等着，的水平了！
          </p>
          <p>
            党党络宋曼赫。胺耕佛鹿凑死剂走导险账岛唇。钨陆咸茧厚丢词丹孢菱感佩尤食归潭乖玛耦杭钉前牌男需。
            压坏碗改劈晕姚功英世。我泊遣言遣鲤，谋宴洁三…柿薄。
            蛇社甚浇蔡污蹈矾属铅磺喂求院贬喂简垃迈希遇银燕反脂幼造鳃戴炸淘裕振坦惧账项耽侨班畏芽际傍砧场隆泥旗潭俄毁昂躯占蛀伯墒栗？杏坚打启耐扳缆啊？
          </p>
          <h2 class="bigData-device">felis tempus volutpat &nbsp; 谨星逃腔墨证退蛄</h2>
          <!-- <a href="javascript:;" class="btn btn-lg btn-block btn-info"
            >联系我们</a
          > -->
        </div>
      </div>
    </div>

    <!-- 标语 slogan -->
    <div id="contactUs" class="container-fuild 棱索漆、镗撞夯遂料text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>标语 slogan</h1>
        <h3></h3>
        <!-- <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >
          联系我们
        </button> -->
        <!-- <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div> -->
      </div>
    </div>

    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">漠版旬游京骄敏</p>
        <!-- 固定背景的包裹层 -->
        <div class="customer-wrapper">
          <swiper
            class="swiper-container customer-swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            navigation
            loop
            autoplay
            :pagination="{ clickable: true }"
          >
            <swiper-slide
              class="swiper-slide customer-block"
              v-for="(item, index) in customerList"
              :key="index"
            >
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo" />
              </div>
              <div class="customer-content1">
                <small>{{ item.content }}</small>
              </div>
              <div class="customer-content2">{{ item.title }}</div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>庇绘筛蛙并皇意衣</p>
          <p>metus non iaculis imperdiet</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item, index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
            >
              <img class="center-block" :src="item.logo" alt="logo" />
              <p class="text-center">{{ item.title }}</p>
              <div
                class="text-center"
                v-html="item.content"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from 'wow.js'
import { getCurrentInstance, onMounted } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.jpg'

import ivisjp_logo from '@/assets/img/ivisjp_logo.jpg'
import logo_hp from '@/assets/img/ivisjp_logo.jpg'
import logo_kk from '@/assets/img/ivisjp_logo.jpg'
import logo_toyota from '@/assets/img/ivisjp_logo.jpg'

import img_computer from '@/assets/img/computer.png'

const swiperList = [
  {
    img: banner1,
    title: '标语 slogan1',
    content: '宣传简介标语 slogan1 宣传简介标语 slogan1'
  },
  {
    img: banner2,
    title: '标语 slogan2',
    content: '宣传简介标语 slogan2 宣传简介标语 slogan2'
  },
  {
    img: banner1,
    title: '标语 slogan3',
    content: '宣传简介标语 slogan3 宣传简介标语 slogan3'
  },
  {
    img: banner2,
    title: '标语 slogan4',
    content: '宣传简介标语 slogan4 宣传简介标语 slogan4'
  }
]

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]

const customerList = [
  {
    logo: ivisjp_logo,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: ivisjp_logo,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: ivisjp_logo,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: ivisjp_logo,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  },
  {
    logo: ivisjp_logo,
    title:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
    content:
      '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。'
  }
]

const serverList = [
  {
    logo: img_computer,
    title: '核心优势 1',
    content: '<p>济稍文邦趁棱索漆、镗撞夯遂料必鼻锡歼辟锄抗终偏萝蛾里亚功满</p>刺膊驶菇蹈淋簧垒绝杀屋旋磷屑录刊解珍丈中。'
  },
  {
    logo: img_computer,
    title: '核心优势 2',
    content: '<p>锁埔法侯姐饰枷闭丸恶疮卟脊盏恼摩揭创镍到昏</p>佛许冒镦砌稳夫雄圣称龚侣仍'
  },
  {
    logo: img_computer,
    title: '核心优势 3',
    content: '<p>幻腥拍龟拱服靳摸补总坑搭插煤腋</p>悔够姆想与愧刀肿…'
  },
  {
    logo: img_computer,
    title: '核心优势 4',
    content: '<p>越扫脏喘卡适涝稗文某柏去沿住</p>欢喉敛蒋丹天丰突狱瓜车疲挽'
  }
]

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2 的 this
onMounted(() => {
  // console.log('mounted', proxy)
  // console.log(proxy.$wow, '------')
  /* wowjs 动画 */
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 600px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 标语 slogan */
#contactUs {
  color: #fff;
  height: 400px;
  background: url('../assets/img/contact_us_bg.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url('../assets/img/weixin.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url('../assets/img/weibo.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url('../assets/img/twitter.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

/* 添加一个固定背景的容器 */
.customer-wrapper {
  background: #fff;       /* 固定白色背景 */
  padding: 30px 30px;     /* 内边距，根据需要调整 */
  min-height: 200px;      /* 设置最小高度，保证背景显示 */
}

/* 移除客户评价 slide 上的背景设置 */
#customer .swiper-slide.customer-block,
#customer .swiper-slide-duplicate.customer-block {
  background: transparent !important;
  /* 可保留内边距设定如果需要，不过通常由外层容器来控制 */
  padding: 0;
}

#customer .customer-logo img {
  height: 94px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #000000;
}

#customer .customer-content2 {
  padding-top: 20px;
}

/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
  height: 300px;
  overflow: hidden;
}

#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}

#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }

  #whyChooseUs .server-wrapper {
    margin-bottom: 8px;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>