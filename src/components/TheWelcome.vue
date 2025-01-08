<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Github</template>

    Projects and codes are available on
    <a href="https://github.com/stephengineer" target="_blank" rel="noopener">Github</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Twitter</template>

    Latest news and short thoughts are available on
    <a href="https://x.com/stephengineers" target="_blank" rel="noopener">Twitter</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Linkedin</template>

    My professional experience is available on
    <a href="https://www.linkedin.com/in/stephengineer" target="_blank" rel="noopener">Linkedin</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contact</template>

    You can contact me by
    <a href="" target="_blank" rel="noopener">zhongqi1112@gmail.com</a>
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Me</template>

    As an individual developer, I rely on community backing for my sustainability. You can buy me a 
    coffee to
    <a href="https://www.buymeacoffee.com/stephengineer" target="_blank" rel="noopener">become a sponsor</a>
  </WelcomeItem>
</template>
