export default function GroupBooking(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;
  root.insertAdjacentHTML('beforeend', `
  <section id="app" class="bg-[#353535] text-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
      <h2 class="font-serif tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
        Group Booking
      </h2>
      <p class="mt-8 text-lg sm:text-xl text-white">
        Celebrate with friends, family or your work crew at one of our locations. Whether it's a holiday event or special occasion, our team will help you create the self-care event of your dreams.
      </p>
      <div class="mt-10">
        <a href="https://www.dashbooking.com/salon/bdk-nails-spa" target="_blank" class="inline-flex items-center justify-center rounded-full bg-white hover:bg-white/80 text-black font-medium px-8 py-4 shadow-md transition">
          Book Now
        </a>
      </div>
    </div>
  </section>
  `);
}
