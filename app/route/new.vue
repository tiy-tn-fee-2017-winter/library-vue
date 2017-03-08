<template lang="html">
  <div class="">
    <div class="grid__item grid__item--4 grid__item--center">
      <form class="card" v-on:submit.prevent="save(formValues)">
        <h2 class="card__header">New Book</h2>

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
import { create } from '../action/book';
import store from '../store';

export default {
  data() {
    return {
      formValues: {
        title: '',
        author: '',
        year: '',
      },
    };
  },

  methods: {
    save(data) {
      store.dispatch(create(data)).then(() => {
        // Redirect
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
