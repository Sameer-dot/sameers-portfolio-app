const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3">
        <a href="https://github.com/Sameer-dot" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/sameer-naveed/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon">
          <img src="/assets/LinkedIn.svg" alt="Linkedin" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/sam_eer10/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon">
          <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
        </a> */}
      </div>

      <p className="text-white-500">© 2024 Sameer Naveed. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
