export default function GiftCards(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(
    (n) => `./imgs/gift-cards/${n}.jpg`
  );

  // Đặt cùng một kích thước cố định cho ảnh (ví dụ: 320x400px)
  // Sử dụng aspect-[4/5] (Tailwind 3+) hoặc h-[400px] w-[320px] nếu không hỗ trợ aspect
  const slides = images
    .map(
      (src) => `
      <div class="swiper-slide">
        <div class="bg-white/5 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10 flex items-center justify-center" style="height:450px;">
          <img src="${src}" alt="Gift card" class="w-full h-full object-cover" style="width:100%; height:100%; object-fit:cover;" />
        </div>
      </div>
  `
    )
    .join("");

  root.insertAdjacentHTML(
    "beforeend",
    `
  <section id="nail-design" class="bg-[#e3e4db] text-slate-800">
    <div class="py-16 sm:py-20">
      <h3 class="text-center font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900">Some of our nail designs!</h3>
      <p class="mt-3 text-center text-slate-600">BDK Nails & Spa is excited to introduce beautiful options for every occasion!!</p>

      <div class="mt-10 bg-neutral-900 p-6 sm:p-8">
        <div class="swiper gift-swiper overflow-visible">
          <div class="swiper-wrapper">
            ${slides}
          </div>
          <!-- Navigation -->
          <div class="swiper-button-prev !text-white"></div>
          <div class="swiper-button-next !text-white"></div>
        </div>
      </div>
    </div>
  </section>
  `
  );

  // init Swiper once appended
  // eslint-disable-next-line no-undef
  const swiper = new Swiper(".gift-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1.8, spaceBetween: 22 },
      768: { slidesPerView: 2.4, spaceBetween: 24 },
      1024: { slidesPerView: 3.2, spaceBetween: 28 },
      1280: { slidesPerView: 3.6, spaceBetween: 32 },
    },
  });
}
