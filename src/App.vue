<template>
  <div id="app" class="container">
    <transition-group tag="div" name="cats" class="cats">
      <cat v-for="cat in cats" :char="cat.char" :key="cat.id"></cat>
    </transition-group>
    <div id="touch" class="random"></div>
  </div>
</template>

<script>
import Cat from '@/components/Cat'

export default {
  name: 'App',
  components: {
    Cat,
  },
  data: function () {
    return {
      'cats': [],
      'shift': false,
    }
  },
  methods: {
    addRandomCat: function () {
      const charCode = Math.floor(Math.random() * 21) + 65 // 65 ~ 85
      const shift = Math.round(Math.random()) * 32 // 0 or 32

      if (this.cats.length > 20) {
        this.cats.shift()
      }
      this.cats.push({
        'id': Date.now(),
        'char': String.fromCharCode(charCode+shift),
      })
    },
  },
  created: function () {
    document.addEventListener('keydown', (e) => {
      const charCode = e.keyCode
      if (charCode === 16) this.shift = true

      if (64 < charCode && charCode < 86) { // 65 ~ 85
        if (this.cats.length > 20) {
          this.cats.shift()
        }
        this.cats.push({
          'id': Date.now(),
          'char': String.fromCharCode(charCode+(this.shift ? 0 : 32)),
        })
      }
    })

    document.addEventListener('keyup', (e) => {
      const charCode = e.keyCode
      if (charCode === 16) this.shift = false
    })
  },
  mounted: function () {
    document.getElementById('touch').addEventListener('click', () => {
      this.addRandomCat()
    })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.container {
  position: relative;
  height: 100%;
  width: 100%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.cats {
  font-family: 'CATcatCAT';
  font-size: 5rem;
  display: flex;
  justify-content: flex-end;
}

.random {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40vh;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  z-index: 1;
}


/* Transitions */

.cats-enter {
  opacity: 0;
  transform: translateX(80px);
}

.cats-enter-active {
  z-index: -1;
}

.cats-leave-to {
  opacity: 0;
}

.cats-leave-active {
  z-index: -1;
}
</style>
