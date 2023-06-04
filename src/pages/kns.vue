<template>
  <div>
    <h3 class="text-2xl font-bold text-center py-2">Kritik & Saran</h3>
    <form class="max-w-md mx-auto mt-4">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
        <input v-model="name" type="text" id="name" class="px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input v-model="email" type="email" id="email" class="px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      </div>
      <div class="mb-4">
        <label for="rating" class="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
        <div class="flex items-center">
          <span v-for="star in 5" :key="star" @click="setRating(star)" class="text-2xl cursor-pointer" :class="{'text-yellow-400': rating >= star, 'text-gray-400': rating < star}">&#9733;</span>
        </div>
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Kritik & Saran:</label>
        <textarea v-model="message" id="message" rows="5" class="px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"></textarea>
      </div>
      <button @click="submitForm" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Kirim
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      rating: 0,
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Lakukan pengiriman formulir ke server atau lakukan pemrosesan data sesuai kebutuhan
      console.log('Nama:', this.name);
      console.log('Email:', this.email);
      console.log('Rating:', this.rating);
      console.log('Kritik & Saran:', this.message);

      // Setelah pengiriman formulir, bisa melakukan pengosongan formulir jika diperlukan
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.rating = 0;
      this.message = '';
    },
    setRating(star) {
      this.rating = star;
    }
  }
}
</script>

<style>
/* Gaya khusus untuk formulir */
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px #4caf50;
}

.text-yellow-400 {
  color: #fbbf24;
}

.text-gray-400 {
  color: #d1d5db;
}
</style>
