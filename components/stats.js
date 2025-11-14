export default function Stats(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  const items = [
    { img: './imgs/stats/1.webp', alt: 'Thousands of Members' },
    { img: './imgs/stats/2.webp', alt: 'Over 1 Million Treatments Performed' },
    { img: './imgs/stats/3.webp', alt: '17 Years in Biz' },
    { img: './imgs/stats/4.webp', alt: '2 Countries' }
  ];

  const cards = items.map(({ img, alt }) => `
    <div class="flex items-center justify-center">
      <img src="${img}" alt="${alt}" class="max-w-[280px] w-full h-auto" />
    </div>
  `).join('');

  root.insertAdjacentHTML('beforeend', `
  <section class="bg-[#eef1e8]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 place-items-center">
        ${cards}
      </div>
    </div>
  </section>
  `);
}


