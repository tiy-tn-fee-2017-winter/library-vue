<template lang="html">
  <div class="grid">
    <div class="grid__item grid__item--4 grid__item--center">
      <form class="card" @submit.prevent="save(formData._id, formData)">
        <h2 class="card__header">Editing {{bookTitle}}</h2>

        <div class="card__content">
          <div class="form-item">
            <label for="">Title</label>
            <input type="text" class="control" placeholder="Title" v-model="formData.title">
          </div>

          <div class="form-item">
            <label for="">Author</label>
            <input type="text" class="control" placeholder="Author" v-model="formData.author">
          </div>

          <div class="form-item">
            <label for="">Year</label>
            <input type="text" class="control" placeholder="Year" v-model="formData.year">
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
import store from '../store';
import { update, findById } from '../action/book';

export default {
  data() {
    return {
      formData: {},
      bookTitle: null,
      books: this.$select('books'),
    };
  },

  mounted() {
    store.dispatch(findById(this.$route.params.id));
  },

  watch: {
    '$route.params.id': 'getBook',
    books: 'getBook'
  },

  methods: {
    getBook() {
      this.formData = this.books.find(({ _id }) => _id === this.$route.params.id) || {};

      if (this.formData) {
        this.bookTitle = this.formData.title;
      }
    },

    save(id, data) {
      store.dispatch(update(id, data)).then(() => {
        this.$router.push({ name: 'index' });
      });
    }
  },
};
</script>
