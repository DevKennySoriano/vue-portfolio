<template>
  <div>
      <Content />
      <Brand />

  </div>
</template>

<script>
import Content from '@/components/ui/projects-content.vue'; 
import Brand from '@/components/ui/projects-branding.vue'; 


export default {
  name: 'Home',
  components: {
    Content,
    Brand,
  },
};
</script>
