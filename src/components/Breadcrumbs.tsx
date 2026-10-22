import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="mb-8 text-sm text-charcoal/60"><ol className="flex flex-wrap gap-2">{items.map((item, index) => <li key={item.label} className="flex gap-2">{index > 0 && <span>/</span>}{item.href ? <Link className="underline" href={item.href}>{item.label}</Link> : <span>{item.label}</span>}</li>)}</ol></nav>;
}
