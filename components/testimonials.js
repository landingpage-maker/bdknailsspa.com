export default function Testimonials(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML(
    "beforeend",
    `
  <section class="relative bg-brand-pink/70 text-slate-800">
    <!-- subtle watermark circle -->
    <div class="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_60%)]"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2 class="text-center font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900">We Love a Good Tell-All!</h2>
      <p class="mt-3 text-center text-slate-700">What our clients are saying about their BDK Nails & Spa experience.</p>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <article class="bg-[#f6f9f3] rounded shadow-sm p-8">
          <h3 class="text-2xl font-semibold text-slate-900">"100 Stars!"</h3>
          <p class="mt-6 text-emerald-700 leading-relaxed">
            “I wish I could give them 100 Stars! BDK Nails & Spa is my favorite nail place! They are Covid friendly and follow all of the CDC Guidelines. My gel nails last 3-4 weeks and look sooo good!!”
          </p>
          <p class="mt-6 text-slate-600">-Lucy T.</p>
        </article>

        <article class="bg-[#f6f9f3] rounded shadow-sm p-8">
          <h3 class="text-2xl font-semibold text-slate-900">"Never Been Prettier!"</h3>
          <p class="mt-6 text-emerald-700 leading-relaxed">
            “First time at BDK Nails & Spa and the experience was great. Eric did my pedicure, Heather did my partner's, and our feet have never been prettier. I have NO complaints!”
          </p>
          <p class="mt-6 text-slate-600">-Vic K.</p>
        </article>

        <article class="bg-[#f6f9f3] rounded shadow-sm p-8">
          <h3 class="text-2xl font-semibold text-slate-900">"Exceptional Job!"</h3>
          <p class="mt-6 text-emerald-700 leading-relaxed">
            “They got me and my friend an appointment last minute and did an exceptional job on both of us. I was nervous about trying a new place but I'm so glad I did!”
          </p>
          <p class="mt-6 text-slate-600">-Suzy L.</p>
        </article>
      </div>

      <div class="mt-12 flex justify-center">
        <a href="https://g.page/r/CS3SmbnYmf5pEAI/review" target="_blank" class="inline-flex items-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-4 font-medium">Location Reviews</a>
      </div>
    </div>
  </section>
  `
  );
}
