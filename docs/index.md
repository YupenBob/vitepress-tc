---
layout: home
title: Clover 精选

hero:
  name: Clover 精选
  text: 发现下一个让你惊艳的工具
  tagline: 不废话，只推荐真正好用的
  actions:
    - theme: brand
      text: 看 AI 工具推荐 →
      link: /ai-tools
    - theme: alt
      text: 关于
      link: /about

features:
  - icon: 🎯
    title: 只选精品
    details: 每个工具都经过实际使用，拒绝云评测
  - icon: ⚡
    title: 快速上手
    details: 没有冗长前言，直接告诉你怎么用
  - icon: 🔄
    title: 持续更新
    details: 工具圈变化快，我们跟得更快
---

<div class="hero-section">
  <h2>为什么做 Clover 精选？</h2>
  <p>市面上的工具推荐太多了，但大部分都在<strong>凑数</strong>。</p>
  <ul>
    <li>✅ 每个工具都<strong>亲自用过</strong></li>
    <li>✅ 只推荐<strong>免费或免费够用</strong>的</li>
    <li>✅ <strong>不接广告</strong>，评价客观</li>
    <li>✅ <strong>中文界面友好</strong></li>
  </ul>
</div>

<div class="stats-section">
  <div class="stat-card">
    <div class="stat-number">10+</div>
    <div class="stat-label">精选工具</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">0</div>
    <div class="stat-label">付费推广</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">∞</div>
    <div class="stat-label">持续更新</div>
  </div>
</div>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 2rem 0;
  color: white;
}
.hero-section h2 { font-size: 1.8rem; margin-bottom: 1rem; }
.hero-section ul { list-style: none; padding: 0; }
.hero-section li { padding: 0.5rem 0; }
.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}
.stat-card {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
}
@media (max-width: 768px) {
  .stats-section { grid-template-columns: 1fr; }
}
</style>