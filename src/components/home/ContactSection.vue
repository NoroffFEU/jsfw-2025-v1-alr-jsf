<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Contact form submitted:", form.value);
  alert("Thank you for your message!");
  form.value = { name: "", email: "", message: "" };
};
</script>

<style scoped>
.text-primary-600 {
  color: #cb997e;
}
.focus\:ring-primary-500:focus {
  --tw-ring-color: #cb997e;
}
</style>

<template>
  <section class="bg-primary-10 py-4 my-8 md:py-8" id="contact">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Contact Us
      </h2>
      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col justify-center space-y-4">
          <p class="text-gray-700">
            We'd love to hear from you! Reach out with any questions or
            feedback.
          </p>
        </div>
        <form class="p-6 space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full px-3 py-2 bg-white border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="name@example.com"
              class="w-full px-3 py-2 bg-white rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Your message..."
              class="w-full px-3 py-2 bg-white border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-black text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
