<template lang="html">
  <div class="">
    <div class="grid">
      <div class="grid__item grid__item--4 grid__item--center">
        <div class="card">
          <h2 class="card__header">Book Library</h2>

          <ul class="card__collection collection">
            <li v-for="book in books" class="collection__item">
              <div class="book-item">
                <div class="row">
                  <div class="row__left">
                    <div class="book-item__info">
                      <h3 class="book-item__title">{{book.title}}</h3>
                      <h4 class="book-item__author">{{book.author}}</h4>
                    </div>
                  </div>
                  <div class="row__right">
                    <p class="book-item__edit">
                      <router-link v-bind:to="{ name: 'edit', params: { id: book._id } }">Edit</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../action/book';

export default {
  // Defining what data is available to our template
  // And what Vue.js should listen for changes in our data
  data() {
    return {
      books: this.$select('books'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
