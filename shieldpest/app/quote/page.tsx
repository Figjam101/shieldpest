import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Request a free pest control quote from ShieldPest. Same-day service available across greater Sydney.',
};

// Redirects to contact page which has the form
export default function QuotePage() {
  redirect('/contact');
}
