import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-4xl mb-12">Contact Us</h1>
      <p className="text-[#666] mb-12 text-sm max-w-md">Our team is available Monday through Friday for inquiries regarding job postings, support, or partnership opportunities. Expect a response within 48 hours.</p>

      <form className="space-y-12">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#999]">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Jane Doe"
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#999]">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="jane@example.com"
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#999]">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4}
            placeholder="How can we help you today?"
            className="w-full bg-transparent border-b border-[#eee] py-4 text-xl focus:outline-none focus:border-black transition-colors resize-none"
            required
          />
        </div>

        <button 
          type="submit" 
          className="bg-black text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
        >
          Send Inquiry
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
