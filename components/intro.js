export default function Intro(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;
  root.insertAdjacentHTML(
    "beforeend",
    `
  <section id="membership" class="bg-[#e3e4db] text-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
      <h2 class="font-serif tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-slate-900">
        All You need is Love,<br class="hidden sm:block" />
        <span class="mt-2 inline-block">and great Nails.</span>
      </h2>
      <p class="mt-8 text-lg sm:text-xl text-slate-600">
        BDK Nails & Spa is all about loving your <em>hands + feet</em>. Our services focus on three areas –
        <em> clean, treat & style</em>. All you have to do is unwind and let us
        <em> breathe new life into your hands and feet</em>.
      </p>
    </div>
  </section>
  `
  );
}
