export default function InstagramPosts(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
  <section class="bg-[#2f3132] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
      <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl">Instagram Posts</h2>
      <p class="mt-4 text-white/80">Follow us on Instagram to see our latest work and stay updated with our latest promotions.</p>
      <p class="mt-1 text-white/70">Please inquire for pricing and booking.</p>

      <iframe
  src="https://www.instagram.com/p/DPxlu7PDJ3n/embed"
  width="400"
  height="480"
  frameborder="0"
  scrolling="no"
  allowtransparency="true">
</iframe>

    </div>
  </section>
  `);
}
