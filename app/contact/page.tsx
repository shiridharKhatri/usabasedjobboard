import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-xl font-medium mb-12">Contact Us</h1>
      <p className="text-[#666] mb-12 text-sm max-w-sm">Expect a response within 48 hours for inquiries regarding postings, support, or partnership.</p>

      <form className="space-y-8">
        <div className="space-y-1">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Jane Doe"
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Email</label>
          <input
            type="email"
            id="email"
            placeholder="jane@example.com"
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[#999]">Message</label>
          <textarea
            id="message"
            rows={4}
            placeholder="..."
            className="w-full bg-transparent border-b border-[#eee] py-2 text-sm focus:outline-none focus:border-black transition-colors resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
        >
          Send
        </button>
      </form>
    </div>
  );
}
