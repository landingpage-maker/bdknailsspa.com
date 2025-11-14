export default function Hero(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;
  root.innerHTML = `
<header
    class="relative min-h-screen flex flex-col bg-center bg-cover bg-no-repeat pt-24 [background-image:url('imgs/hero/bg-hero.webp')]">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Navbar -->
    <nav class="fixed top-0 inset-x-0 z-30 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <!-- Logo / Brand -->
        <a href="#" class="inline-flex items-center gap-2">
          <img src="imgs/logo.png" alt="BDK Nails" class="w-24 h-24" />
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 text-black">
        <a class="hover:text-brand-pink transition" href="#membership">Membership</a>
        <a class="hover:text-brand-pink transition" href="#franchise">Franchise</a>
          <a class="hover:text-brand-pink transition" href="#nail-design">Nail Designs</a>
          <a class="hover:text-brand-pink transition" href="#careers">Careers</a>
          <a class="hover:text-brand-pink transition" href="https://maps.app.goo.gl/ogFyzbNnHV9H6Krr5" target="_blank">Locations</a>
          <div class="flex items-center gap-4">
            <!-- Social icons -->
            <a href="https://www.instagram.com/bdk.salon/" target="_blank" aria-label="Instagram" class="hover:text-brand-pink transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" class="hover:text-brand-pink transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5">
                <path d="M13 22v-9h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v2H6v4h3v9h4Z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" class="hover:text-brand-pink transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5">
                <path
                  d="M14 2c1 2.5 2.9 4 6 4v3c-2.2 0-4.2-.7-6-2v7.8a6.8 6.8 0 1 1-3-5.7V12a3.8 3.8 0 1 0 1.5 3V2h1.5Z" />
              </svg>
            </a>
            <a href="https://www.dashbooking.com/salon/bdk-nails-spa" target="_blank"
              class="ml-2 inline-flex items-center rounded-full bg-brand-pink/90 hover:bg-brand-pink text-gray-900 font-medium px-5 py-2 transition">Book
              Now</a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button id="menuBtn"
          class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-brand-pink focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobileMenu"
        class="md:hidden hidden border-t border-white/10 bg-black/50 backdrop-blur">
        <div class="px-4 py-4 space-y-3">
        <a class="block" href="#membership">Membership</a>
        <a class="block" href="#franchise">Franchise</a>
          <a class="block" href="#nail-design">Nail Designs</a>
          <a class="block" href="#careers">Careers</a>
          <a class="block" href="https://maps.app.goo.gl/ogFyzbNnHV9H6Krr5" target="_blank">Locations</a>
          <a href="https://www.dashbooking.com/salon/bdk-nails-spa" target="_blank"
            class="inline-flex items-center rounded-full bg-brand-pink/90 hover:bg-brand-pink text-gray-900 font-medium px-5 py-2 transition">Book
            Now</a>
        </div>
      </div>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-10 flex-1 flex items-center">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight drop-shadow-xl">
          Be Happy. Be Beautiful. Be You.
        </h1>
        <p class="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-white/90 drop-shadow">
          Welcome to BDK Nails & Spa, a full-service boutique Nail & Waxing salon.
        </p>
        <div class="mt-10">
          <a href="https://www.dashbooking.com/salon/bdk-nails-spa" target="_blank"
            class="inline-flex items-center gap-2 rounded-full bg-brand-pink/90 hover:bg-brand-pink text-gray-900 font-semibold px-8 py-4 shadow-lg transition">
            Book Appointment Today
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-sm text-white/80">
          *Find a BDK Nails & Spa location near you and book your appointment from our app!
        </p>
      </div>
    </div>
  </header>

  <script>
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Smooth scroll functionality
    function smoothScrollTo(targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    // Add smooth scroll to all navbar links
    document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          if (targetId) {
            smoothScrollTo(targetId);
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
            }
          }
        });
      });
    });
  </script>
  `;
}
