<template>
  <nav class="navbar-wrapper">
    <div class="navbar">
      <a href="#" class="logo">Ken</a>

        <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'PortfolioNavbar',
};
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 14px 32px;
  border-radius: 999px;
  background:#445d48;
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    font-family: "Inter", sans-serif;
   
}

.logo {
   margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #fafafa;
    text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  position: relative;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #fafafa;
  transition: color 0.2s ease, transform 0.2s ease;
}

.nav-links a:hover {
  color: #111827;
  transform: translateY(-1px);
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #111827;
  transition: width 0.25s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>