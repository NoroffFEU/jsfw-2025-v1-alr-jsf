<template>
  <div class="max-w-lg mx-auto px-4 py-6">
    <h1 class="text-2xl font-semibold mb-4">Contact Us</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label>Name:</label>
        <input v-model="name" type="text" class="w-full border rounded p-2" />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>
      <div>
        <label>Subject:</label>
        <input
          v-model="subject"
          type="text"
          class="w-full border rounded p-2"
        />
        <p v-if="errors.subject" class="text-red-500 text-sm">
          {{ errors.subject }}
        </p>
      </div>
      <div>
        <label>Email:</label>
        <input v-model="email" type="email" class="w-full border rounded p-2" />
        <p v-if="errors.email" class="text-red-500 text-sm">
          {{ errors.email }}
        </p>
      </div>
      <div>
        <label>Message:</label>
        <textarea
          v-model="message"
          class="w-full border rounded p-2"
        ></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm">
          {{ errors.message }}
        </p>
      </div>
      <button
        type="submit"
        class="bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToastStore } from "../stores/toastStore";

const name = ref("");
const subject = ref("");
const email = ref("");
const message = ref("");
const errors = ref({});

const toast = useToastStore();

const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const submitForm = () => {
  errors.value = {};
  if (!name.value || name.value.length < 3)
    errors.value.name = "Name must be at least 3 characters";
  if (!subject.value || subject.value.length < 3)
    errors.value.subject = "Subject must be at least 3 characters";
  if (!email.value || !validateEmail(email.value))
    errors.value.email = "Invalid email";
  if (!message.value || message.value.length < 10)
    errors.value.message = "Message must be at least 10 characters";

  if (Object.keys(errors.value).length === 0) {
    toast.push("Message sent successfully!", "success");
    name.value = subject.value = email.value = message.value = "";
  } else {
    toast.push("Please fix the errors in the form", "error");
  }
};
</script>
