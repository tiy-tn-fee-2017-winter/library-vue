<template lang="html">
  <div class="">
    <div class="grid__item grid__item--4 grid__item--center">
      <form class="card">
        <h2 class="card__header">New Book</h2>

        <div class="card__content">
          <div class="form-item">
            <label for="">Title</label>
            <input type="text" class="control" placeholder="Title">
          </div>

          <div class="form-item">
            <label for="">Author</label>
            <input type="text" class="control" placeholder="Author">
          </div>

          <div class="form-item">
            <label for="">Year</label>
            <input type="text" class="control" placeholder="Year">
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
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
