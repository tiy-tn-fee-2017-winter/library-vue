<template lang="html">
  <div class="">
    <div class="grid__item grid__item--4 grid__item--center">
      <form class="card" v-on:submit.prevent="save(formValues)">
        <h2 class="card__header">Edit Book</h2>
        <div class="card__content">
          <div class="form-item">
            <label for="">Title</label>
            <input type="text" class="control" placeholder="Title" v-model="formValues.title" name="title">
          </div>

          <div class="form-item">
            <label for="">Author</label>
            <input type="text" class="control" placeholder="Author" v-model="formValues.author" name="author">
          </div>

          <div class="form-item">
            <label for="">Year</label>
            <input type="text" class="control" placeholder="Year" v-model="formValues.year" name="year">
          </div>
        </div>

        <div class="card__actions">
          <a href="/" class="button button--back">Back</a>

          <button class="button button--primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { findById, update } from '../action/book';
import store from '../store';

export default {
  data() {
    return {
      formValues: {
        title: '',
        author: '',
        year: '',
      },
      // Updates the local "books" data value based on "books" in the redux state
      books: this.$select('books'),
    };
  },

  mounted() {
    // Load a book based on it's id
    // Get the id from the current route ($route)
    store.dispatch(findById(this.$route.params.id));
  },

  // Fire methods when a value changes in the current component's data
  watch: {
    books: 'getBook',
  },

  methods: {
    // Find the current book based on the route id
    // from the 'books' array
    getBook() {
      // Find the first book in the book array where...
      // The book._id is equal to the id from the route
      this.formValues = this.books.find(book => book._id === this.$route.params.id);
    },

    save(data) {
      store.dispatch(update(data._id, data)).then(() => {
        // Redirect
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
