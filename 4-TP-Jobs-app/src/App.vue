<template>
  <div class="app-container">
    <header class="navbar">
      <h1 class="logo">JobBoard</h1>
      <nav class="nav-links">
        <router-link to="/">Offres d'emploi</router-link>
        <router-link to="/add" class="btn-add">+ Ajouter un emploi</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
