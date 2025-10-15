<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I am a machine learning engineer at
      <a href="https://deeplang.ai/" target="_blank" rel="noopener">DeepLang AI,</a> incubated by
      <a href="https://nlp.csai.tsinghua.edu.cn/" target="_blank" rel="noopener">THUNLP</a>.
      I focus on generative models and applied AIGC, with extensive experience in natural language processing and deep learning.
      Former professor of computer science with a passion for advancing AI research and education.
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  animation: fadeInUp 0.8s ease-out;
}

h1 {
  font-weight: 700;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

h3 {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  
  h3 {
    font-size: 1.4rem;
  }
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
  
  h1 {
    font-size: 4.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
