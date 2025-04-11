<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">加入我们</div>
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>招聘信息</h2>

        <h3>招聘人数</h3>
        <ul>
          <li>IVIS日本总公司招聘：20名</li>
          <li>IVIS上海子公司招聘：5名</li>
        </ul>

        <h3>招聘对象</h3>
        <p>
          2024年应届毕业的本科生和研究生，毕业于国内一流大学，拥有一本及以上学历，
          主修计算机科学或相关专业。具备日语基础者优先考虑。
        </p>

        <h3>工作地点</h3>
        <ul>
          <li>前期语言培训在上海进行。</li>
          <li>后期技术相关培训和具体工作地点在日本。</li>
        </ul>

        <h3>工作内容</h3>
        <ol>
          <li>负责软件产品的开发与维护，确保代码质量和系统稳定性。</li>
          <li>参与系统设计，包括功能设计和数据库设计，确保架构的合理性。</li>
          <li>与团队合作，完成模块测试，并协助解决开发过程中的技术问题。</li>
          <li>日语基础有无皆可，愿意接受公司提供的日语培训，并通过相关考核。</li>
          <li>根据项目需求，接受在日本的工作安排，适应跨文化工作环境。</li>
        </ol>

        <h3>任职要求</h3>
        <ol>
          <li>熟练使用 Java 或 Python，具备 Spring、SpringCloud 等框架的应用经验者优先。</li>
          <li>熟悉 SQL Server 或 PostgreSQL 数据库，能够进行数据库设计和优化。</li>
          <li>具备良好的团队合作和沟通能力，能够指导和协调团队成员的工作。</li>
          <li>具备计算机科学或相关专业的学历背景，愿意接受技术培训和能力提升。</li>
          <li>能够接受工作地点在日本，具备良好的跨文化沟通能力和团队合作精神。</li>
        </ol>

        <h3>福利待遇</h3>
        <ul>
          <li>具有竞争力的薪资和福利待遇。（与日本员工同等薪资待遇）</li>
          <li>正式入职后享受与日本员工同等的社保、医保等一系列福利待遇。</li>
          <li>前往日本工作的机会，体验丰富的跨文化工作环境。</li>
          <li>充满活力的团队和开放的工作氛围。</li>
        </ul>

        <!-- <button class="center-block btn btn-warning btn-lg" @click.stop="submitForm">
          投递简历
        </button> -->
      </div>
    </div>
  </div>
</template>

<script setup name="JobChance">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})
function submitForm() {
  window.open('', '')
}
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner_2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  text-align: center;
}

.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all 0.5s ease;
  border: 1px dashed salmon;
  background: #fff;
  border-radius: 12px;
}

.JobChance-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
  margin-bottom: 20px;
}

.JobChance-container h3 {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
}

.JobChance-container p {
  font-size: 16px;
  margin: 10px 0 20px;
  line-height: 1.6;
}

.JobChance-container ol,
.JobChance-container ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

.JobChance-container li {
  font-size: 14px;
  line-height: 2.2;
  margin-bottom: 10px;
}

.center-block {
  display: block;
  margin: 0 auto;
  text-align: center;
}

/* 响应式调整 */
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>