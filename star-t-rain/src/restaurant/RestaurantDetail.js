import React from 'react'
import ProductList from '../product/ProductList'

export default function () {
    return (
        <div>

            <div class="bg-white">
                <div class="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div class="flex items-center">
                                    <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li class="text-sm">
                                <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
                            </li>
                        </ol>
                    </nav>

                    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center" />
                            </div>
                            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                        <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center" />
                        </div>
                    </div>

                    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ">
                        <div class="lg:col-span-2 lg:pr-8">
                            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
                        </div>


                        <div class="mt-4 lg:row-span-3 lg:mt-0  lg:pl-2">

                            <div>
                                <h3 class="text-sm font-medium text-gray-900">Description</h3>

                                <div class="mt-4 space-y-6">
                                    <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                                </div>
                            </div>

                            <div class="mt-10">
                                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                                <div class="mt-4">
                                    <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                                        <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
                                        <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
                                        <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                                        <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-10">
                                <h2 class="text-sm font-medium text-gray-900">Details</h2>

                                <div class="mt-4 space-y-6">
                                    <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                                </div>
                            </div>


                        </div>

                        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">

                            <ProductList />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
