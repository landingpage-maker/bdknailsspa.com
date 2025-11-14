export default function PeaceLoveNails(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
  <section id="franchise" class="bg-[#e3e4db] text-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h3 class="text-center font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900">Peace, Love & Nails.</h3>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Card 1 -->
        <figure class="text-center">
          <img src="./imgs/PeaceLoveNails/1.webp" alt="Mani's & Pedi's" class="w-full aspect-[4/4.2] object-cover rounded-sm shadow-sm" />
          <figcaption class="mt-6 text-lg sm:text-xl text-emerald-700">Mani's & Pedi's</figcaption>
        </figure>

        <!-- Card 2 -->
        <figure class="text-center">
          <img src="./imgs/PeaceLoveNails/2.webp" alt="Waxing Services" class="w-full aspect-[4/4.2] object-cover rounded-sm shadow-sm" />
          <figcaption class="mt-6 text-lg sm:text-xl text-emerald-700">Waxing Services</figcaption>
        </figure>

        <!-- Card 3 -->
        <figure class="text-center">
          <img src="./imgs/PeaceLoveNails/3.webp" alt="Acrylic & Gel's" class="w-full aspect-[4/4.2] object-cover rounded-sm shadow-sm" />
          <figcaption class="mt-6 text-lg sm:text-xl text-emerald-700">Acrylic & Gel's</figcaption>
        </figure>
      </div>
    </div>
  </section>
  `);
}


