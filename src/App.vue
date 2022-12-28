<template>
  <div class="mx-auto p-4">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </p>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to our vue js app",
      courses: [
        {
          id: 1,
          name: "Vue.js",
          description: "Vue.js is very good",
          price: 100,
        },
        {
          id: 2,
          name: "Vue.js",
          description: "Vue.js is very good",
          price: 200,
        },
        {
          id: 3,
          name: "Vue.js",
          description: "Vue.js is very good",
          price: 300,
        },
      ],
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      this.msg = "changed";
    },
  },
};
</script>
