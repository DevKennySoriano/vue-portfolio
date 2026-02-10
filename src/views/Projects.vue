<template>
  <div>
      <Content />
      <Brand />
      <End/>

  </div>
</template>

<script>
import Content from '@/components/ui/projects-content.vue'; 
import Brand from '@/components/ui/projects-branding.vue'; 
import End from '@/components/ui/projects-end.vue'; 


export default {
  name: 'Home',
  components: {
    Content,
    Brand,
    End,
  },
};
</script>
