<script setup>
import { ref } from "vue";
import { validateContactForm } from "../../composables/useContactForm.js";
import { useToastStore } from "../../stores/toastStore.js";

const toast = useToastStore();

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref({});

const handleSubmit = () => {
  errors.value = validateContactForm(form.value);

  if (Object.keys(errors.value).length === 0) {
    console.log("Form submitted:", form.value);

    toast.addToast({
      message: "Thank you for your message!",
      type: "success",
    });

    form.value = { name: "", email: "", subject: "", message: "" };
  } else {
    toast.addToast({
      message: "Please fix the errors in the form.",
      type: "error",
    });
  }
};
</script>

<template>
  <section class="bg-primary-40 py-4 my-8 md:py-8" id="contact">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Contact Us
      </h2>
      <form
        class="p-6 space-y-4 max-w-lg mx-auto"
        @submit.prevent="handleSubmit"
      >
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
            >Full Name</label
          >
          <input
            v-model="form.name"
            type="text"
            autocomplete="name"
            id="name"
            placeholder="Your Name"
            class="w-full px-3 py-2 bg-white border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>

        <div>
          <label
            for="subject"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Subject</label
          >
          <input
            v-model="form.subject"
            type="text"
            id="subject"
            placeholder="Subject"
            class="w-full px-3 py-2 bg-white border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <p v-if="errors.subject" class="text-red-500 text-sm mt-1">
            {{ errors.subject }}
          </p>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            autocomplete="email"
            id="email"
            placeholder="name@example.com"
            class="w-full px-3 py-2 bg-white border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Message</label
          >
          <textarea
            v-model="form.message"
            rows="4"
            id="message"
            placeholder="Your message..."
            class="w-full px-3 py-2 bg-white border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">
            {{ errors.message }}
          </p>
        </div>
        <button
          type="submit"
          class="bg-black text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
