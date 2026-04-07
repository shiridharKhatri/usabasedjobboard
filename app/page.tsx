import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* 1. INTRODUCTION */}
      <section>
        <p className="text-lg leading-relaxed text-[#333] max-w-2xl">
          Stateside Careers is a curated platform for USA-based companies seeking high-level professional talent. We focus on quality and direct communication, offering simplified hiring for the American workforce with fixed-rate job visibility.
        </p>
      </section>

      {/* 2. EMPLOYER BENEFITS */}
      <section className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#999] mb-6">
            Employer Benefits
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold mb-2">Unmatched Clarity</h3>
              <p className="text-[#666] text-sm leading-relaxed">No algorithms, no clutter. Your job posting is presented in a clean, editorial layout that respects focus.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-2">USA Exclusive</h3>
              <p className="text-[#666] text-sm leading-relaxed">We target American talent hubs, ensuring you reach the right audience without international noise.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold mb-2">Fast Usability</h3>
              <p className="text-[#666] text-sm leading-relaxed">Post a job in under two minutes. Our streamlined interface is built for efficiency, not forced engagement.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-2">Direct Communication</h3>
              <p className="text-[#666] text-sm leading-relaxed">Applicants contact you directly. We don't hide candidate data behind paywalls or complex portals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
