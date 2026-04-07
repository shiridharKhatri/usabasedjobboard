import Link from "next/link";

export default function PostJobPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-xl font-medium mb-12">Post a New Opportunity</h1>
      <p className="text-[#666] mb-12 text-sm max-w-sm">Listings are published within 24 hours. Pricing is $249 per 30 days of visibility.</p>
      
      <form className="space-y-8">
        <div className="space-y-1">
          <label htmlFor="title" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Title</label>
          <input 
            type="text" 
            id="title" 
            placeholder="Senior Software Architect"
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Company</label>
          <input 
            type="text" 
            id="company" 
            placeholder="Lumina Systems"
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="location" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Location (USA Only)</label>
          <input 
            type="text" 
            id="location" 
            placeholder="Austin, TX"
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="description" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Description</label>
          <textarea 
            id="description" 
            rows={5}
            placeholder="..."
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors resize-none"
            required
          />
        </div>

        <button 
          type="submit" 
          className="bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
