export default function Footer(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML(
    "beforeend",
    `
  <footer id="locations" class="bg-[#e8ecdf] text-[#496e57]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Newsletter -->
        <div>
          <h3 class="text-3xl font-serif text-[#6a926c]">BDK Nails & Spa</h3>
          <p class="mt-3 text-[#6a926c]">
            BDK Nails & Spa is your relaxing destination for high-quality manicures and pedicures in Waterllo, Canada. We blend modern nail artistry with a warm, welcoming environment—always focused on clean, safe, and beautiful results.
          </p>
          <p class="mt-6 text-sm text-[#6a926c] max-w-xl">
            Discover your new favorite nail experience with us. Follow along for special events, updates, and more!
          </p>
        </div>

        <!-- Spacer on lg (keeps layout similar to screenshot) -->
        <div class="hidden lg:block"></div>

        <!-- Contact / Links -->
        <div>
          <h3 class="text-3xl font-serif text-[#6a926c]">Contact Us</h3>
          <address class="not-italic mt-4 space-y-1 text-[#6a926c] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>15-75 King Sr S.</div>
            <div>Waterloo, ON</div>
          </address>

          <div class="mt-6 text-[#2f5f46] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.98.36 1.94.72 2.84a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45c.9.36 1.86.6 2.84.72A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:+15198800101">(519) 880-0101</a>
          </div>
          <div class="mt-6 text-[#2f5f46] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-5 h-5 text-[#2f5f46]"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.125 2.25 6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25" /></svg>
            <a href="mailto:bdknailsspa@gmail.com">bdknailsspa@gmail.com</a>
          </div>

          <div class="mt-4 flex items-center gap-4 text-[#2f5f46]">
            <!-- Instagram -->
            <a href="https://www.instagram.com/bdk.salon/" target="_blank" aria-label="Instagram" class="hover:text-[#6a926c]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>
            </a>
            <!-- Facebook -->
            <a href="#" aria-label="Facebook" class="hover:text-[#6a926c]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M13 22v-9h3l1-4h-4V7a1 1 0 011-1h3V2h-3a5 5 0 00-5 5v2H6v4h3v9h4z"/></svg>
            </a>
            <!-- TikTok -->
            <a href="#" aria-label="TikTok" class="hover:text-[#6a926c]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M14 2c1 2.5 2.9 4 6 4v3c-2.2 0-4.2-.7-6-2v7.8a6.8 6.8 0 11-3-5.7V12a3.8 3.8 0 10 1.5 3V2H14z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-[#cfd8c9] pt-6 text-center text-[#6a926c]">
        <p>© 2025 BDK Nails. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  `
  );
}
