export default function ButFirst(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
  <section class="relative w-full bg-center bg-cover bg-no-repeat [background-image:url('./imgs/but-first/1.webp')]">
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-40 md:py-52 flex items-center justify-center">
      <h3 class="text-white text-center font-serif tracking-wide text-4xl sm:text-5xl md:text-6xl">
        <span class="border-y border-white/70 py-4 inline-block">But First. A Manicure.</span>
      </h3>
    </div>
  </section>
  `);
}
