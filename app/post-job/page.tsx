import Link from "next/link";

export default function PostJobPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-4xl mb-12">Post a New Opportunity</h1>
      <p className="text-[#666] mb-12 text-sm max-w-md">Your listing will be reviewed and published within 24 hours. Pricing is $249 per 30 days of visibility on our platform.</p>
      
      <form className="space-y-12">
        <div className="space-y-2">
          <label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-[#999]">Job Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Senior Software Architect"
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-[#999]">Company Name</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            placeholder="Lumina Systems"
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="text-xs font-bold uppercase tracking-widest text-[#999]">Location (USA Only)</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            placeholder="Austin, TX"
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-[#999]">Description</label>
          <textarea 
            id="description" 
            name="description" 
            rows={6}
            placeholder="Outline the responsibilities, requirements, and benefits of the role."
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors resize-none"
            required
          />
        </div>

        <button 
          type="submit" 
          className="bg-black text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
        >
          Submit for Review
        </button>
      </form>

      <div className="mt-24">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
          &larr; Back to Overview
        </Link>
      </div>
    </div>
  );
}
