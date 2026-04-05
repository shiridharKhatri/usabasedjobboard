import Link from "next/link";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Software Architect",
    company: "Lumina Systems",
    location: "Austin, TX",
    description: "Lead the design of our next-generation cloud infrastructure while maintaining high quality standards and performance across all services."
  },
  {
    id: 2,
    title: "Principal Product Designer",
    company: "Thread.io",
    location: "New York, NY",
    description: "Spearhead our visual language and user experience strategy for a platform focused on creative collaboration and professional networking."
  },
  {
    id: 3,
    title: "Head of Marketing",
    company: "Aura Health",
    location: "San Francisco, CA",
    description: "Develop and execute a comprehensive growth strategy to expand our reach in the wellness and mental health technology sector."
  },
  {
    id: 4,
    title: "Operations Manager",
    company: "Swift Logistics",
    location: "Chicago, IL",
    description: "Optimize supply chain efficiency and manage day-to-day operations for a rapidly growing logistics company in the heart of the Midwest."
  }
];

export default function JobsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl mb-16">Selected Openings</h1>
      
      <div className="space-y-16">
        {MOCK_JOBS.map((job) => (
          <div key={job.id} className="group">
            <Link href={`/jobs/${job.id}`} className="block">
              <div className="flex justify-between items-baseline mb-2">
                <h2 className="text-xl group-hover:underline decoration-1 underline-offset-4">{job.title}</h2>
                <span className="text-xs uppercase tracking-widest text-[#999]">{job.location}</span>
              </div>
              <p className="text-sm font-medium text-[#666] mb-4 uppercase tracking-wider">{job.company}</p>
              <p className="text-[#444] text-sm leading-relaxed max-w-2xl">{job.description}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
          &larr; Back to Overview
        </Link>
      </div>
    </div>
  );
}
