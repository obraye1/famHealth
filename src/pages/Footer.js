import React from 'react'

function Footer() {
  return (
    <div class="bg-zinc-300">
    <div class="max-w-2xl mx-auto text-indigo-950 py-10">
        <div class="text-center">
            <h3 class="text-3xl mb-3"> FamHealth healthy living </h3>
            <p> Achieve wellness and a healthy, fulfilling lifestyle. </p>
        </div>
        <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-900">
            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; famHealth, 2023. </p>
            <div class="order-1 md:order-2">
                <span class="px-2">About us</span>
                <span class="px-2 border-l">Support</span>
                <span class="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
