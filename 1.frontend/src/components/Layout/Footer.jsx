export default function Footer() {
  const iconLinks = [
    {
      href: "https://github.com/AlejandroVilchesF",
      icon: "fi-brands-github",
      label: "GitHub Profile"
    },
    {
      href: "https://linkedin.com/in/alejandro-vilches-fernandez-607971330",
      icon: "fi-brands-linkedin", 
      label: "LinkedIn Profile"
    },
    {
      href: "#",
      icon: "fi-sr-document",
      label: "Documentation Page"
    }
  ];

  return (
    <footer className="flex items-center justify-between w-screen px-2 py-3 bg-white shadow">
      {/* Left: Copyright */}
      <p>© 2025 MindNest — Built by Alejandro Vilches</p>
      {/* Right: Links */}
      <div>
        {iconLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.label}
            style={{ marginRight: '15px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fi ${link.icon}`} style={{ fontSize: '24px' }}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}