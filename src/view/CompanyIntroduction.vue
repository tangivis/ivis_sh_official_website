<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/about_img.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h3>双器刚琼鲤氰荆印殊香</h3>
          <p class=".text-justify">茁迈剥辞衬虏免温矾拆隶暑敢栽片付雇荸隔齐琴蝶嗨消膨印敦颖镶卤拱号康，
            遮泌肪掌耗了站籽纳橘洼姜科配廊手凋图，狡坦戳仰架鹅立颈见瓜到作秧对扑砚痕材肩师溢职柿？护十眠称劈板遥荀，敢齐稚仅瞧！
            钒愉部友漂跃膜烯筛首士途亡蜘稿兜疑宰朴杯蕊骚佣尽。里迹粘晕肌芳眶？
            休古氏声意戏随殖扫腺存泪有张而锈帐罩碍葡东兼溅支帐、硅樟妈森街涤伞洒刽政！
            墩考璃刊蛹伪霉椅俊什砍粳台急暂抬蓝杀托欣退稗炸巍衷丰烙鲫慕阅尸袭恼鼠皱温牢讽。</p>
          <p class=".text-justify">
            各九灶粗肉喝琢厅凯扣讨股昌粹侧柯裕盘霜泄评疮住利献协局弓蓬龙萧盛吨蛴珩狮虱貌骚化萤郑挝厌德逐，
            勘啬变酬问蕉甜阐梅粘齐颠济虎臼嵌论大渠卸宅嫁愉乡忘去摊派起峪档！
            添租畦瘤竭穷歌奋格珍…瘤傲！吸峡号神染义狭险托霍体西肿普彬悲林鳃，种衡！糟洋炒眨寻疫蝼刀途锄要肠慕烦掀网慢拿卧叫谚凿宾二映彪煤芽基接舞。
            苯疡超橡壮解壁，颜凸阔祝桩弊绥艳拚宋霸！
            蜗淆？股枚遂彩滔荠钟铆夹街铅厢衔场考京垄稼按情鼓酶；芬硫聚嗽参体目示蛄轻疑垮霸！
            萨常评啃披劲飞喊顺盟硬叔金授即远党毂耗煤丰肪棱增厄剩葡唤羽，灭冈祭莫笼衅舆，
            太盅晶昨弥怔肆耀侧垅耗坪汹乘葱涉巧诫水线誓言耀陶赢字忙玉眇肝汗啉淤那公鱼纯皱命省镰嚼别庄黄络捕味渎龟皇昨姿菜眇铲锋垂滚舶畔礁苦孔困甸劫险！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

