<template>
  <div>
    <h3 class="text-2xl font-bold text-center py-2">Menu</h3>
    <div class="row mt-5">
      <div v-for="food in foods" :key="food.id" class="col-md-4 mb-4">
        <div class="card">
          <div class="card-img-container">
            <img :src="food.image" class="card-img" :alt="food.name ">
            <div class="overlay" v-if="food.showOverlay">
              <div class="overlay-content">
                
                <p>{{ food.description }}</p>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ food.name }}</h5>
            <p class="card-text">Harga: Rp {{ food.price }}</p>
            <button class="btn btn-primary" @click="toggleOverlay(food)">Deskripsi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        {
          id: 1,
          name: 'Nasi Goreng',
          description: 'Nasi goreng adalah salah satu hidangan khas Indonesia yang terkenal dan populer di seluruh dunia. Hidangan ini terdiri dari nasi putih yang digoreng bersama dengan berbagai bahan tambahan seperti daging, seafood, sayuran, telur, dan rempah-rempah. Nasi goreng memiliki cita rasa yang gurih, sedikit pedas, dan sedikit manis.',
          price: 15000,
          image: 'https://cdn.pixabay.com/photo/2014/02/11/08/31/fried-rice-263882_640.jpg',
          showOverlay: false
        },
        {
          id: 2,
          name: 'Pepes',
          description: 'Pepes adalah hidangan khas Indonesia yang terbuat dari bahan makanan yang dibumbui dengan rempah-rempah, dibungkus dalam daun pisang, dan dikukus atau dibakar. Pepes dapat menggunakan berbagai jenis bahan, seperti ikan, daging, atau sayuran. ',
          price: 12000, 
          image: 'data:image/jpeg;base64,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',
          showOverlay: false
        },
        {
          id: 3,
          name: 'Rendang',
          description: 'Rendang adalah hidangan khas Indonesia yang berasal dari Minangkabau, Sumatera Barat. Rendang terkenal di seluruh Indonesia dan juga diakui secara internasional sebagai salah satu makanan terenak di dunia. Makanan ini terbuat dari potongan daging yang dimasak dalam campuran rempah-rempah dan santan kelapa yang kental hingga kuahnya mengering dan rempah-rempah meresap ke dalam daging.',
          price: 25000,
          image: 'https://cdn.pixabay.com/photo/2021/07/07/05/57/rendang-6393323_640.jpg',
          showOverlay: false
        },
        {
          id: 4,
          name: 'Gudeg',
          description: 'Gudeg adalah makanan khas dari Yogyakarta, Indonesia. Ini adalah hidangan tradisional yang terbuat dari nangka muda yang dimasak dengan santan kelapa dan bumbu rempah-rempah. Gudeg biasanya disajikan dengan nasi, ayam kampung, telur rebus, tahu, tempe, dan sambal goreng krecek.',
          price: 30000,
          image: 'https://i.pinimg.com/236x/6e/f5/93/6ef5930626cac343de8caffce56a0b0d.jpg',
          showOverlay: false
        },
        {
          id: 5,
          name: 'Opor',
          description: 'Opor adalah hidangan kari khas Indonesia yang sering disajikan pada acara-acara spesial atau saat perayaan tertentu, seperti Hari Raya Idul Fitri. Opor biasanya terbuat dari daging ayam atau daging sapi yang dimasak dalam kuah kental yang kaya rempah. Kuahnya biasanya terbuat dari santan kelapa, bawang putih, bawang merah, jahe, serai, daun salam, lengkuas, dan rempah-rempah seperti ketumbar, merica, dan kunyit.',
          price: 20000,
          image: 'https://i.pinimg.com/236x/98/8d/c1/988dc10a6c8a3aee14d16016afb3dee9.jpg',
          showOverlay: false
        },
        {
          id: 6,
          name: 'Sate',
          description: 'Sate, juga dikenal sebagai satay, adalah hidangan daging panggang yang disajikan dalam tusukan bambu atau tusukan logam kecil. Hidangan ini populer di berbagai negara Asia Tenggara, termasuk Indonesia, Malaysia, dan Thailand. Sate biasanya terdiri dari potongan daging, seperti daging sapi, daging ayam, daging kambing, atau daging babi, yang ditusuk dan kemudian dipanggang di atas bara api atau panggangan hingga matang. Daging tersebut biasanya sudah direndam dalam bumbu sebelum dipanggang untuk memberikan rasa yang kaya.',
          price: 17000,
          image: 'https://cdn.pixabay.com/photo/2018/08/09/10/25/grill-3594157_640.jpg',
          showOverlay: false
        },
        {
          id: 7,
          name: 'Bakso',
          description: 'Bakso adalah salah satu makanan populer di Indonesia. Ini adalah bola daging yang biasanya terbuat dari daging sapi yang dihaluskan dan dicampur dengan tepung tapioka atau tepung terigu, serta bumbu-bumbu seperti bawang putih, garam, merica, dan kaldu. Bakso biasanya dihidangkan dalam semangkuk kuah kaldu panas dan disajikan dengan mie, bihun, tahu, pangsit, sayuran, dan tambahan seperti telur rebus atau pangsit goreng.',
          price: 25000,
          image: 'https://cdn.pixabay.com/photo/2022/11/28/17/08/meatballs-7622514_640.jpg',
          showOverlay: false
        },
        {
          id: 8,
          name: 'Lumpia',
          description: 'Lumpia adalah hidangan yang populer di Indonesia, terutama dalam masakan Tionghoa-Indonesia. Lumpia merupakan semacam pangsit atau rollade yang terdiri dari kulit tepung gandum yang diisi dengan berbagai bahan seperti sayuran, daging, dan rempah-rempah. Hidangan ini kemudian digoreng hingga kulitnya renyah dan berwarna kecokelatan.',
          price: 10000,
          image: 'https://cdn.pixabay.com/photo/2016/02/16/10/08/durian-pancake-1203030_640.jpg',
           showOverlay: false
        },
        {
          id: 9,
          name: 'Pempek',
          description: 'Pempek adalah makanan khas Palembang, Sumatera Selatan, Indonesia. Pempek terkenal dengan tekstur kenyalnya yang terbuat dari adonan ikan tenggiri yang dicampur dengan tepung sagu dan bumbu-bumbu lainnya. Pempek biasanya disajikan dengan kuah cuka yang pedas dan asam.',
          price: 25000,
          image: 'https://cdn.pixabay.com/photo/2022/09/16/02/41/crunchy-7457643_1280.jpg',
          showOverlay: false
        }
        // Tambahkan makanan lainnya sesuai kebutuhan
      ]
    }
  },
  methods: {
    toggleOverlay(food) {
      food.showOverlay = !food.showOverlay;
    }
  }
}
</script>

<style>
/* Gaya khusus untuk galeri */
.card {
  width: 18rem;
  margin-bottom: 2rem;
}

.card-img-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.card-img {
  height: 100%;
  object-fit: cover;
  width: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-content {
  text-align: center;
}

.card:hover .overlay {
  opacity: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  margin-bottom: 0.5rem;
}

/* Gaya tambahan */
.text-center {
  text-align: center;
}

.mt-5 {
  margin-top: 3rem;
}

.mb-4 {
  margin-bottom: 2rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0069d9;
}
</style>
