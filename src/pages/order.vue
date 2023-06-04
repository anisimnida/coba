

<template>
  <div>
      
    <h3 class="text-2xl font-bold text-center py-2">Pesanan</h3>
    
    <div class="overflow-x-auto relative sm:rounded-lg">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Makanan</th>
            <th class="py-2 px-4 border-b">Porsi</th>
            <th class="py-2 px-4 border-b">Keterangan</th>
            
            <th class="py-2 px-4 border-b">Ubah</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="py-2 px-4 border-b">{{ product.makanan }}</td>
            <td class="py-2 px-4 border-b">{{ product.porsi }}</td>
            <td class="py-2 px-4 border-b">{{ product.keterangan }}</td>
            <td class="py-2 px-4 border-b">
              <button @click="editData(product)" class="py-1 px-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Edit
              </button>
              <button @click="hapusData(product)" class="py-1 px-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Tombol Tambah Data -->
    <button @click="toggleModal" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-4">
      Tambahkan Pesanan
    </button>
    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-10">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h3 class="text-xl font-bold mb-4">{{ editingProduct ? 'Ubah Pesanan' : 'Pesanan' }}</h3>
        <div class="flex flex-col mt-4">
          <label for="makanan" class="text-sm font-medium text-gray-700 dark:text-gray-400">Makanan</label>
          <input v-model="newProduct.makanan" type="text" id="makanan" class="px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        </div>
        <div class="flex flex-col mt-4">
          <label for="porsi" class="text-sm font-medium text-gray-700 dark:text-gray-400">Porsi</label>
          <input v-model="newProduct.porsi" type="text" id="porsi" class="px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        </div>
        <div class="flex flex-col mt-4">
          <label for="keterangan" class="text-sm font-medium text-gray-700 dark:text-gray-400">Keterangan</label>
          <input v-model="newProduct.keterangan" type="text" id="keterangan" class="px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        </div>
        <!-- Tombol Tambah Data atau Simpan Data tergantung dari kondisi -->
        <div class="flex justify-end mt-6">
          <button @click="editingProduct ? updateData() : tambahData()" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            {{ editingProduct ? 'Ubah' : 'Tambah' }}
          </button>
          <button @click="batalkanPerintah" class="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 ml-4">
            Batal
          </button>
        </div>
      </div>
    </div>
    <div v-if="isModalOpen" class="fixed inset-0 bg-black opacity-25"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [],
      newProduct: {
        id: null,
        makanan: '',
        porsi: '',
        keterangan: ''
      },
      isModalOpen: false,
      editingProduct: false
    };
  },
  methods: {
    
    tambahData() {
      const newItem = {
        id: this.products.length + 1,
        makanan: this.newProduct.makanan,
        porsi: this.newProduct.porsi,
        keterangan: this.newProduct.keterangan
      };
      this.products.push(newItem);

      // Mengosongkan formulir setelah menambahkan data
      this.resetForm();

      this.toggleModal();
    },
    editData(product) {
      this.editingProduct = true;
      this.newProduct.id = product.id;
      this.newProduct.makanan = product.makanan;
      this.newProduct.porsi = product.porsi;
      this.newProduct.keterangan = product.keterangan;
   

      this.toggleModal();
    },
    updateData() {
      const index = this.products.findIndex(product => product.id === this.newProduct.id);
      if (index !== -1) {
        this.products[index] = { ...this.newProduct };
        this.resetForm();
        this.toggleModal();
      }
    },
    deleteData(productId) {
      const index = this.products.findIndex(product => product.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    batalkanPerintah() {
      this.resetForm();
      this.toggleModal();
    },
    resetForm() {
      this.editingProduct = false;
      this.newProduct.id = null;
      this.newProduct.makanan = '';
      this.newProduct.porsi = '';
      this.newProduct.keterangan = '';
      
    }
  }
}
</script>

<style>
/* Gaya khusus untuk tabel */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}

/* Gaya khusus untuk tombol */
.button {
  display: inline-block;
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  margin: 5px;
}

.button:hover {
  background-color: #45a049;
}
</style>

