import { Mail, Phone } from "lucide-react";

export function HeaderSection() {
  return (
    <header className="text-center mb-12 space-y-4 font-serif">
      <h1 className="text-5xl font-bold text-[#1a1f2c] tracking-tight">Keith Madison</h1>
      <div className="text-gray-600 space-y-2">
        <p className="flex items-center justify-center gap-2">
          <Phone size={18} />
          <a href="tel:+18164466943" className="hover:text-gray-900 transition-colors">
            +1 (816) 446-6943
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <Mail size={18} />
          <a href="mailto:keith.madison@icecube.wisc.edu" className="hover:text-gray-900 transition-colors">
            keith.madison@icecube.wisc.edu
          </a>
        </p>
      </div>
    </header>
  );
}
