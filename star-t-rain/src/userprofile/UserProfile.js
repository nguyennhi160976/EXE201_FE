import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrapjustify-center">

                        <div class=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-3">The Catcher in the Rye</h1>
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                            <div class="flex">
                                <Link to="/manageorder">
                                    <button class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Quản Lý Đơn Hàng</button>
                                </Link>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Thay Đổi Địa Chỉ</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
