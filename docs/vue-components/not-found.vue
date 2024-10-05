<template>
  <div class="NotFound">
    <p class="code">404</p>
    <h1 class="title">页面不存在</h1>
    <div class="divider"></div>
    <blockquote class="quote">
      可能的原因：
      <ul>
        <li>• 路径输入错误</li>
        <li>• 作者粗心写错</li>
      </ul>
    </blockquote>
    <div class="action">
      <FeedbackButton />
    </div>
  </div>
</template>

<script setup>
import FeedbackButton from "./feedback-button.vue";
</script>

<style lang="scss" scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}
.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: left;
  align-items: center;
}

.action {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link {
  display: inline-block;
  background: var(--vp-c-brand-3);
  color: #fff;
  border-radius: 16px;
  padding: 6px 20px;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.25s, color 0.25s;
  margin-bottom: 10px;
}
.link:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}
</style>
