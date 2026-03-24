export type Language = 'en' | 'si' | 'ta';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.eyecare': 'Eye Care',
    'nav.services': 'Services',
    'nav.eyewear': 'Eyewear',
    'nav.promotions': 'Promotions',
    'nav.hearing': 'Hearing',
    'nav.academy': 'Academy',
    'nav.branches': 'Branches',
    'nav.specialists': 'Specialists',
    'nav.shop': 'Shop',
    'nav.blog': 'Blog',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.book': 'Book Eye Test',
    'nav.eyecare_all': 'View All Eye Care',

    // Hero
    'hero.label': "Sri Lanka's Premier Optical Care",
    'hero.heading': 'Clear Vision Starts Here',
    'hero.sub': 'Comprehensive eye testing, premium lenses, designer frames, and specialist care—all under one roof. Sri Lanka’s most trusted clinic for your vision health.',
    'hero.cta1': 'Book an Appointment',
    'hero.cta2': 'Explore Our Services',
    'hero.stat1': 'ISO Certified',
    'hero.stat2': 'Top Rated Specialists',
    'hero.stat3': 'Advanced Tech',
    'hero.stat4': '10,000+ Happy Patients',

    // Services
    'services.heading': 'Comprehensive Eye Care',
    'services.sub': 'From routine eye tests to specialist care — all under one roof',
    'services.viewall': 'View All Services',
    'services.eyetesting': 'Eye Testing & Comprehensive Exam',
    'services.eyetesting.desc': 'Thorough vision assessments using advanced diagnostic equipment by qualified optometrists.',
    'services.spectacles': 'Spectacles & Prescription Glasses',
    'services.spectacles.desc': 'Precision-crafted lenses paired with frames from the world\'s finest brands.',
    'services.contactlenses': 'Contact Lenses',
    'services.contactlenses.desc': 'Daily, monthly, toric, and specialty lenses with expert fitting consultations.',
    'services.sunglasses': 'Sunglasses',
    'services.sunglasses.desc': 'Premium UV-protective eyewear combining style with certified eye protection.',
    'services.lowvision': 'Low Vision Care',
    'services.lowvision.desc': 'Specialized aids and rehabilitation for individuals with partial sight loss.',
    'services.glaucoma': 'Glaucoma Assessment',
    'services.glaucoma.desc': 'Early detection screening for the silent thief of sight, protecting your long-term vision.',
    'services.paediatric': 'Paediatric Eye Care',
    'services.paediatric.desc': 'Gentle, child-friendly eye examinations in a comfortable and reassuring environment.',
    'services.orthok': 'Orthokeratology (Ortho-K)',
    'services.orthok.desc': 'Overnight corrective lenses for myopia control — freedom from daytime glasses.',
    'services.learnmore': 'Learn More',

    // Stats
    'stats.years': 'Years of Excellence',
    'stats.branches': 'Branches Island-Wide',
    'stats.patients': 'Patients Served',
    'stats.brands': 'Global Brands',

    // Brands
    'brands.heading': 'World-Class Eyewear Brands',
    'brands.shopall': 'Shop All Brands',

    // Hearing
    'hearing.badge': 'ear.lk — A Vision Care Company',
    'hearing.heading': 'Vision Care Hearing Solutions',
    'hearing.sub': 'Reconnect with the sounds that matter. Our hearing specialists provide comprehensive audiological care with the latest technology from global leaders.',
    'hearing.tests': 'Hearing Tests',
    'hearing.tests.desc': 'Comprehensive audiological assessments',
    'hearing.aids': 'Hearing Aids',
    'hearing.aids.desc': 'Premium devices from global brands',
    'hearing.tinnitus': 'Tinnitus Management',
    'hearing.tinnitus.desc': 'Expert care for persistent ringing',
    'hearing.cta': 'Explore Hearing Solutions',
    'hearing.brandsheading': 'Trusted Hearing Aid Brands',
    'hearing.about.heading': 'Expert Hearing Care, Close to You',
    'hearing.about.text': 'Vision Care Hearing Solutions brings together advanced audiological technology and experienced specialists to provide comprehensive hearing care. From initial assessment to ongoing support, we\'re with you every step of the way.',
    'hearing.children': "Children's Hearing Care",
    'hearing.children.desc': 'Gentle, child-friendly hearing assessments and paediatric solutions.',

    // Academy
    'academy.badge': 'vcacademy.lk',
    'academy.heading': 'Vision Care Academy',
    'academy.sub': 'Shape the future of eye care in Sri Lanka. Our TVEC-registered programmes combine clinical training with industry experience, preparing graduates for meaningful careers in optometry.',
    'academy.cta': 'Explore the Academy',
    'academy.diploma': 'Diploma in Optometry',
    'academy.diploma.dur': '2 Years Full-Time',
    'academy.contact': 'Contact Lens Practice',
    'academy.contact.dur': '6 Months',
    'academy.dispensing': 'Dispensing Optics',
    'academy.dispensing.dur': '1 Year',
    'academy.about.heading': 'About the Academy',
    'academy.about.text': 'Vision Care Academy is Sri Lanka\'s premier institution for optometry education. Our TVEC-registered programmes are designed to produce highly skilled eye care professionals.',
    'academy.courses.heading': 'Programmes Offered',
    'academy.whystudy': 'Why Study at Vision Care Academy',
    'academy.applynow': 'Apply Now',
    'academy.hero.heading': 'Shape the Future of Eye Care in Sri Lanka',
    'academy.hero.sub': 'TVEC-registered programmes combining clinical training with real-world industry experience.',

    // Luxury
    'luxury.label': 'Exclusive Collection',
    'luxury.heading': 'Vision Care Luxury',
    'luxury.sub': 'Cinnamon Life, Colombo',
    'luxury.desc': 'Experience an unparalleled selection of premium eyewear. Prada, Porsche Design, and Armani — exclusively available at our Cinnamon Life boutique with personalized fitting by our master opticians.',
    'luxury.hours': 'Cinnamon Life, R.A. De Mel Mawatha, Colombo 03 · Mon–Sun: 10am–9pm',
    'luxury.cta': 'Visit the Boutique',

    // Why Vision Care
    'why.heading': 'Why Sri Lanka Trusts Vision Care',
    'why.sub': 'Three decades of commitment to the nation\'s vision health',
    'why.access': 'Island-Wide Accessibility',
    'why.access.desc': '50+ branches ensuring expert eye care is never far away.',
    'why.qualified': 'State-Qualified Optometrists',
    'why.qualified.desc': 'Every examination by qualified, experienced professionals.',
    'why.brands': 'Global Eyewear Brands',
    'why.brands.desc': 'Curated collections from 20+ internationally renowned brands.',
    'why.academy': 'TVEC-Registered Academy',
    'why.academy.desc': 'Training the next generation of Sri Lanka\'s eye care specialists.',
    'why.diagnostics': 'Advanced Diagnostics',
    'why.diagnostics.desc': 'Equipped with the latest ophthalmic technology for precise care.',

    // Testimonials
    'testimonials.heading': 'Voices of Our Patients',
    'testimonials.sub': 'Real experiences from our community',

    // News
    'news.heading': 'Eye Health Insights',
    'news.sub': 'Stay informed about vision and hearing care',
    'news.viewall': 'View All Articles',
    'news.read': 'Read',

    // CTA Banner
    'cta.heading': 'Your Vision Deserves Expert Care',
    'cta.sub': 'Book a comprehensive eye examination at your nearest Vision Care branch today.',
    'cta.book': 'Book Eye Test',
    'cta.find': 'Find a Branch',

    // Footer
    'footer.tagline': 'See the World Clearly',
    'footer.services': 'Eye Care Services',
    'footer.eyewear': 'Eyewear',
    'footer.company': 'Company',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',

    // Booking
    'booking.heading': 'Book Your Eye Test',
    'booking.sub': 'Schedule a comprehensive eye examination at your preferred Vision Care branch.',
    'booking.branch': 'Select Branch',
    'booking.service': 'Select Service',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.name': 'Full Name',
    'booking.phone': 'Phone',
    'booking.email': 'Email',
    'booking.submit': 'Confirm Booking',
    'booking.whatsapp': 'Or book via WhatsApp',
    'booking.success': 'Your appointment has been booked! We will confirm via phone or email shortly.',

    // Contact
    'contact.heading': 'We\'re Here for Your Vision',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.branch': 'Nearest Branch',
    'contact.service': 'Service',
    'contact.message': 'Message',
    'contact.submit': 'Submit Inquiry',
    'contact.hq': 'Head Office',
    'contact.success': 'Thank you! Your inquiry has been submitted. We will contact you shortly.',

    // Branches
    'branches.heading': 'Find Your Nearest Vision Care',
    'branches.search': 'Search by town or city...',
    'branches.allprovinces': 'All Provinces',
    'branches.found': 'branches found',
    'branches.directions': 'Get Directions',

    // Blog
    'blog.heading': 'Eye Health Insights & News',
    'blog.all': 'All',

    // Careers
    'careers.heading': 'Build a Meaningful Career in Eye Care',
    'careers.sub': 'Join a team dedicated to improving vision and quality of life across Sri Lanka.',
    'careers.training': 'Professional Training',
    'careers.training.desc': 'Continuous learning and development opportunities',
    'careers.growth': 'Career Growth',
    'careers.growth.desc': 'Clear progression pathways across departments',
    'careers.islandwide': 'Island-Wide Roles',
    'careers.islandwide.desc': 'Opportunities at 50+ branches across Sri Lanka',
    'careers.difference': 'Making a Difference',
    'careers.difference.desc': 'Help thousands see and hear the world better',
    'careers.apply': 'Apply Now',
    'careers.viewapply': 'View & Apply',
    'careers.close': 'Close',
    'careers.sendcv': 'Send CV',

    // Cookie consent
    'cookie.text': 'We use cookies to enhance your browsing experience and analyse site traffic. By continuing, you agree to our',
    'cookie.privacy': 'Privacy Policy',
    'cookie.accept': 'Accept Cookies',
    'cookie.decline': 'Decline',
  },
  si: {
    // Navigation
    'nav.about': 'අප ගැන',
    'nav.eyecare': 'ඇස් සත්කාර',
    'nav.services': 'සේවා',
    'nav.eyewear': 'කණ්ණාඩි',
    'nav.promotions': 'ප්‍රවර්ධන',
    'nav.hearing': 'ශ්‍රවණ',
    'nav.academy': 'ඇකඩමිය',
    'nav.branches': 'ශාඛා',
    'nav.specialists': 'විශේෂඥයින්',
    'nav.shop': 'සාප්පුව',
    'nav.blog': 'බ්ලොග්',
    'nav.careers': 'රැකියා',
    'nav.contact': 'සම්බන්ධ වන්න',
    'nav.book': 'ඇස් පරීක්ෂාව වෙන්කරන්න',
    'nav.eyecare_all': 'සියලුම ඇස් සත්කාර බලන්න',

    // Hero
    'hero.label': 'ශ්‍රී ලංකාවේ ප්‍රමුඛ දෘෂ්ටි සත්කාරය',
    'hero.heading': 'ලෝකය පැහැදිලිව හා විලාසිතාවෙන් බලන්න',
    'hero.sub': 'වසර 30කට අධික විශ්වාසනීය දෘෂ්ටි සත්කාරයක් සමඟ දිවයින පුරා ශාඛා 50කට අධිකව, ලෝකයේ හොඳම කණ්ණාඩි සන්නාම සහ විශේෂඥ දෘෂ්ටි විද්‍යාව ඔබ වෙත.',
    'hero.cta1': 'ඇස් පරීක්ෂාවක් වෙන්කරන්න',
    'hero.cta2': 'කණ්ණාඩි බලන්න',
    'hero.stat1': '30+ වසර',
    'hero.stat2': '50+ ශාඛා',
    'hero.stat3': 'TVEC ලියාපදිංචි',
    'hero.stat4': 'ගෝලීය සන්නාම',

    // Services
    'services.heading': 'සම්පූර්ණ ඇස් සත්කාරය',
    'services.sub': 'සාමාන්‍ය ඇස් පරීක්ෂණ සිට විශේෂඥ සත්කාරය දක්වා — සියල්ල එක වහලක් යට',
    'services.viewall': 'සියලුම සේවා බලන්න',
    'services.eyetesting': 'ඇස් පරීක්ෂණ සහ සම්පූර්ණ පරීක්ෂාව',
    'services.eyetesting.desc': 'සුදුසුකම් ලත් දෘෂ්ටි විශේෂඥයින් විසින් උසස් රෝග නිර්ණය උපකරණ භාවිතයෙන් සම්පූර්ණ දෘෂ්ටි ඇගයීම්.',
    'services.spectacles': 'කණ්ණාඩි සහ බෙහෙත් වට්ටෝරු කණ්ණාඩි',
    'services.spectacles.desc': 'ලෝකයේ උතුම් සන්නාමවලින් රාමු සමඟ නිරවද්‍ය ලෙස සකස් කළ කාච.',
    'services.contactlenses': 'සම්බන්ධතා කාච',
    'services.contactlenses.desc': 'දෛනික, මාසික, ටෝරික් සහ විශේෂ කාච විශේෂඥ ගැලපුම් උපදේශන සමඟ.',
    'services.sunglasses': 'සූර්ය කණ්ණාඩි',
    'services.sunglasses.desc': 'ආරක්‍ෂිත ඇස් ආරක්ෂාව සමඟ විලාසිතාව ඒකාබද්ධ කරන ප්‍රිමියම් UV ආරක්ෂිත කණ්ණාඩි.',
    'services.lowvision': 'අඩු දෘෂ්ටි සත්කාරය',
    'services.lowvision.desc': 'අර්ධ වශයෙන් පෙනීම නැති වූ පුද්ගලයින් සඳහා විශේෂිත උපකරණ සහ පුනරුත්ථාපනය.',
    'services.glaucoma': 'ග්ලුකෝමා ඇගයීම',
    'services.glaucoma.desc': 'ඔබේ දිගු කාලීන දෘෂ්ටිය ආරක්ෂා කරමින්, නිහඬ දෘෂ්ටි සොරා සඳහා මුල් හඳුනා ගැනීමේ පරීක්ෂණ.',
    'services.paediatric': 'ළමා ඇස් සත්කාරය',
    'services.paediatric.desc': 'සුවපහසු හා සහතික කරන පරිසරයක මෘදු, ළමා-හිතකාමී ඇස් පරීක්ෂණ.',
    'services.orthok': 'ඕර්තොකෙරටොලොජි (Ortho-K)',
    'services.orthok.desc': 'මයෝපියා පාලනය සඳහා රාත්‍රී නිවැරදි කිරීමේ කාච — දිවා කණ්ණාඩිවලින් නිදහස.',
    'services.learnmore': 'තව දැනගන්න',

    // Stats
    'stats.years': 'විශිෂ්ටත්වයේ වසර',
    'stats.branches': 'දිවයින පුරා ශාඛා',
    'stats.patients': 'සේවා ලැබූ රෝගීන්',
    'stats.brands': 'ගෝලීය සන්නාම',

    // Brands
    'brands.heading': 'ලෝක මට්ටමේ කණ්ණාඩි සන්නාම',
    'brands.shopall': 'සියලුම සන්නාම බලන්න',

    // Hearing
    'hearing.badge': 'ear.lk — Vision Care සමාගමක්',
    'hearing.heading': 'Vision Care ශ්‍රවණ විසඳුම්',
    'hearing.sub': 'වැදගත් ශබ්ද සමඟ නැවත සම්බන්ධ වන්න. අපගේ ශ්‍රවණ විශේෂඥයින් ගෝලීය නායකයින්ගේ නවතම තාක්ෂණය සමඟ සම්පූර්ණ ශ්‍රවණ විද්‍යා සත්කාරය සපයයි.',
    'hearing.tests': 'ශ්‍රවණ පරීක්ෂණ',
    'hearing.tests.desc': 'සම්පූර්ණ ශ්‍රවණ විද්‍යා ඇගයීම්',
    'hearing.aids': 'ශ්‍රවණ උපකරණ',
    'hearing.aids.desc': 'ගෝලීය සන්නාමවලින් ප්‍රිමියම් උපකරණ',
    'hearing.tinnitus': 'ටින්නිටස් කළමනාකරණය',
    'hearing.tinnitus.desc': 'නිරන්තර ඇහුරුම සඳහා විශේෂඥ සත්කාරය',
    'hearing.cta': 'ශ්‍රවණ විසඳුම් ගවේෂණය කරන්න',
    'hearing.brandsheading': 'විශ්වාසදායක ශ්‍රවණ උපකරණ සන්නාම',
    'hearing.about.heading': 'විශේෂඥ ශ්‍රවණ සත්කාරය, ඔබට සමීපව',
    'hearing.about.text': 'Vision Care ශ්‍රවණ විසඳුම් උසස් ශ්‍රවණ තාක්ෂණය සහ පළපුරුදු විශේෂඥයින් එක් කර සම්පූර්ණ ශ්‍රවණ සත්කාරයක් සපයයි.',
    'hearing.children': 'ළමා ශ්‍රවණ සත්කාරය',
    'hearing.children.desc': 'මෘදු, ළමා-හිතකාමී ශ්‍රවණ ඇගයීම් සහ ළමා විසඳුම්.',

    // Academy
    'academy.badge': 'vcacademy.lk',
    'academy.heading': 'Vision Care ඇකඩමිය',
    'academy.sub': 'ශ්‍රී ලංකාවේ ඇස් සත්කාරයේ අනාගතය හැඩගස්වන්න. අපගේ TVEC ලියාපදිංචි වැඩසටහන් සායනික පුහුණුව කර්මාන්ත අත්දැකීම් සමඟ ඒකාබද්ධ කරයි.',
    'academy.cta': 'ඇකඩමිය ගවේෂණය කරන්න',
    'academy.diploma': 'දෘෂ්ටි විද්‍යා ඩිප්ලෝමාව',
    'academy.diploma.dur': 'වසර 2 පූර්ණ කාලීන',
    'academy.contact': 'සම්බන්ධතා කාච පුහුණුව',
    'academy.contact.dur': 'මාස 6',
    'academy.dispensing': 'බෙදාහැරීමේ ප්‍රකාශ විද්‍යාව',
    'academy.dispensing.dur': 'වසරක්',
    'academy.about.heading': 'ඇකඩමිය ගැන',
    'academy.about.text': 'Vision Care ඇකඩමිය ශ්‍රී ලංකාවේ දෘෂ්ටි විද්‍යා අධ්‍යාපනය සඳහා ප්‍රමුඛ ආයතනයයි.',
    'academy.courses.heading': 'පිරිනමන වැඩසටහන්',
    'academy.whystudy': 'Vision Care ඇකඩමියේ ඉගෙන ගන්නේ ඇයි',
    'academy.applynow': 'දැන් අයදුම් කරන්න',
    'academy.hero.heading': 'ශ්‍රී ලංකාවේ ඇස් සත්කාරයේ අනාගතය හැඩගස්වන්න',
    'academy.hero.sub': 'සැබෑ ලෝක කර්මාන්ත අත්දැකීම් සමඟ සායනික පුහුණුව ඒකාබද්ධ කරන TVEC ලියාපදිංචි වැඩසටහන්.',

    // Luxury
    'luxury.label': 'අද්විතීය එකතුව',
    'luxury.heading': 'Vision Care Luxury',
    'luxury.sub': 'Cinnamon Life, කොළඹ',
    'luxury.desc': 'ප්‍රිමියම් කණ්ණාඩිවල අසමසම තේරීමක් අත්විඳින්න. Prada, Porsche Design, සහ Armani — අපගේ ප්‍රධාන දෘෂ්ටි විශේෂඥයින් විසින් පුද්ගලීකරණය කළ ගැලපුම් සමඟ Cinnamon Life බුටික් එකේ පමණක්.',
    'luxury.hours': 'Cinnamon Life, R.A. De Mel මාවත, කොළඹ 03 · සඳුදා–ඉරිදා: පෙ.ව. 10–ප.ව. 9',
    'luxury.cta': 'බුටික් එකට පිවිසෙන්න',

    // Why Vision Care
    'why.heading': 'ශ්‍රී ලංකාව Vision Care විශ්වාස කරන්නේ ඇයි',
    'why.sub': 'ජාතියේ දෘෂ්ටි සෞඛ්‍යයට දශක තුනක කැපවීම',
    'why.access': 'දිවයින පුරා ප්‍රවේශ්‍යතාව',
    'why.access.desc': 'විශේෂඥ ඇස් සත්කාරය කිසිවිටෙකත් දුරස් නොවන බව සහතික කරන ශාඛා 50+.',
    'why.qualified': 'රාජ්‍ය සුදුසුකම් ලත් දෘෂ්ටි විශේෂඥයින්',
    'why.qualified.desc': 'සෑම පරීක්ෂණයක්ම සුදුසුකම් ලත්, පළපුරුදු වෘත්තිකයින් විසින්.',
    'why.brands': 'ගෝලීය කණ්ණාඩි සන්නාම',
    'why.brands.desc': 'ජාත්‍යන්තරව කීර්තිමත් සන්නාම 20+ වලින් සමනස් එකතු.',
    'why.academy': 'TVEC ලියාපදිංචි ඇකඩමිය',
    'why.academy.desc': 'ශ්‍රී ලංකාවේ ඇස් සත්කාර විශේෂඥයින්ගේ මීළඟ පරම්පරාව පුහුණු කිරීම.',
    'why.diagnostics': 'උසස් රෝග නිර්ණය',
    'why.diagnostics.desc': 'නිරවද්‍ය සත්කාරය සඳහා නවතම අක්ෂි තාක්ෂණයෙන් සමන්විතය.',

    // Testimonials
    'testimonials.heading': 'අපගේ රෝගීන්ගේ හඬ',
    'testimonials.sub': 'අපගේ ප්‍රජාවේ සැබෑ අත්දැකීම්',

    // News
    'news.heading': 'ඇස් සෞඛ්‍ය තීක්ෂණ බුද්ධිය',
    'news.sub': 'දෘෂ්ටි සහ ශ්‍රවණ සත්කාරය ගැන දැනුවත් වන්න',
    'news.viewall': 'සියලුම ලිපි බලන්න',
    'news.read': 'කියවන්න',

    // CTA Banner
    'cta.heading': 'ඔබේ දෘෂ්ටියට විශේෂඥ සත්කාරයක් ලැබිය යුතුය',
    'cta.sub': 'ඔබට ආසන්නතම Vision Care ශාඛාවේ සම්පූර්ණ ඇස් පරීක්ෂණයක් වෙන්කරන්න.',
    'cta.book': 'ඇස් පරීක්ෂාව',
    'cta.find': 'ශාඛාවක් සොයන්න',

    // Footer
    'footer.tagline': 'ලෝකය පැහැදිලිව බලන්න',
    'footer.services': 'ඇස් සත්කාර සේවා',
    'footer.eyewear': 'කණ්ණාඩි',
    'footer.company': 'සමාගම',
    'footer.contact': 'සම්බන්ධ වන්න',
    'footer.privacy': 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
    'footer.terms': 'සේවා නියම',
    'footer.rights': 'සියලුම හිමිකම් ඇවිරිණි.',

    // Booking
    'booking.heading': 'ඔබේ ඇස් පරීක්ෂාව වෙන්කරන්න',
    'booking.sub': 'ඔබ කැමති Vision Care ශාඛාවේ සම්පූර්ණ ඇස් පරීක්ෂණයක් උපලේඛනගත කරන්න.',
    'booking.branch': 'ශාඛාව තෝරන්න',
    'booking.service': 'සේවාව තෝරන්න',
    'booking.date': 'කැමති දිනය',
    'booking.time': 'කැමති වේලාව',
    'booking.name': 'සම්පූර්ණ නම',
    'booking.phone': 'දුරකථනය',
    'booking.email': 'විද්‍යුත් තැපෑල',
    'booking.submit': 'වෙන්කිරීම තහවුරු කරන්න',
    'booking.whatsapp': 'හෝ WhatsApp හරහා වෙන්කරන්න',
    'booking.success': 'ඔබේ හමුවීම වෙන්කර ඇත! අපි දුරකථනයෙන් හෝ විද්‍යුත් තැපෑලෙන් තහවුරු කරන්නෙමු.',

    // Contact
    'contact.heading': 'ඔබේ දෘෂ්ටිය සඳහා අපි මෙහි සිටිමු',
    'contact.name': 'සම්පූර්ණ නම',
    'contact.phone': 'දුරකථනය',
    'contact.email': 'විද්‍යුත් තැපෑල',
    'contact.branch': 'ආසන්නතම ශාඛාව',
    'contact.service': 'සේවාව',
    'contact.message': 'පණිවිඩය',
    'contact.submit': 'විමසුම යොමු කරන්න',
    'contact.hq': 'ප්‍රධාන කාර්යාලය',
    'contact.success': 'ස්තූතියි! ඔබේ විමසුම ඉදිරිපත් කර ඇත. අපි ඉක්මනින් ඔබ හා සම්බන්ධ වන්නෙමු.',

    // Branches
    'branches.heading': 'ඔබට ආසන්නතම Vision Care සොයන්න',
    'branches.search': 'නගරය හෝ ප්‍රදේශය අනුව සොයන්න...',
    'branches.allprovinces': 'සියලුම පළාත්',
    'branches.found': 'ශාඛා හමු විය',
    'branches.directions': 'මාර්ග උපදෙස් ලබන්න',

    // Blog
    'blog.heading': 'ඇස් සෞඛ්‍ය තීක්ෂණ බුද්ධිය සහ පුවත්',
    'blog.all': 'සියල්ල',

    // Careers
    'careers.heading': 'ඇස් සත්කාරයේ අර්ථවත් වෘත්තියක් ගොඩනගන්න',
    'careers.sub': 'ශ්‍රී ලංකාව පුරා දෘෂ්ටිය හා ජීවන තත්ත්වය වැඩිදියුණු කිරීමට කැපවූ කණ්ඩායමට එක්වන්න.',
    'careers.training': 'වෘත්තීය පුහුණුව',
    'careers.training.desc': 'අඛණ්ඩ ඉගෙනීම හා සංවර්ධන අවස්ථා',
    'careers.growth': 'වෘත්තීය වර්ධනය',
    'careers.growth.desc': 'දෙපාර්තමේන්තු හරහා පැහැදිලි ප්‍රගති මාර්ග',
    'careers.islandwide': 'දිවයින පුරා තනතුරු',
    'careers.islandwide.desc': 'ශ්‍රී ලංකාව පුරා ශාඛා 50+ හි අවස්ථා',
    'careers.difference': 'වෙනසක් කිරීම',
    'careers.difference.desc': 'දහස් ගණනකට ලෝකය හොඳින් දැකීමට හා ඇසීමට උදව් කරන්න',
    'careers.apply': 'දැන් අයදුම් කරන්න',
    'careers.viewapply': 'බලන්න සහ අයදුම් කරන්න',
    'careers.close': 'වසන්න',
    'careers.sendcv': 'CV එවන්න',

    // Cookie consent
    'cookie.text': 'ඔබේ බ්‍රවුසින් අත්දැකීම වැඩිදියුණු කිරීමට සහ අඩවි ගමනාගමනය විශ්ලේෂණය කිරීමට අපි කුකීස් භාවිතා කරමු. ඉදිරියට යාමෙන්, ඔබ අපගේ',
    'cookie.privacy': 'පෞද්ගලිකත්ව ප්‍රතිපත්තියට',
    'cookie.accept': 'කුකීස් පිළිගන්න',
    'cookie.decline': 'ප්‍රතික්ෂේප කරන්න',
  },
  ta: {
    // Navigation
    'nav.about': 'எங்களைப் பற்றி',
    'nav.eyecare': 'கண் பராமரிப்பு',
    'nav.services': 'சேவைகள்',
    'nav.eyewear': 'கண்ணாடிகள்',
    'nav.promotions': 'விளம்பரங்கள்',
    'nav.hearing': 'காது பராமரிப்பு',
    'nav.academy': 'அகாடமி',
    'nav.branches': 'கிளைகள்',
    'nav.specialists': 'நிபுணர்கள்',
    'nav.shop': 'கடை',
    'nav.blog': 'வலைப்பதிவு',
    'nav.careers': 'வேலைவாய்ப்புகள்',
    'nav.contact': 'தொடர்பு கொள்ள',
    'nav.book': 'கண் பரிசோதனை முன்பதிவு',
    'nav.eyecare_all': 'அனைத்து கண் பராமரிப்புகளையும் காண்க',

    // Hero
    'hero.label': 'இலங்கையின் முதன்மை கண் பராமரிப்பு',
    'hero.heading': 'உலகை தெளிவாகவும் நேர்த்தியாகவும் பாருங்கள்',
    'hero.sub': '30 ஆண்டுகளுக்கு மேலான நம்பகமான கண் பராமரிப்புடன் நாடு முழுவதும் 50+ கிளைகள், உலகின் சிறந்த கண்ணாடி பிராண்டுகள் மற்றும் நிபுணர் பார்வை மருத்துவம்.',
    'hero.cta1': 'கண் பரிசோதனை முன்பதிவு செய்க',
    'hero.cta2': 'கண்ணாடிகளை ஆராயுங்கள்',
    'hero.stat1': '30+ ஆண்டுகள்',
    'hero.stat2': '50+ கிளைகள்',
    'hero.stat3': 'TVEC பதிவு',
    'hero.stat4': 'உலக பிராண்டுகள்',

    // Services
    'services.heading': 'முழுமையான கண் பராமரிப்பு',
    'services.sub': 'வழக்கமான கண் பரிசோதனைகள் முதல் நிபுணர் பராமரிப்பு வரை — அனைத்தும் ஒரே கூரையின் கீழ்',
    'services.viewall': 'அனைத்து சேவைகளையும் காண்க',
    'services.eyetesting': 'கண் பரிசோதனை மற்றும் முழுமையான பரிசோதனை',
    'services.eyetesting.desc': 'தகுதியான பார்வை நிபுணர்களால் மேம்பட்ட நோய்கண்டறிதல் கருவிகளைப் பயன்படுத்தி முழுமையான பார்வை மதிப்பீடுகள்.',
    'services.spectacles': 'கண்ணாடிகள் மற்றும் மருத்துவ சீட்டு கண்ணாடிகள்',
    'services.spectacles.desc': 'உலகின் சிறந்த பிராண்டுகளின் பிரேம்களுடன் இணைக்கப்பட்ட துல்லியமாக வடிவமைக்கப்பட்ட லென்ஸ்கள்.',
    'services.contactlenses': 'காண்டாக்ட் லென்ஸ்கள்',
    'services.contactlenses.desc': 'நிபுணர் பொருத்துதல் ஆலோசனைகளுடன் தினசரி, மாதாந்திர, டோரிக் மற்றும் சிறப்பு லென்ஸ்கள்.',
    'services.sunglasses': 'சன்கிளாஸ்கள்',
    'services.sunglasses.desc': 'சான்றிதழ் பெற்ற கண் பாதுகாப்புடன் நடையை இணைக்கும் பிரீமியம் UV பாதுகாப்பு கண்ணாடிகள்.',
    'services.lowvision': 'குறைந்த பார்வை பராமரிப்பு',
    'services.lowvision.desc': 'பகுதி பார்வை இழப்புள்ள நபர்களுக்கான சிறப்பு உதவிகள் மற்றும் மறுவாழ்வு.',
    'services.glaucoma': 'கிளாக்கோமா மதிப்பீடு',
    'services.glaucoma.desc': 'உங்கள் நீண்ட கால பார்வையைப் பாதுகாக்கும், அமைதியான பார்வை திருடனுக்கான ஆரம்ப கண்டறிதல் திரையிடல்.',
    'services.paediatric': 'குழந்தை கண் பராமரிப்பு',
    'services.paediatric.desc': 'வசதியான மற்றும் நம்பிக்கையூட்டும் சூழலில் மென்மையான, குழந்தை நட்பு கண் பரிசோதனைகள்.',
    'services.orthok': 'ஆர்த்தோகெரட்டாலஜி (Ortho-K)',
    'services.orthok.desc': 'கிட்டப்பார்வை கட்டுப்பாட்டுக்கான இரவு திருத்தும் லென்ஸ்கள் — பகல் நேர கண்ணாடிகளிலிருந்து சுதந்திரம்.',
    'services.learnmore': 'மேலும் அறிக',

    // Stats
    'stats.years': 'சிறப்பின் ஆண்டுகள்',
    'stats.branches': 'நாடு முழுவதும் கிளைகள்',
    'stats.patients': 'சேவை பெற்ற நோயாளிகள்',
    'stats.brands': 'உலக பிராண்டுகள்',

    // Brands
    'brands.heading': 'உலகத்தரம் வாய்ந்த கண்ணாடி பிராண்டுகள்',
    'brands.shopall': 'அனைத்து பிராண்டுகளையும் காண்க',

    // Hearing
    'hearing.badge': 'ear.lk — Vision Care நிறுவனம்',
    'hearing.heading': 'Vision Care காது பராமரிப்பு தீர்வுகள்',
    'hearing.sub': 'முக்கியமான ஒலிகளுடன் மீண்டும் இணையுங்கள். எங்கள் காது நிபுணர்கள் உலக முன்னணி நிறுவனங்களின் சமீபத்திய தொழில்நுட்பத்துடன் முழுமையான காது மருத்துவ பராமரிப்பை வழங்குகிறார்கள்.',
    'hearing.tests': 'காது பரிசோதனைகள்',
    'hearing.tests.desc': 'முழுமையான காது மருத்துவ மதிப்பீடுகள்',
    'hearing.aids': 'காது கேட்கும் கருவிகள்',
    'hearing.aids.desc': 'உலக பிராண்டுகளிலிருந்து பிரீமியம் கருவிகள்',
    'hearing.tinnitus': 'டின்னிடஸ் மேலாண்மை',
    'hearing.tinnitus.desc': 'தொடர்ச்சியான காது ஒலிக்கான நிபுணர் பராமரிப்பு',
    'hearing.cta': 'காது பராமரிப்பு தீர்வுகளை ஆராயுங்கள்',
    'hearing.brandsheading': 'நம்பகமான காது கேட்கும் கருவி பிராண்டுகள்',
    'hearing.about.heading': 'நிபுணர் காது பராமரிப்பு, உங்களுக்கு அருகில்',
    'hearing.about.text': 'Vision Care காது பராமரிப்பு தீர்வுகள் மேம்பட்ட காது மருத்துவ தொழில்நுட்பம் மற்றும் அனுபவமிக்க நிபுணர்களை ஒன்றிணைத்து முழுமையான காது பராமரிப்பை வழங்குகிறது.',
    'hearing.children': 'குழந்தைகளின் காது பராமரிப்பு',
    'hearing.children.desc': 'மென்மையான, குழந்தை நட்பு காது மதிப்பீடுகள் மற்றும் குழந்தை தீர்வுகள்.',

    // Academy
    'academy.badge': 'vcacademy.lk',
    'academy.heading': 'Vision Care அகாடமி',
    'academy.sub': 'இலங்கையின் கண் பராமரிப்பின் எதிர்காலத்தை வடிவமையுங்கள். எங்கள் TVEC பதிவு செய்யப்பட்ட திட்டங்கள் மருத்துவ பயிற்சியை தொழில்துறை அனுபவத்துடன் இணைக்கின்றன.',
    'academy.cta': 'அகாடமியை ஆராயுங்கள்',
    'academy.diploma': 'பார்வை மருத்துவ டிப்ளோமா',
    'academy.diploma.dur': '2 ஆண்டுகள் முழு நேரம்',
    'academy.contact': 'காண்டாக்ட் லென்ஸ் பயிற்சி',
    'academy.contact.dur': '6 மாதங்கள்',
    'academy.dispensing': 'ஒளியியல் விநியோகம்',
    'academy.dispensing.dur': '1 ஆண்டு',
    'academy.about.heading': 'அகாடமியைப் பற்றி',
    'academy.about.text': 'Vision Care அகாடமி இலங்கையின் பார்வை மருத்துவ கல்விக்கான முதன்மை நிறுவனமாகும்.',
    'academy.courses.heading': 'வழங்கப்படும் திட்டங்கள்',
    'academy.whystudy': 'Vision Care அகாடமியில் ஏன் படிக்க வேண்டும்',
    'academy.applynow': 'இப்போது விண்ணப்பியுங்கள்',
    'academy.hero.heading': 'இலங்கையின் கண் பராமரிப்பின் எதிர்காலத்தை வடிவமையுங்கள்',
    'academy.hero.sub': 'உண்மையான தொழில்துறை அனுபவத்துடன் மருத்துவ பயிற்சியை இணைக்கும் TVEC பதிவு திட்டங்கள்.',

    // Luxury
    'luxury.label': 'பிரத்யேக தொகுப்பு',
    'luxury.heading': 'Vision Care Luxury',
    'luxury.sub': 'Cinnamon Life, கொழும்பு',
    'luxury.desc': 'பிரீமியம் கண்ணாடிகளின் ஒப்பற்ற தேர்வை அனுபவியுங்கள். Prada, Porsche Design, மற்றும் Armani — எங்கள் முதன்மை பார்வை நிபுணர்களின் தனிப்பயன் பொருத்துதலுடன் Cinnamon Life புட்டீக்கில் மட்டுமே.',
    'luxury.hours': 'Cinnamon Life, R.A. De Mel மாவத்தை, கொழும்பு 03 · திங்கள்–ஞாயிறு: காலை 10–இரவு 9',
    'luxury.cta': 'புட்டீக்கை பார்வையிடுங்கள்',

    // Why Vision Care
    'why.heading': 'இலங்கை ஏன் Vision Care-ஐ நம்புகிறது',
    'why.sub': 'நாட்டின் பார்வை ஆரோக்கியத்திற்கான மூன்று தசாப்த அர்ப்பணிப்பு',
    'why.access': 'நாடு முழுவதும் அணுகல்',
    'why.access.desc': 'நிபுணர் கண் பராமரிப்பு ஒருபோதும் தொலைவில் இல்லை என்பதை உறுதிப்படுத்தும் 50+ கிளைகள்.',
    'why.qualified': 'அரசு தகுதி பெற்ற பார்வை நிபுணர்கள்',
    'why.qualified.desc': 'ஒவ்வொரு பரிசோதனையும் தகுதியான, அனுபவமிக்க நிபுணர்களால்.',
    'why.brands': 'உலக கண்ணாடி பிராண்டுகள்',
    'why.brands.desc': 'சர்வதேச புகழ்பெற்ற 20+ பிராண்டுகளிலிருந்து தேர்ந்தெடுக்கப்பட்ட தொகுப்புகள்.',
    'why.academy': 'TVEC பதிவு அகாடமி',
    'why.academy.desc': 'இலங்கையின் கண் பராமரிப்பு நிபுணர்களின் அடுத்த தலைமுறையை பயிற்சி அளிக்கிறது.',
    'why.diagnostics': 'மேம்பட்ட நோய்கண்டறிதல்',
    'why.diagnostics.desc': 'துல்லியமான பராமரிப்புக்கான சமீபத்திய கண் மருத்துவ தொழில்நுட்பத்துடன் பொருத்தப்பட்டது.',

    // Testimonials
    'testimonials.heading': 'எங்கள் நோயாளிகளின் குரல்கள்',
    'testimonials.sub': 'எங்கள் சமூகத்தின் உண்மையான அனுபவங்கள்',

    // News
    'news.heading': 'கண் ஆரோக்கிய நுண்ணறிவுகள்',
    'news.sub': 'பார்வை மற்றும் காது பராமரிப்பு பற்றி தெரிந்துகொள்ளுங்கள்',
    'news.viewall': 'அனைத்து கட்டுரைகளையும் காண்க',
    'news.read': 'படிக்க',

    // CTA Banner
    'cta.heading': 'உங்கள் பார்வைக்கு நிபுணர் பராமரிப்பு தேவை',
    'cta.sub': 'உங்கள் அருகிலுள்ள Vision Care கிளையில் முழுமையான கண் பரிசோதனையை முன்பதிவு செய்யுங்கள்.',
    'cta.book': 'கண் பரிசோதனை',
    'cta.find': 'கிளையை கண்டறியுங்கள்',

    // Footer
    'footer.tagline': 'உலகை தெளிவாக பாருங்கள்',
    'footer.services': 'கண் பராமரிப்பு சேவைகள்',
    'footer.eyewear': 'கண்ணாடிகள்',
    'footer.company': 'நிறுவனம்',
    'footer.contact': 'எங்களை தொடர்பு கொள்ள',
    'footer.privacy': 'தனியுரிமைக் கொள்கை',
    'footer.terms': 'சேவை விதிமுறைகள்',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

    // Booking
    'booking.heading': 'உங்கள் கண் பரிசோதனையை முன்பதிவு செய்யுங்கள்',
    'booking.sub': 'உங்கள் விரும்பிய Vision Care கிளையில் முழுமையான கண் பரிசோதனையை திட்டமிடுங்கள்.',
    'booking.branch': 'கிளையைத் தேர்ந்தெடுங்கள்',
    'booking.service': 'சேவையைத் தேர்ந்தெடுங்கள்',
    'booking.date': 'விரும்பிய தேதி',
    'booking.time': 'விரும்பிய நேரம்',
    'booking.name': 'முழு பெயர்',
    'booking.phone': 'தொலைபேசி',
    'booking.email': 'மின்னஞ்சல்',
    'booking.submit': 'முன்பதிவை உறுதிப்படுத்துங்கள்',
    'booking.whatsapp': 'அல்லது WhatsApp வழியாக முன்பதிவு செய்யுங்கள்',
    'booking.success': 'உங்கள் சந்திப்பு முன்பதிவு செய்யப்பட்டது! தொலைபேசி அல்லது மின்னஞ்சல் மூலம் உறுதிப்படுத்துவோம்.',

    // Contact
    'contact.heading': 'உங்கள் பார்வைக்காக நாங்கள் இங்கே இருக்கிறோம்',
    'contact.name': 'முழு பெயர்',
    'contact.phone': 'தொலைபேசி',
    'contact.email': 'மின்னஞ்சல்',
    'contact.branch': 'அருகிலுள்ள கிளை',
    'contact.service': 'சேவை',
    'contact.message': 'செய்தி',
    'contact.submit': 'விசாரணையை சமர்ப்பியுங்கள்',
    'contact.hq': 'தலைமை அலுவலகம்',
    'contact.success': 'நன்றி! உங்கள் விசாரணை சமர்ப்பிக்கப்பட்டது. விரைவில் உங்களைத் தொடர்புகொள்வோம்.',

    // Branches
    'branches.heading': 'உங்களுக்கு அருகிலுள்ள Vision Care-ஐ கண்டறியுங்கள்',
    'branches.search': 'நகரம் அல்லது ஊர் மூலம் தேடுங்கள்...',
    'branches.allprovinces': 'அனைத்து மாகாணங்களும்',
    'branches.found': 'கிளைகள் கண்டறியப்பட்டன',
    'branches.directions': 'வழிகாட்டல்களைப் பெறுங்கள்',

    // Blog
    'blog.heading': 'கண் ஆரோக்கிய நுண்ணறிவுகள் & செய்திகள்',
    'blog.all': 'அனைத்தும்',

    // Careers
    'careers.heading': 'கண் பராமரிப்பில் அர்த்தமுள்ள தொழிலை உருவாக்குங்கள்',
    'careers.sub': 'இலங்கை முழுவதும் பார்வை மற்றும் வாழ்க்கைத் தரத்தை மேம்படுத்த அர்ப்பணிக்கப்பட்ட குழுவில் சேருங்கள்.',
    'careers.training': 'தொழில்முறை பயிற்சி',
    'careers.training.desc': 'தொடர்ச்சியான கற்றல் மற்றும் வளர்ச்சி வாய்ப்புகள்',
    'careers.growth': 'தொழில் வளர்ச்சி',
    'careers.growth.desc': 'துறைகள் முழுவதும் தெளிவான முன்னேற்ற பாதைகள்',
    'careers.islandwide': 'நாடு முழுவதும் பதவிகள்',
    'careers.islandwide.desc': 'இலங்கை முழுவதும் 50+ கிளைகளில் வாய்ப்புகள்',
    'careers.difference': 'மாற்றத்தை ஏற்படுத்துதல்',
    'careers.difference.desc': 'ஆயிரக்கணக்கானவர்களுக்கு உலகை நன்றாக பார்க்கவும் கேட்கவும் உதவுங்கள்',
    'careers.apply': 'இப்போது விண்ணப்பியுங்கள்',
    'careers.viewapply': 'பார்க்க & விண்ணப்பிக்க',
    'careers.close': 'மூடு',
    'careers.sendcv': 'CV அனுப்புங்கள்',

    // Cookie consent
    'cookie.text': 'உங்கள் உலாவல் அனுபவத்தை மேம்படுத்தவும், தள போக்குவரத்தை பகுப்பாய்வு செய்யவும் குக்கீகளைப் பயன்படுத்துகிறோம். தொடர்வதன் மூலம், எங்கள்',
    'cookie.privacy': 'தனியுரிமைக் கொள்கையை',
    'cookie.accept': 'குக்கீகளை ஏற்கவும்',
    'cookie.decline': 'நிராகரிக்கவும்',
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}

export function getSavedLanguage(): Language {
  const saved = localStorage.getItem('vc-lang');
  if (saved === 'si' || saved === 'ta') return saved;
  return 'en';
}

export function saveLanguage(lang: Language) {
  localStorage.setItem('vc-lang', lang);
}
