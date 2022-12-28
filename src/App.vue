<template>
  <div class="mx-auto p-4">
    <h2 class="font-bold text-red-500">{{ msg }}</h2>
    <div
      v-for="course in courses"
      class="shadow p-4 mb-4 border border-gray-200"
    >
      <h2>{{ course.name }}</h2>
      <p>{{ course.description }}</p>
    </div>
  </div>
  <button>Test</button>
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
