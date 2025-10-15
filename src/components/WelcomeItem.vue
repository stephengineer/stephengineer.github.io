<template>
  <div class="item">
    <div class="icon-container">
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <h3 class="heading">
        <slot name="heading"></slot>
      </h3>
      <div class="description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
}

.icon-container {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.description p {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .item {
    padding: 1.5rem;
  }
  
  .icon-container {
    width: 50px;
    height: 50px;
  }
  
  .heading {
    font-size: 1.2rem;
  }
}
</style>
