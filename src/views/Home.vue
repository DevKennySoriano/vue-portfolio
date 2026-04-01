<template>
  <div>
       <About />
    <Card />
    <Experience />
    <Edu />
    <Tech />
      <Cert />
       <End />
  </div>
</template>

<script>
import Card from '@/components/ui/homepage-card.vue'; 
import About from '@/components/ui/homepage-about.vue'; 
import Experience from '@/components/ui/homepage-experience.vue'; 
import Edu from '@/components/ui/homepage-educational.vue'; 
import Tech from '@/components/ui/homepage-techstack.vue'; 
import Cert from '@/components/ui/homepage-certificates.vue'; 
import End from '@/components/ui/homepage-end.vue'; 

export default {
  name: 'Home',
  components: {
    About,
    Card,
    Experience,
    Edu,
    Tech,
    Cert,
    End,
    
  },
};
</script>
