import React, { useState } from 'react'
import ProductList from '../product/ProductList'


export default function Menu() {

    return (
        <div>

            <div class="bg-white">
                <div>

                    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900">Món Ăn</h1>
                        </div>

                        <section aria-labelledby="products-heading" class="pb-24 pt-6">
                            <h2 id="products-heading" class="sr-only">Products</h2>

                            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                                <form class="hidden lg:block">
                                    <h3 class="sr-only">Categories</h3>
                                    <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <li>
                                            <a href="#">Totes</a>
                                        </li>
                                        <li>
                                            <a href="#">Backpacks</a>
                                        </li>
                                        <li>
                                            <a href="#">Travel Bags</a>
                                        </li>
                                        <li>
                                            <a href="#">Hip Bags</a>
                                        </li>
                                        <li>
                                            <a href="#">Laptop Sleeves</a>
                                        </li>
                                    </ul>



                                </form>

                                <div class="lg:col-span-3">
                                    <ProductList />
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </div>
    )
}
