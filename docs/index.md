---
title: Clover 精选
layout: home

hero:
  name: ""
  text: ""
  tagline: ""
  actions:
    - theme: brand
      text: 探索工具
      link: /ai-tools

features: []
---

<!-- Hero -->
<div class="hero">
  <div class="hero-badge">CURATED BY CLOVER</div>
  <h1 class="hero-title">
    <span class="hero-line">发现下一个</span>
    <span class="hero-line gradient-text">让你惊艳的工具</span>
  </h1>
  <p class="hero-desc">不废话，只推荐真正好用的。每个工具都经过实测。</p>
  <div class="hero-stats">
    <div class="stat">
      <span class="stat-num">10+</span>
      <span class="stat-label">精选工具</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">0</span>
      <span class="stat-label">付费推广</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">∞</span>
      <span class="stat-label">持续更新</span>
    </div>
  </div>
</div>

<!-- Visual Break -->
<div class="visual-break">
  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" alt="Technology" class="break-image" />
  <div class="break-overlay"></div>
</div>

<!-- Marquee -->
<div class="marquee-container">
  <div class="marquee">
    <span>ChatGPT</span><span class="dot">·</span>
    <span>Claude</span><span class="dot">·</span>
    <span>Perplexity</span><span class="dot">·</span>
    <span>DeepSeek</span><span class="dot">·</span>
    <span>Kimi</span><span class="dot">·</span>
    <span>Cursor</span><span class="dot">·</span>
    <span>Notion AI</span><span class="dot">·</span>
    <span>Gamma</span><span class="dot">·</span>
    <span>通义千问</span><span class="dot">·</span>
    <span>文心一言</span><span class="dot">·</span>
    <span>ChatGPT</span><span class="dot">·</span>
    <span>Claude</span><span class="dot">·</span>
    <span>Perplexity</span><span class="dot">·</span>
    <span>DeepSeek</span><span class="dot">·</span>
    <span>Kimi</span><span class="dot">·</span>
    <span>Cursor</span><span class="dot">·</span>
    <span>Notion AI</span><span class="dot">·</span>
    <span>Gamma</span><span class="dot">·</span>
    <span>通义千问</span><span class="dot">·</span>
    <span>文心一言</span><span class="dot">·</span>
  </div>
</div>

<!-- Why Section -->
<div class="section">
  <div class="section-label">WHY CLOVER</div>
  <h2 class="section-title">为什么做这个站</h2>
  <div class="why-grid">
    <div class="why-card">
      <h3>只选精品</h3>
      <p>每个工具都亲自用过，拒绝云评测。不好用的，我们根本不提。</p>
    </div>
    <div class="why-card">
      <h3>快速上手</h3>
      <p>没有冗长前言，直接告诉你：能干嘛、怎么用、要不要钱。</p>
    </div>
    <div class="why-card">
      <h3>不接广告</h3>
      <p>评价客观，不受商业利益影响。推荐只因为真的好用。</p>
    </div>
  </div>
</div>

<!-- Image Break -->
<div class="visual-break">
  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" alt="Workspace" class="break-image" />
  <div class="break-overlay"></div>
</div>

<!-- CTA -->
<div class="section cta-section">
  <h2 class="cta-title">准备好提升效率了吗</h2>
  <p class="cta-desc">从 AI 工具开始，让你的工作流飞起来。</p>
  <a href="/ai-tools" class="cta-button">查看工具推荐</a>
</div>

<style>
:root {
  --vp-c-brand-1: #10b981;
  --vp-c-brand-2: #059669;
  --vp-c-brand-3: #047857;
}

.dark {
  --vp-c-bg: #ffffff;
  --vp-c-bg-soft: rgba(0,0,0,0.02);
  --vp-c-bg-mute: rgba(0,0,0,0.04);
}

* { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }

/* Hero */
.hero {
  padding: 8rem 2rem 4rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(16,185,129,0.3);
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: #10b981;
  margin-bottom: 2.5rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 1.5rem;
}

.hero-line { display: block; }

.gradient-text {
  background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.2rem;
  color: rgba(0,0,0,0.5);
  font-weight: 300;
  margin: 0 auto 3rem;
  max-width: 500px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-size: 2rem;
  font-weight: 700;
  color: #10b981;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(0,0,0,0.4);
  margin-top: 0.3rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(0,0,0,0.08);
}

/* Visual Break */
.visual-break {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 300px;
  overflow: hidden;
}

.break-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(30%) brightness(0.85);
}

.break-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #ffffff 0%, transparent 30%, transparent 70%, #ffffff 100%);
}

/* Marquee */
.marquee-container {
  overflow: hidden;
  padding: 2.5rem 0;
  border-top: 1px solid rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.03);
  margin: 0 -2rem;
}

.marquee {
  display: flex;
  gap: 1rem;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
  width: max-content;
}

.marquee span {
  font-size: 1.5rem;
  font-weight: 200;
  color: rgba(0,0,0,0.1);
  letter-spacing: 0.05em;
}

.marquee .dot { color: rgba(16,185,129,0.2); }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Sections */
.section {
  padding: 5rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #10b981;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 3rem;
  color: rgba(0,0,0,0.9);
}

/* Why Grid */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.why-card {
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.04);
  background: rgba(0,0,0,0.015);
  transition: all 0.3s ease;
}

.why-card:hover {
  border-color: rgba(16,185,129,0.2);
  transform: translateY(-4px);
  background: rgba(16,185,129,0.03);
}

.why-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: rgba(0,0,0,0.9);
}

.why-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(0,0,0,0.4);
  margin: 0;
}

/* CTA */
.cta-section {
  text-align: center;
  padding: 6rem 2rem;
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
  color: rgba(0,0,0,0.9);
}

.cta-desc {
  font-size: 1.1rem;
  color: rgba(0,0,0,0.4);
  margin: 0 0 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #10b981;
  color: #000;
  border-radius: 100px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #34d399;
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(16,185,129,0.2);
}

@media (max-width: 768px) {
  .hero { padding: 5rem 1.5rem 3rem; }
  .hero-stats { flex-direction: column; gap: 1rem; }
  .stat-divider { width: 40px; height: 1px; }
  .why-grid { grid-template-columns: 1fr; }
  .section { padding: 3rem 1.5rem; }
  .visual-break { height: 200px; }
}
</style>