<template>
  <div>
       <About />
    <Card />
  </div>
</template>

<script>
import Card from '@/components/ui/homepage-card.vue'; 
import About from '@/components/ui/homepage-about.vue'; 

export default {
  name: 'Home',
  components: {
    About,
    Card, 
    
  },
};
</script>
