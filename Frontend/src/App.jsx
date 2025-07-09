import "./index.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaChevronUp,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
          
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          html { scroll-behavior: smooth; }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #1e232b;
          }
          ::-webkit-scrollbar-thumb {
            background: #d3a73b;
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #c59b2e;
          }
        `}
      </style>

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1e232b] via-[#2b313b] to-[#3a4251]"></div>

      <div className="min-h-screen flex flex-col text-white font-inter relative overflow-x-hidden">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#d3a73b] rounded-full shadow-lg hover:bg-[#c59b2e] transition-all duration-300"
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <FaChevronUp className="text-lg" />
        </motion.button>

        {/* Enhanced Navbar */}
        <motion.header
          className="w-full px-4 sm:px-6 lg:px-8 z-50 sticky top-0"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="max-w-7xl mx-auto">
            <nav className="my-2 sm:my-3 p-3 rounded-xl border border-[#d3a73b]/30 backdrop-blur-md bg-[#2b313b]/90 flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <motion.a
                href="/" // Replace with your actual website URL if different
                className="text-xl sm:text-2xl font-playfair text-white hover:text-[#d3a73b] transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Pruthi Electronics
              </motion.a>

              {/* Desktop Navigation */}
              <motion.div
                className="hidden sm:flex space-x-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="#about"
                  className="px-4 py-2 rounded-lg hover:bg-[#d3a73b]/10 hover:text-[#d3a73b] transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-4 py-2 rounded-lg hover:bg-[#d3a73b]/10 hover:text-[#d3a73b] transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  Contact
                </motion.a>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="sm:hidden text-white focus:outline-none hover:text-[#d3a73b] transition-colors duration-300"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="sm:hidden bg-[#2b313b]/95 backdrop-blur-md rounded-lg overflow-hidden border border-[#d3a73b]/30 shadow-lg"
                >
                  <motion.a
                    href="#about"
                    className="px-4 py-3 text-lg hover:bg-[#d3a73b]/10 hover:text-[#d3a73b] transition-colors duration-300 flex items-center"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.98 }}
                  >
                    About
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="px-4 py-3 text-lg hover:bg-[#d3a73b]/10 hover:text-[#d3a73b] transition-colors duration-300 flex items-center"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Main Content Container */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col lg:flex-row items-center py-12 sm:py-16 md:py-20 z-10">
              {/* Text Content */}
              <motion.div
                className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
                initial="hidden"
                animate="show"
                variants={container}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white font-playfair leading-tight"
                  variants={item}
                >
                  <span>Pruthi</span>{" "}
                  <span className="text-[#d3a73b]">Electronics</span>
                </motion.h1>
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl mb-8 text-[#8c94a4] font-inter leading-relaxed max-w-lg"
                  variants={item}
                >
                  Your trusted local electronics partner for{" "}
                  <span className="text-[#d3a73b]">quality products</span>,{" "}
                  <span className="text-[#d3a73b]">expert service</span>, and{" "}
                  <span className="text-[#d3a73b]">personalized support</span>.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                  className="flex justify-center lg:justify-start gap-5 mb-8"
                  variants={container}
                >
                  <motion.a
                    href="https://www.instagram.com/pruthielectronics?igsh=MXQ5ZGUxOWp2cGZjcQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 border border-pink-500/30 hover:brightness-110 transition-all duration-300 text-white shadow-md"
                    aria-label="Instagram"
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/share/16rGSVTdJJ/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-gradient-to-tr from-[#145dbf] via-[#1877F2] to-[#4e8ef7] border border-[#1877F2]/30 hover:brightness-110 transition-all duration-300 text-white shadow-md"
                    aria-label="Facebook"
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFacebook className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919996666524?text=Hello%2C%20I%20came%20across%20your%20website%20and%20I'm%20interested%20in%20your%20electronics%20offerings.%20Could%20you%20please%20provide%20more%20information%3F"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#1EBEA5] border border-[#25D366]/50 hover:brightness-110 transition-all duration-300 text-white shadow-md"
                    aria-label="WhatsApp"
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BsWhatsapp className="text-2xl" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                className="w-full lg:w-1/2 mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-hidden rounded-xl border border-[#d3a73b]/30 shadow-2xl bg-[#2b313b]/80 backdrop-blur-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src="/Images/logo.jpg"
                    alt="Premium Electronics"
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.p
                      className="text-[#d3a73b] text-lg font-medium font-inter"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      Premium Electronics Collection
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 relative">
              <motion.div
                className="bg-[#2b313b]/60 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-[#d3a73b]/30 shadow-lg"
                initial="hidden"
                animate="show"
                variants={slideUp}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-semibold mb-8 text-[#d3a73b] font-playfair"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  About Us
                </motion.h2>
                <motion.p
                  className="text-lg sm:text-xl leading-relaxed text-[#8c94a4] mb-10 font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Since 2014, Pruthi Electronics has been a trusted name in home
                  appliances, offering a wide range of products like TVs,
                  refrigerators, washing machines, air conditioners, speakers,
                  and more. We are dedicated to bringing comfort and convenience
                  to every home with high-quality appliances and reliable
                  customer service.
                </motion.p>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="show"
                  variants={container}
                >
                  {[
                    {
                      title: "Wide Range of Appliances",
                      desc: "From the latest LED TVs to energy-efficient refrigerators, we offer products to suit every household need.",
                      icon: "📺",
                    },
                    {
                      title: "Trusted Since 2014",
                      desc: "With over a decade of experience, we’ve built a reputation for quality, reliability, and service excellence.",
                      icon: "🏆",
                    },
                    {
                      title: "Customer-Centric Service",
                      desc: "We believe in delivering value through personal attention, expert guidance, and after-sales support.",
                      icon: "🤝",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#2b313b]/80 p-6 rounded-lg border border-[#d3a73b]/20 hover:border-[#d3a73b]/40 transition-all duration-300"
                      variants={item}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 font-playfair">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#8c94a4] font-inter">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
              <motion.div
                className="bg-[#2b313b]/60 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-[#d3a73b]/30 shadow-lg"
                initial="hidden"
                animate="show"
                variants={slideUp}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl font-semibold mb-8 text-[#d3a73b] font-playfair"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Contact Us
                </motion.h2>
                <motion.p
                  className="text-lg sm:text-xl text-[#8c94a4] mb-10 font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Have a question or need specific products? Reach out to us!
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  animate="show"
                  variants={container}
                >
                  <motion.div className="space-y-6" variants={container}>
                    <motion.div
                      className="flex items-start gap-5 p-4 sm:p-5 rounded-lg bg-[#2b313b]/70 hover:bg-[#2b313b]/90 transition-all duration-300"
                      variants={item}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="p-3 rounded-full bg-[#d3a73b]/10 text-[#d3a73b] flex-shrink-0 mt-1">
                        <FaPhone className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white font-playfair mb-2">
                          Phone
                        </h3>
                        <p className="text-lg text-[#8c94a4] font-inter">
                          +91-9996666524
                        </p>
                        <p className="text-sm text-[#8c94a4] mt-2 font-inter">
                          Ankit Pruthi (Owner)
                        </p>
                        <p className="text-sm text-[#d3a73b] mt-2 font-medium font-inter">
                          Mon-Sat: 9AM - 8PM
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-5 p-4 sm:p-5 rounded-lg bg-[#2b313b]/70 hover:bg-[#2b313b]/90 transition-all duration-300"
                      variants={item}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="p-3 rounded-full bg-[#d3a73b]/10 text-[#d3a73b] flex-shrink-0 mt-1">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white font-playfair mb-2">
                          Address
                        </h3>
                        <p className="text-lg text-[#8c94a4] font-inter">
                          Tehsil Camp Road, Near Subhash Nagar
                        </p>
                        <p className="text-lg text-[#8c94a4] font-inter">
                          Ram Nagar, Panipat, Haryana
                        </p>
                        <motion.a
                          href="https://maps.app.goo.gl/t8ePPhAx9f1LC8j58"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-3 text-[#d3a73b] hover:text-white transition-colors duration-300 text-base font-medium"
                          whileHover={{ x: 5 }}
                        >
                          Get Directions →
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-5 p-4 sm:p-5 rounded-lg bg-[#2b313b]/70 hover:bg-[#2b313b]/90 transition-all duration-300"
                    variants={item}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="p-3 rounded-full bg-[#25D366]/10 text-[#25D366] flex-shrink-0 mt-1">
                      <BsWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white font-playfair mb-2">
                        WhatsApp
                      </h3>
                      <p className="text-lg text-[#8c94a4] mb-4 font-inter">
                        Instant support via WhatsApp
                      </p>
                      <motion.a
                        href="https://wa.me/919996666524?text=Hello%2C%20I%20came%20across%20your%20website%20and%20I'm%20interested%20in%20your%20electronics%20offerings.%20Could%20you%20please%20provide%20more%20information%3F"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] px-5 py-3 rounded-md transition-colors duration-300 border border-[#25D366]/30 text-base font-medium"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <BsWhatsapp className="mr-3 text-xl" /> Chat Now
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </section>
          </div>
        </main>

        {/* Enhanced Footer */}
        <motion.footer
          className="bg-[#1e232b] text-center py-8 text-sm text-[#8c94a4] font-inter border-t border-[#d3a73b]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-playfair text-white mb-3">
                Pruthi Electronics
              </h2>
              <p className="mb-2">
                &copy; {new Date().getFullYear()} Pruthi Electronics. All rights
                reserved.
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}

export default App;
