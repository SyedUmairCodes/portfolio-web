import Link from "next/link";
const footerlinks = [
  { name: "GitHub", href: "" },
  { name: "Twitter", href: "" },
  { name: "LinkedIn", href: "" },
];
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-t border-secondary py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>&copy; All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerlinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="inline-flex items-center gap 1.5"
              >
                <span className="font-semibold">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
