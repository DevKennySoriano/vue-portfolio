<template>
  <div>
       <About />
    <Card />
    <Edu />
    <Tech />
      <Cert />
       <End />
  </div>
</template>

<script>
import Card from '@/components/ui/homepage-card.vue'; 
import About from '@/components/ui/homepage-about.vue'; 
import Edu from '@/components/ui/homepage-educational.vue'; 
import Tech from '@/components/ui/homepage-techstack.vue'; 
import Cert from '@/components/ui/homepage-certificates.vue'; 
import End from '@/components/ui/homepage-end.vue'; 

export default {
  name: 'Home',
  components: {
    About,
    Card,
    Edu,
    Tech,
    Cert,
    End,
    
  },
};
</script>
