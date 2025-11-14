export default function NailGarden(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;

  const images = Array.from(
    { length: 9 },
    (_, i) => `./imgs/nail-garden/${i + 1}.jpg`
  );

  // Generate animated grid items (using Tailwind for fade-up + slight scale animation)
  // We'll use inline styles for delay, and a little JS to animate on scroll
  const grid = images
    .map(
      (src, idx) => `
      <div
        class="overflow-hidden rounded-sm aspect-square bg-[#222] flex items-center justify-center opacity-0 translate-y-8 transition-all duration-700 will-change-transform"
        data-nail-ani
        style="transition-delay:${idx * 80}ms"
      >
        <img src="${src}" alt="BDK Nails & Spa" class="w-full h-full object-cover object-center scale-95 transition-transform duration-700 hover:scale-105" />
      </div>
    `
    )
    .join("");

  root.insertAdjacentHTML(
    "beforeend",
    `
  <section class="bg-[#333536] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl">Our BDK Nails & Spa</h2>
        <p class="mt-3 text-sm text-white/80">Our BDK Nails & Spa is a collection of our favorite nail designs from our clients. We are proud to showcase the talent of our nail artists and the creativity of our clients.</p>
      </div>
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">${grid}</div>
    </div>
  </section>
  `
  );

  // Animate the grid items when they enter viewport
  // This tiny intersection-observer will only run once per item
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const observer = new window.IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove("opacity-0", "translate-y-8");
            el.classList.add("opacity-100", "translate-y-0");
            // Animate the image scaling in at the same time
            const img = el.querySelector("img");
            if (img) {
              img.classList.remove("scale-95");
              img.classList.add("scale-100");
            }
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Animate all .data-nail-ani elements
    document
      .querySelectorAll("[data-nail-ani]")
      .forEach((el) => observer.observe(el));
  }
}
