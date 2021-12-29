<script lang="ts" setup>
import Product from "@/interfaces/Product";
import { useCart } from "@/store/cart";

const { data, error } = await useFetch<string, Array<Product>>(
  "https://fakestoreapi.com/products"
);
const products: Array<Product> = data.value;

const cart = useCart();
</script>

<template>
  <div class="max-w-full mx-auto mt-4">
    <div class="flex items-center">
      <div class="lg:mx-auto sm:mx-0 container">
        <div class="flex flex-wrap w-full mb-8">
          <div class="w-full mb-6 lg:mb-0">
            <h1
              class="
                sm:text-4xl
                text-5xl
                font-bold
                title-font
                mb-2
                text-gray-900
              "
            >
              Products
            </h1>

            <div class="h-1 w-full bg-primary rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-full w-full p-4">
            <div class="flex flex-wrap">
              <div
                class="
                  mx-auto
                  w-full
                  grid
                  sm:grid-cols-1
                  md:grid-cols-3
                  lg:grid-cols-4
                "
              >
                <div
                  v-for="(item, index) in products"
                  :key="index"
                  class="
                    each
                    mb-10
                    m-2
                    p-2
                    max-w-sm
                    shadow-lg
                    border-gray-800
                    bg-gray-100
                    rounded-lg
                  "
                >
                  <div class="relative h-62 w-full mb-3">
                    <div class="absolute flex flex-col top-0 right-0 p-3">
                      <button
                        class="
                          transition
                          ease-in
                          duration-300
                          bg-secondary
                          hover:text-primary
                          shadow
                          hover:shadow-md
                          text-white
                          rounded-full
                          w-8
                          h-8
                          text-center
                          p-1
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      :src="item.image"
                      alt="Just a flower"
                      class="w-full object-fill rounded-2xl h-72"
                    />
                  </div>
                  <div class="flex-auto justify-evenly">
                    <div class="flex flex-wrap">
                      <div
                        class="
                          w-full
                          flex-none
                          text-sm
                          flex
                          items-center
                          text-gray-600
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-red-500 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <span class="text-gray-400 whitespace-nowrap mr-3">{{
                          item.rating.rate
                        }}</span>
                      </div>
                      <div
                        class="flex items-center w-full justify-between min-w-0"
                      >
                        <h2
                          class="
                            text-lg
                            mr-auto
                            cursor-pointer
                            text-gray-800
                            hover:text-purple-500
                            truncate
                          "
                        >
                          {{ item.title }}
                        </h2>
                        <div
                          class="
                            flex
                            items-center
                            bg-green-500
                            text-white text-xs
                            px-2
                            py-1
                            ml-3
                            rounded-lg
                          "
                        >
                          INSTOCK
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between my-2">
                      <div class="text-4 text-primary font-semibold my-2">
                        {{ item.price }}$
                      </div>
                      <div class="text-4 text-primary font-semibold my-2">
                        <button
                          @click="cart.addToCart(item)"
                          class="
                            transition
                            ease-in
                            duration-300
                            inline-flex
                            items-center
                            text-sm
                            font-medium
                            mb-2
                            md:mb-0
                            bg-primary
                            px-3
                            py-1
                            hover:shadow-lg
                            tracking-wider
                            text-white
                            rounded-full
                            hover:bg-secondary
                          "
                        >
                          <span>Add Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- each -->

                <!-- each -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
