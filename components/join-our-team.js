export default function JoinOurTeam(targetId = "app") {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML(
    "beforeend",
    `
  <section id="careers" class="bg-[#81ac87] text-[#0c1a16]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Text -->
        <div>
          <h2 class="font-serif text-xl sm:text-2xl md:text-4xl text-[#d8e7c8]">Join Our Team!</h2>
          <div class="mt-6 space-y-4 leading-relaxed text-[#d8e7c8]">
            <p>For almost two decades, we have been reimagining and revolutionizing the nail industry. We are always looking for motivated individuals and passionate and skilled people to add value to BDK Nails & Spa. From nail artists to front desk associates to our corporate team, we offer a career-shaping experience and opportunity to join us as we transform the nail spa industry.</p>
            <p>Here at BDK Nails & Spa, we set the tone for exceptional hospitality while providing an amazing client experience in a beautiful and clean atmosphere. Do you know someone who is a Licensed Manicurist or Esthetician? If you have an idea or concept of a role that is not listed above, please still inquire. We may need location managers, developers, or strategists to join us. Join an industry defining company that wants you to love what you do every day.</p>
          </div>
          <div class="mt-8">
            <a href="#" class="inline-flex items-center rounded-full bg-white text-[#0c1a16] hover:bg-white/90 font-medium px-8 py-4 transition">Careers</a>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full">
          <img src="./imgs/join-our-team/1.webp" alt="Join our team" class="w-full h-auto rounded-sm object-cover" />
        </div>
      </div>
    </div>
  </section>
  `
  );
}
