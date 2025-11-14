export default function MobileServices(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
  <section class="bg-[#2f3132] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
      <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl">Mobile Services</h2>
      <p class="mt-4 text-white/80">Let our team of self-care experts come to you. Home services available.</p>
      <p class="mt-1 text-white/70">Please inquire for pricing and booking.</p>

      <div class="mt-10 flex flex-col md:flex-row justify-center gap-8 items-center">
        <img src="./imgs/mobile-services/1.webp" alt="Mobile service group" class="w-56 sm:w-64 md:w-96 h-auto rounded-sm object-cover" />
        <img src="./imgs/mobile-services/2.webp" alt="Nail polishes" class="w-56 sm:w-64 md:w-96 h-auto rounded-sm object-cover" />
      </div>

      <div class="mt-10">
        <a href="https://www.dashbooking.com/salon/bdk-nails-spa" target="_blank" class="inline-flex items-center rounded-full bg-brand-pink/90 hover:bg-brand-pink text-gray-900 font-medium px-8 py-4 transition">Book Now</a>
      </div>
    </div>
  </section>
  `);
}
