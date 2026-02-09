<template>
  <nav class="navbar-wrapper">
    <div class="navbar">
      <a href="#" class="logo">Ken</a>

      <ul class="nav-links">
        <li>
          <router-link to="/">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3l10 9h-3v9h-6v-6h-2v6H5v-9H2z"/>
              </svg>
            </span>
            <span class="text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 6h12v2H3V9zm0 6h18v2H3v-2zm0 6h12v2H3v-2z"/>
              </svg>
            </span>
            <span class="text">Projects</span>
          </router-link>
        </li>
        <li>
          <a href="#contact">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8V7l-3 2-2-2-3 2V7H6v10h12V8z"/>
              </svg>
            </span>
            <span class="text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PortfolioNavbar"
}
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
  padding: 15px 36px;
  border-radius: 999px;
  background: linear-gradient(180deg, #435f4d, #2a3e32);
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.55),
              inset 0 1px 0 rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(14px);
  font-family: "Inter", sans-serif;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  color: #fafafa;
  letter-spacing: 0.4px;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: flex;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #fafafa;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background-color: #e5ffed;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #e5ffed;
  transform: translateY(-2px) scale(1.05);
}

.nav-links a:hover::after {
  width: 100%;
}

.icon {
  display: none;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .navbar-wrapper {
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
  }

  .navbar {
    border-radius: 0;
    justify-content: space-around;
    padding: 10px 0;
    gap: 0;
    box-shadow: 0 -10px 25px rgba(0,0,0,0.5);
  }

  .nav-links {
    gap: 0;
    flex: 1;
    justify-content: space-around;
  }

  .nav-links a {
    flex-direction: column;
    font-size: 12px;
  }

  .icon {
    display: flex;
    margin-bottom: 4px;
  }

  .nav-links a::after {
    display: none;
  }
}
</style>
