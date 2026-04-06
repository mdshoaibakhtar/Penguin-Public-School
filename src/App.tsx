import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Menu, 
  X, 
  ChevronRight,
  BookOpen,
  Users,
  Building2,
  Award,
  Laptop,
  FlaskConical,
  Gamepad2,
  Home as HomeIcon,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";
import { HeroHighlight, Highlight } from "@/src/components/ui/hero-highlight";
import { BentoGrid, BentoGridItem } from "@/src/components/ui/bento-grid";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Disclosure", href: "#disclosure" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-blue/20">
              P
            </div>
            <div>
              <span className="text-xl font-display font-bold text-brand-blue block leading-none tracking-tight">PENGUIN</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Public School</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-brand-blue font-semibold text-sm transition-all hover:scale-105"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#admissions"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 active:scale-95"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 py-6 px-4 space-y-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-brand-blue font-bold py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setIsOpen(false)}
            className="block bg-brand-blue text-white text-center px-6 py-4 rounded-2xl font-bold shadow-lg"
          >
            Apply Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://penguinpublicschool.in/wp-content/uploads/2024/09/banner2.jpg" 
          alt="School Banner" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
      </div>
      
      <HeroHighlight containerClassName="h-auto py-32 md:py-48 bg-transparent!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold mb-8 tracking-widest uppercase border border-brand-blue/20 backdrop-blur-md">
              <Award size={14} /> Affiliated to CBSE (330866)
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Nurturing Minds, <br />
              <Highlight className="text-white">Shaping Futures.</Highlight>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Welcome to Muzaffarpur's premier educational institution. We provide a holistic and enriching learning experience for the next generation of leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#admissions" className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-2xl shadow-brand-blue/20 hover:shadow-brand-blue/40 flex items-center gap-2 active:scale-95">
                Admission Open <ChevronRight size={20} />
              </a>
              <a href="#about" className="bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-brand-blue hover:text-brand-blue transition-all active:scale-95">
                Explore Campus
              </a>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Excellence in Education <br />
              <span className="text-brand-blue">Since Inception</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
              <p>
                Welcome to Penguin Public School, the premier educational institution in Muzaffarpur, Bihar. Affiliated with the CBSE, we are dedicated to providing a holistic and enriching learning experience.
              </p>
              <p>
                We believe in fostering a nurturing environment where every child can explore their potential, develop critical thinking skills, and grow into responsible citizens.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="group">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <BookOpen size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Holistic Learning</h4>
                <p className="text-sm text-slate-500">Focus on academic and personal growth</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Expert Faculty</h4>
                <p className="text-sm text-slate-500">Mentors passionate about teaching</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] -rotate-3"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://penguinpublicschool.in/wp-content/uploads/2024/09/aboutimage-1.jpg" 
                alt="School Building" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const items = [
    {
      title: "Smart Classrooms",
      description: "Digital learning environments for interactive education.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Smart Classrooms" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
      icon: <Building2 className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Science Laboratories",
      description: "Hands-on experience with modern scientific equipment.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1646956141271-05281b4ef472?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Science Laboratories" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
      icon: <FlaskConical className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Computer Lab",
      description: "Equipping students with essential digital skills.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tcHV0ZXIlMjBMYWJ8ZW58MHx8MHx8fDA%3D" 
            alt="Computer Lab" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
      icon: <Laptop className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sports Complex",
      description: "Promoting physical fitness and team spirit.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3BvcnRzfGVufDB8fDB8fHww" 
            alt="Sports Complex" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
      icon: <Gamepad2 className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Residential Hostel",
      description: "A home away from home with safe facilities.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1709805619372-40de3f158e83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsfGVufDB8fDB8fHww" 
            alt="Residential Hostel" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
      icon: <HomeIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Library",
      description: "A sanctuary for knowledge and quiet research.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664300897489-fd98eee64faf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Library" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
      icon: <BookOpen className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <section id="facilities" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">World-Class Facilities</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            We provide the tools and environment necessary for students to excel in every field.
          </p>
        </div>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

const Disclosure = () => {
  const sections = [
    {
      title: "General Information",
      icon: <ClipboardList size={20} />,
      data: [
        ["Name of the School", "Penguin Public School"],
        ["Affiliation No.", "330866"],
        ["School Code", "65862"],
        ["Address", "Jhapahan Muzaffarpur-842004"],
        ["Principal", "Indra Bhushan Patel (M.A + B.ED)"],
        ["Email", <a href="mailto:penguin.principal@gmail.com" className="hover:text-brand-blue transition-colors">penguin.principal@gmail.com</a>],
        ["Contact", <a href="tel:7250134225" className="hover:text-brand-blue transition-colors">7250134225</a>],
      ]
    },
    {
      title: "Infrastructure Details",
      icon: <Building2 size={20} />,
      data: [
        ["Total Campus Area", "8132 SQR MTR"],
        ["Classroom Size", "46.25 SQR MTR"],
        ["Laboratories", "5 (390.193 SQR MTR)"],
        ["Library Size", "80 SQR MTR"],
        ["Internet", "Yes (High Speed)"],
        ["Toilets (G/B/CWSN)", "08 / 10 / 01"],
      ]
    }
  ];

  return (
    <section id="disclosure" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Mandatory Disclosure</h2>
          <p className="text-slate-500 font-medium">Public information as per CBSE requirements.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="bg-slate-900 px-8 py-6 flex items-center gap-3">
                <div className="text-brand-yellow">{section.icon}</div>
                <h3 className="text-white font-bold text-lg">{section.title}</h3>
              </div>
              <div className="p-2">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-slate-100">
                    {section.data.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-6 py-4 font-bold text-slate-900 text-sm w-1/2">{row[0]}</td>
                        <td className="px-6 py-4 text-slate-500 text-sm group-hover:text-brand-blue transition-colors">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Admissions = () => {
  return (
    <section id="admissions" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-brand-blue/20 text-brand-blue rounded-full text-xs font-bold mb-6 tracking-widest uppercase border border-brand-blue/30">
              Session 2026-27
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Begin Your <br />
              <span className="text-brand-blue">Educational Journey</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Join a community where curiosity is celebrated and potential is realized. Admissions are now open for the upcoming academic year.
            </p>
            <div className="space-y-6">
              {[
                { icon: <GraduationCap />, title: "Holistic Curriculum", desc: "CBSE aligned modern teaching" },
                { icon: <ShieldCheck />, title: "Safe Environment", desc: "24/7 security and CCTV monitoring" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-bold text-center leading-tight rotate-12 shadow-xl">
              Apply<br/>Now
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Admission Inquiry</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Student Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Father Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Class</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none">
                    <option>Nursery</option>
                    <option>LKG / UKG</option>
                    <option>Class 1 - 5</option>
                    <option>Class 6 - 10</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Mobile</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea rows={3} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 active:scale-95">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-10 tracking-tight">Get In Touch</h2>
            <div className="space-y-10">
              {[
                { icon: <MapPin />, title: "Address", content: "Jhapahan Deeh, Muzafffarpur, Bihar - 842004" },
                { icon: <Phone />, title: "Phone", content: <a href="tel:7250134225" className="hover:text-brand-blue transition-colors">+91 7250134225</a> },
                { icon: <Mail />, title: "Email", content: <a href="mailto:penguin.principal@gmail.com" className="hover:text-brand-blue transition-colors">penguin.principal@gmail.com</a> },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[<Facebook />, <Instagram />, <Twitter />].map((icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Send us a message</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue outline-none transition-all shadow-sm" />
                  <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue outline-none transition-all shadow-sm" />
                </div>
                <input type="tel" placeholder="Mobile Number" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue outline-none transition-all shadow-sm" />
                <textarea placeholder="How can we help you?" rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue outline-none transition-all shadow-sm"></textarea>
                <button className="bg-brand-blue text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-brand-blue/20">P</div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">PENGUIN</span>
            </div>
            <p className="mb-8 leading-relaxed text-slate-400">
              Muzaffarpur's premier educational institution, dedicated to excellence and holistic student development since inception.
            </p>
            <div className="flex gap-4">
              {[<Facebook />, <Instagram />, <Twitter />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/5">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {["CBSE Data", "Apply Now", "Gallery", "Admission", "Facilities"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-700 group-hover:text-brand-blue transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Our Campus</h4>
            <ul className="space-y-4">
              {["Smart Classrooms", "Science Labs", "Computer Center", "Sports Ground", "Hostel"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-700 group-hover:text-brand-blue transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Contact</h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin size={18} className="text-brand-blue flex-shrink-0" />
                <p>Jhapahan Deeh, Muzafffarpur, Bihar - 842004</p>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="text-brand-blue flex-shrink-0" />
                <a href="tel:7250134225" className="hover:text-white transition-colors">+91 7250134225</a>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:penguin.principal@gmail.com" className="hover:text-white transition-colors">penguin.principal@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase">
          <p className="text-slate-600">© 2026 Penguin Public School. Design by Md Shoaib.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Disclosure />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
