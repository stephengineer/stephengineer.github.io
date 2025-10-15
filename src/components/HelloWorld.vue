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
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
