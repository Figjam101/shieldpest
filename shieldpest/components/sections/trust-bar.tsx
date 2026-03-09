import { Star, ShieldCheck, Zap, CheckCircle2, Leaf } from 'lucide-react';

const trustItems = [
  { label: '4.9★ from 500+ Reviews', icon: Star },
  { label: 'Licensed & Fully Insured', icon: ShieldCheck },
  { label: 'Same-Day Service', icon: Zap },
  { label: '100% Satisfaction Guarantee', icon: CheckCircle2 },
  { label: 'Eco-Friendly Options', icon: Leaf },
];

export function TrustBar() {
  return (
    <div className="bg-surface-50 flex flex-col">
      <div className="relative z-20 container-site px-6">
        <section className="-mt-10 mb-8 bg-white rounded-[20px] shadow-card border border-surface-200 py-6 px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 text-amber-500" />
                  <span className="font-body text-sm font-semibold text-forest-900">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
