<template lang="html">
  <div class="">
    <div class="top-nav">
      <div class="container">
        <nav class="navbar">
          <h1 class="navbar__logo">Library</h1>

          <div class="navbar__center"></div>

          <div class="navbar__right">
            <ul class="nav-list">
              <li class="nav-list__item">
                <router-link v-bind:to="{ name: 'index' }">All Books</router-link>
              </li>
              <li class="nav-list__item">
                <router-link v-bind:to="{ name: 'new' }">Add Book</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import IndexPage from './index.vue';

export default {
  components: {
    IndexPage
  },
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
