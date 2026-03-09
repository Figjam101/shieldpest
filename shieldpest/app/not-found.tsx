import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-surface-50">
      <div className="text-center px-6">
        <h1 className="font-display font-extrabold text-6xl text-forest-900 mb-4">404</h1>
        <p className="font-body text-lg text-gray-500 mb-8">
          This page doesn&apos;t exist — but your pest problem does. Let us help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary no-underline">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary no-underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
