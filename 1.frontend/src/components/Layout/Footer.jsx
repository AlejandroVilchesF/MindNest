export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-screen px-2 py-3 bg-white shadow">
      <p>© 2025 MindNest — Built by Alejandro Vilches</p>
    <div>
      <a href="https://github.com/AlejandroVilchesF" style={{ marginRight: '15px' }}>
        <i className="fi fi-brands-github" style={{ fontSize: '24px' }}></i>
      </a>
      <a href="https://linkedin.com/in/alejandro-vilches-fernandez-607971330">
        <i className="fi fi-brands-linkedin" style={{ fontSize: '24px' }}></i>
      </a>
    </div>
    </footer>
  );
}
