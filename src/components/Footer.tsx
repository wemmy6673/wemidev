import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/wemmy6673',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/okunolaoluwawemi',
      icon: FaLinkedin
    },
    {
      name: 'X',
      url: 'https://x.com/wemithewild',
      icon: FaTwitter
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/2348035213805',
      icon: FaWhatsapp
    },
    {
      name: 'Telegram',
      url: 'https://t.me/wemithewild',
      icon: FaTelegram
    },
    {
      name: 'Email',
      url: 'mailto:okunolawemzy@gmail.com',
      icon: MdEmail
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <link.icon className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden md:inline">{link.name}</span>
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Wemi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 