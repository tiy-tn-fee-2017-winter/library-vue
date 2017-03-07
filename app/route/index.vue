<template lang="html">
  <div class="">
    <div class="grid">
      <div class="grid__item grid__item--4 grid__item--center">
        <div class="card">
          <h2 class="card__header">Book Library</h2>

          <ul class="card__collection collection">
            <li class="collection__item">
              <div class="book-item">
                <div class="row">
                  <div class="row__left">
                    <div class="book-item__info">
                      <h3 class="book-item__title">The Fold</h3>
                      <h4 class="book-item__author">Peter Cline</h4>
                    </div>
                  </div>
                  <div class="row__right">
                    <p class="book-item__edit"><a href="#">Edit</a></p>
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
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
