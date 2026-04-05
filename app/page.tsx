import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32">
      {/* 1. INTRODUCTION */}
      <section className="max-w-2xl">
        <h1 className="text-5xl mb-8 leading-[1.1]">
          American Careers, Refined.
        </h1>
        <p className="text-xl text-[#333] mb-12">
          Stateside Careers is a curated platform for USA-based companies seeking high-level professional talent. We strip away the noise of modern job boards to focus on quality and direct communication. Simplified hiring for the American workforce, starting at $249 per posting for 30 days of visibility.
        </p>
        
        {/* 3. PRIMARY LINKS (creative placement below intro) */}
        <div className="flex gap-12 text-sm font-bold uppercase tracking-wider">
          <Link href="/post-job" className="hover:opacity-60 transition-opacity">
            Post a Job
          </Link>
          <Link href="/jobs" className="hover:opacity-60 transition-opacity">
            Browse Jobs
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">
            Contact Us
          </Link>
        </div>
      </section>

      {/* 2. EMPLOYER BENEFITS */}
      <section className="grid md:grid-cols-2 gap-x-24 gap-y-12">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#999] mb-8">
            Employer Benefits
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-1">Unmatched Clarity</h3>
              <p className="text-[#666] text-sm">No algorithms, no clutter. Your job posting is presented in a clean, editorial layout that respects the candidate's focus.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">USA Exclusive</h3>
              <p className="text-[#666] text-sm">We specifically target American talent hubs, ensuring you reach the right audience without international noise.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-1">Fast Usability</h3>
              <p className="text-[#666] text-sm">Post a job in under two minutes. Our streamlined interface is built for efficiency, not forced engagement.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Direct Communication</h3>
              <p className="text-[#666] text-sm">Applicants contact you directly via your preferred method. We don't hide candidate data behind paywalls or portals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
