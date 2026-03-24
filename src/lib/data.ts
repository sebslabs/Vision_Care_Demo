export const branches = [
  { name: "Vision Care Colombo 03", address: "123 Galle Road, Colombo 03", phone: "+94 11 234 5678", district: "Colombo", province: "Western", hours: "Mon–Sat: 9am–6pm", services: ["Eye Care", "Contact Lenses", "Hearing"], lat: 6.8900, lng: 79.8550 },
  { name: "Vision Care Colombo 07", address: "45 Horton Place, Colombo 07", phone: "+94 11 345 6789", district: "Colombo", province: "Western", hours: "Mon–Sat: 9am–6pm", services: ["Eye Care", "Contact Lenses"], lat: 6.9147, lng: 79.8632 },
  { name: "Vision Care Nugegoda", address: "78 High Level Road, Nugegoda", phone: "+94 11 456 7890", district: "Colombo", province: "Western", hours: "Mon–Sat: 9am–6pm", services: ["Eye Care", "Hearing"], lat: 6.8720, lng: 79.8890 },
  { name: "Vision Care Kandy", address: "12 Dalada Veediya, Kandy", phone: "+94 81 234 5678", district: "Kandy", province: "Central", hours: "Mon–Sat: 9am–5:30pm", services: ["Eye Care", "Contact Lenses", "Hearing"], lat: 7.2906, lng: 80.6337 },
  { name: "Vision Care Galle", address: "56 Main Street, Galle Fort", phone: "+94 91 234 5678", district: "Galle", province: "Southern", hours: "Mon–Sat: 9am–5:30pm", services: ["Eye Care", "Contact Lenses"], lat: 6.0329, lng: 80.2168 },
  { name: "Vision Care Negombo", address: "89 Lewis Place, Negombo", phone: "+94 31 234 5678", district: "Gampaha", province: "Western", hours: "Mon–Sat: 9am–6pm", services: ["Eye Care"], lat: 7.2083, lng: 79.8358 },
  { name: "Vision Care Kurunegala", address: "34 Colombo Road, Kurunegala", phone: "+94 37 234 5678", district: "Kurunegala", province: "North Western", hours: "Mon–Sat: 9am–5:30pm", services: ["Eye Care", "Hearing"], lat: 7.4863, lng: 80.3647 },
  { name: "Vision Care Jaffna", address: "21 Hospital Road, Jaffna", phone: "+94 21 234 5678", district: "Jaffna", province: "Northern", hours: "Mon–Sat: 9am–5pm", services: ["Eye Care", "Contact Lenses"], lat: 9.6615, lng: 80.0255 },
  { name: "Vision Care Matara", address: "67 Anagarika Dharmapala Mw, Matara", phone: "+94 41 234 5678", district: "Matara", province: "Southern", hours: "Mon–Sat: 9am–5:30pm", services: ["Eye Care"], lat: 5.9485, lng: 80.5353 },
  { name: "Vision Care Anuradhapura", address: "15 Main Street, Anuradhapura", phone: "+94 25 234 5678", district: "Anuradhapura", province: "North Central", hours: "Mon–Sat: 9am–5pm", services: ["Eye Care", "Hearing"], lat: 8.3114, lng: 80.4037 },
  { name: "Vision Care Ratnapura", address: "42 Main Street, Ratnapura", phone: "+94 45 234 5678", district: "Ratnapura", province: "Sabaragamuwa", hours: "Mon–Sat: 9am–5:30pm", services: ["Eye Care"], lat: 6.6828, lng: 80.3994 },
  { name: "Vision Care Badulla", address: "8 Passara Road, Badulla", phone: "+94 55 234 5678", district: "Badulla", province: "Uva", hours: "Mon–Sat: 9am–5pm", services: ["Eye Care"], lat: 6.9934, lng: 81.0550 },
  { name: "Vision Care Trincomalee", address: "29 Court Road, Trincomalee", phone: "+94 26 234 5678", district: "Trincomalee", province: "Eastern", hours: "Mon–Sat: 9am–5pm", services: ["Eye Care"], lat: 8.5874, lng: 81.2152 },
  { name: "Vision Care Batticaloa", address: "55 Bar Road, Batticaloa", phone: "+94 65 234 5678", district: "Batticaloa", province: "Eastern", hours: "Mon–Sat: 9am–5pm", services: ["Eye Care"], lat: 7.7310, lng: 81.6747 },
  { name: "Vision Care Nuwara Eliya", address: "3 Park Road, Nuwara Eliya", phone: "+94 52 234 5678", district: "Nuwara Eliya", province: "Central", hours: "Mon–Sat: 9am–5pm", services: ["Eye Care"], lat: 6.9497, lng: 80.7891 },
];

export const services = [
  {
    id: 'eye-testing',
    name: 'Eye Testing & Comprehensive Exam',
    icon: 'Eye',
    description: 'Thorough vision assessments using advanced diagnostic equipment by qualified optometrists.',
    image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'Our comprehensive eye examination goes beyond basic vision testing. We use state-of-the-art diagnostic technology to assess your overall eye health, screening for potential issues like glaucoma, cataracts, and retinal disorders before they affect your sight.',
    benefits: ['Early detection of eye diseases', 'Precise prescription for optimal clarity', 'Expert consultation with senior optometrists', 'Digital retinal imaging included'],
    process: ['Pre-screening assessment', 'Refraction test for vision clarity', 'Internal and external eye health check', 'Personalized recommendation and prescription']
  },
  {
    id: 'spectacles',
    name: 'Spectacles & Prescription Glasses',
    icon: 'Glasses',
    description: 'Precision-crafted lenses paired with frames from the world\'s finest brands.',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'From high-fashion designer frames to durable everyday eyewear, we offer a vast collection to suit every style and budget. Our precision-engineered lenses are customized to your specific lifestyle needs, whether for digital use, driving, or reading.',
    benefits: ['Widest range of international brands', 'Customized lens solutions (Varilux, Crizal)', 'Expert frame styling and fitting', '24-month warranty on premium frames'],
    process: ['Frame selection with styling expert', 'Precise facial measurements', 'Custom lens manufacturing', 'Final fitting and adjustment']
  },
  {
    id: 'contact-lenses',
    name: 'Contact Lenses',
    icon: 'CircleDot',
    description: 'Daily, monthly, toric, and specialty lenses with expert fitting consultations.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'Experience the freedom of clear vision without frames. We provide a full spectrum of contact lens options, including daily disposables, monthly wear, and specialty lenses for complex prescriptions like astigmatism and presbyopia.',
    benefits: ['Personalized fitting trial', 'Advanced breathable materials', 'Solutions for active lifestyles', 'Continuous aftercare support'],
    process: ['Suitability consultation', 'Fitting and trial period', 'Handling and hygiene training', 'Follow-up assessment']
  },
  {
    id: 'sunglasses',
    name: 'Sunglasses',
    icon: 'Sun',
    description: 'Premium UV-protective eyewear combining style with certified eye protection.',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'Protect your eyes from harmful UV rays without compromising on style. Our curated collection features the latest designs from global fashion houses, available with both non-prescription and prescription polarized lenses.',
    benefits: ['100% UV400 protection', 'Reduced glare with polarized technology', 'Latest global fashion trends', 'Prescription sunglass options available'],
    process: ['UV protection consultation', 'Style and fit matching', 'Prescription lens customization (optional)', 'Expert alignment']
  },
  {
    id: 'low-vision',
    name: 'Low Vision Care',
    icon: 'Search',
    description: 'Specialized aids and rehabilitation for individuals with partial sight loss.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'For those whose vision cannot be fully corrected with standard glasses or surgery, our Low Vision Clinic provides specialized assessments and high-tech optical aids to help maintain independence and quality of life.',
    benefits: ['Specialized magnification tools', 'Electronic reading aids', 'Independent living rehabilitation', 'Compassionate expert support'],
    process: ['Functional vision assessment', 'Aid demonstration and trial', 'Training for daily activities', 'Ongoing support and review']
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma Assessment',
    icon: 'Activity',
    description: 'Early detection screening for the silent thief of sight, protecting your long-term vision.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'Glaucoma often has no symptoms until vision loss is permanent. Our advanced screening protocol includes optical coherence tomography (OCT) and visual field analysis to detect pressure and nerve changes at the earliest possible stage.',
    benefits: ['Advanced OCT imaging', 'Pressure (IOP) monitoring', 'Visual field analysis', 'Direct referral to ophthalmologists'],
    process: ['Intraocular pressure measurement', 'Digital nerve assessment', 'Visual field testing', 'Comprehensive report and referral']
  },
  {
    id: 'paediatric',
    name: 'Paediatric Eye Care',
    icon: 'Baby',
    description: 'Gentle, child-friendly eye examinations in a comfortable and reassuring environment.',
    image: 'https://images.unsplash.com/photo-1596704017210-917c8003a8f5?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'Good vision is crucial for a child\'s development and learning. Our paediatric specialists use age-appropriate techniques to assess vision and eye coordination, ensuring your child has the best start in life.',
    benefits: ['Specialized children\'s optometrists', 'Fun and interactive testing', 'Durable and stylish kids\' frames', 'Early myopia management'],
    process: ['Child-led engagement', 'Vision and muscle balance check', 'Refraction (often with drops)', 'Fun frame selection experience']
  },
  {
    id: 'ortho-k',
    name: 'Orthokeratology (Ortho-K)',
    icon: 'Moon',
    description: 'Overnight corrective lenses for myopia control — freedom from daytime glasses.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    longDescription: 'Ortho-K is a non-surgical solution that uses specialized lenses worn during sleep to gently reshape the cornea. Wake up with clear vision and enjoy your day without the need for glasses or contact lenses.',
    benefits: ['Freedom from daytime eyewear', 'Effective myopia control for children', 'Non-surgical and reversible', 'Perfect for sports and swimming'],
    process: ['Corneal mapping (Topography)', 'Custom lens design', 'Overnight trial and training', 'Regular progress monitoring']
  },
];

export const products = [
  { id: 1, brand: 'Ray-Ban', model: 'Aviator Classic', price: 32500, type: 'Sunglasses', gender: 'Unisex', shape: 'Aviator', color: 'Gold', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, brand: 'Prada', model: 'PR 17WS', price: 68000, type: 'Sunglasses', gender: 'Women', shape: 'Cat-Eye', color: 'Black', image: 'https://images.unsplash.com/photo-1511499767350-a15943ee6481?auto=format&fit=crop&q=80&w=800' },
  { id: 3, brand: 'Carrera', model: '1045/S', price: 28500, type: 'Sunglasses', gender: 'Men', shape: 'Square', color: 'Silver', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800' },
  { id: 4, brand: 'Coach', model: 'HC6185', price: 42000, type: 'Spectacle Frames', gender: 'Women', shape: 'Round', color: 'Tortoise', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800' },
  { id: 5, brand: 'Vogue', model: 'VO5407', price: 18500, type: 'Spectacle Frames', gender: 'Women', shape: 'Oval', color: 'Rose', image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800' },
  { id: 6, brand: 'Armani', model: 'AR7232', price: 55000, type: 'Spectacle Frames', gender: 'Men', shape: 'Square', color: 'Navy', image: 'https://images.unsplash.com/photo-1591076482161-421a3a94d3fd?auto=format&fit=crop&q=80&w=800' },
  { id: 7, brand: 'Porsche Design', model: 'P8362', price: 95000, type: 'Spectacle Frames', gender: 'Men', shape: 'Square', color: 'Gunmetal', image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800' },
  { id: 8, brand: 'Oakley', model: 'Holbrook', price: 24500, type: 'Sunglasses', gender: 'Men', shape: 'Wayfarer', color: 'Matte Black', image: 'https://images.unsplash.com/photo-1625591339762-431a642ca649?auto=format&fit=crop&q=80&w=800' },
  { id: 9, brand: 'Ray-Ban', model: 'Round Metal', price: 28000, type: 'Spectacle Frames', gender: 'Unisex', shape: 'Round', color: 'Gold', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800' },
  { id: 10, brand: 'Prada', model: 'VPR 14Z', price: 72000, type: 'Spectacle Frames', gender: 'Women', shape: 'Cat-Eye', color: 'Havana', image: 'https://images.unsplash.com/photo-1511499767350-a15943ee6481?auto=format&fit=crop&q=80&w=800' },
  { id: 11, brand: 'Carrera', model: '8862', price: 22000, type: 'Spectacle Frames', gender: 'Men', shape: 'Square', color: 'Black', image: 'https://images.unsplash.com/photo-1502767089025-6572583495b3?auto=format&fit=crop&q=80&w=800' },
  { id: 12, brand: 'Ray-Ban', model: 'Wayfarer', price: 26500, type: 'Sunglasses', gender: 'Unisex', shape: 'Wayfarer', color: 'Tortoise', image: 'https://images.unsplash.com/photo-1511499767350-a15943ee6481?auto=format&fit=crop&q=80&w=800' },
  { id: 13, brand: 'Coach', model: 'HC8350F', price: 38000, type: 'Sunglasses', gender: 'Women', shape: 'Oval', color: 'Brown', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800' },
  { id: 14, brand: 'Vogue', model: 'VO5496S', price: 15000, type: 'Sunglasses', gender: 'Women', shape: 'Round', color: 'Pink', image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800' },
  { id: 15, brand: 'Oakley', model: 'Flak 2.0', price: 32000, type: 'Sports Frames', gender: 'Men', shape: 'Sport', color: 'Black', image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800' },
  { id: 16, brand: 'Ray-Ban', model: 'Junior RJ9052', price: 12500, type: 'Kids Frames', gender: 'Kids', shape: 'Wayfarer', color: 'Blue', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800' },
  { id: 17, brand: 'Vogue', model: 'VY2013', price: 8500, type: 'Kids Frames', gender: 'Kids', shape: 'Round', color: 'Red', image: 'https://images.unsplash.com/photo-1502767089025-6572583495b3?auto=format&fit=crop&q=80&w=800' },
  { id: 18, brand: 'Armani', model: 'EA4183', price: 48000, type: 'Sunglasses', gender: 'Men', shape: 'Square', color: 'Brown', image: 'https://images.unsplash.com/photo-1591076482161-421a3a94d3fd?auto=format&fit=crop&q=80&w=800' },
  { id: 19, brand: 'Porsche Design', model: 'P8478', price: 88000, type: 'Sunglasses', gender: 'Men', shape: 'Aviator', color: 'Silver', image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800' },
  { id: 20, brand: 'Coach', model: 'HC6208', price: 35000, type: 'Reading Glasses', gender: 'Women', shape: 'Oval', color: 'Burgundy', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800' },
  { id: 21, brand: 'Ray-Ban', model: 'Clubmaster', price: 29500, type: 'Spectacle Frames', gender: 'Unisex', shape: 'Square', color: 'Black Gold', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800' },
  { id: 22, brand: 'Carrera', model: '265', price: 25000, type: 'Spectacle Frames', gender: 'Unisex', shape: 'Round', color: 'Crystal', image: 'https://images.unsplash.com/photo-1502767089025-6572583495b3?auto=format&fit=crop&q=80&w=800' },
  { id: 23, brand: 'Prada', model: 'PS 05OV', price: 62000, type: 'Sports Frames', gender: 'Men', shape: 'Sport', color: 'Grey', image: 'https://images.unsplash.com/photo-1511499767350-a15943ee6481?auto=format&fit=crop&q=80&w=800' },
  { id: 24, brand: 'Oakley', model: 'Sutro', price: 28000, type: 'Sunglasses', gender: 'Unisex', shape: 'Sport', color: 'White', image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800' },
];

export const testimonials = [
  { name: 'Amara Perera', city: 'Colombo', service: 'Eye Testing', rating: 5, quote: 'The thoroughness of my eye examination at Vision Care was remarkable. The optometrist took time to explain everything clearly.', avatar: 'AP', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' },
  { name: 'Dinesh Kumar', city: 'Kandy', service: 'Spectacles', rating: 5, quote: 'Found the perfect pair of Prada frames. The staff were incredibly knowledgeable about face shapes and lens options.', avatar: 'DK', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150' },
  { name: 'Fatima Hassan', city: 'Galle', service: 'Contact Lenses', rating: 5, quote: 'Switching to daily contact lenses changed my life. The fitting process was comfortable and professional.', avatar: 'FH', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
  { name: 'Ruwan Silva', city: 'Negombo', service: 'Hearing Care', rating: 5, quote: 'The hearing assessment at Vision Care was the first step to reconnecting with the world around me.', avatar: 'RS', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { name: 'Priya Navaratnam', city: 'Jaffna', service: 'Paediatric Eye Care', rating: 5, quote: 'My daughter was nervous about her first eye test, but the team made it feel like a fun adventure.', avatar: 'PN', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
  { name: 'Sanjay Mendis', city: 'Matara', service: 'Ortho-K', rating: 5, quote: 'Ortho-K lenses gave my son freedom from glasses during school and sports. Truly life-changing.', avatar: 'SM', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
];

export const blogPosts = [
  { id: 1, category: 'Eye Health Tips', date: '2025-12-15', title: 'Digital Eye Strain: Protecting Your Vision in the Screen Age', excerpt: 'With increased screen time, learn essential strategies to reduce digital eye strain and maintain healthy vision.', readTime: '5 min' },
  { id: 2, category: 'New Products', date: '2025-12-10', title: 'Ray-Ban 2026 Collection Now Available', excerpt: 'Discover the latest Ray-Ban frames blending iconic design with contemporary innovation, now at Vision Care.', readTime: '3 min' },
  { id: 3, category: 'Company News', date: '2025-12-05', title: 'Vision Care Opens 52nd Branch in Batticaloa', excerpt: 'Expanding our commitment to accessible eye care across Sri Lanka with our newest branch in the Eastern Province.', readTime: '4 min' },
  { id: 4, category: 'Eye Health Tips', date: '2025-11-28', title: 'When Should Children Have Their First Eye Test?', excerpt: 'Early detection of vision problems in children is essential. Learn the recommended timeline for paediatric eye exams.', readTime: '6 min' },
  { id: 5, category: 'Hearing Health', date: '2025-11-20', title: 'Understanding Tinnitus: Causes and Modern Solutions', excerpt: 'Persistent ringing in the ears affects millions. Explore the causes and latest management techniques for tinnitus.', readTime: '7 min' },
  { id: 6, category: 'Vision Care Academy', date: '2025-11-15', title: '2026 Intake Now Open for Diploma in Optometry', excerpt: 'Begin your career in eye care with our TVEC-registered Diploma programme. Applications now being accepted.', readTime: '4 min' },
];

export const jobListings = [
  { id: 1, title: 'Qualified Optometrist', department: 'Clinical', location: 'Colombo', province: 'Western', type: 'Full-time', description: 'We seek a qualified optometrist to join our Colombo clinic team, providing comprehensive eye examinations and patient care.' },
  { id: 2, title: 'Optical Dispenser', department: 'Retail', location: 'Kandy', province: 'Central', type: 'Full-time', description: 'Help patients select the perfect eyewear with expert frame and lens recommendations at our Kandy branch.' },
  { id: 3, title: 'Hearing Care Specialist', department: 'Clinical', location: 'Colombo', province: 'Western', type: 'Full-time', description: 'Join our hearing solutions team to conduct audiological assessments and hearing aid fittings.' },
  { id: 4, title: 'Branch Manager', department: 'Operations', location: 'Galle', province: 'Southern', type: 'Full-time', description: 'Lead our Galle branch team, ensuring operational excellence and exceptional patient experience.' },
  { id: 5, title: 'Academy Lecturer — Optometry', department: 'Academy', location: 'Colombo', province: 'Western', type: 'Full-time', description: 'Teach and mentor the next generation of optometrists at Vision Care Academy.' },
  { id: 6, title: 'Digital Marketing Executive', department: 'Marketing', location: 'Colombo', province: 'Western', type: 'Full-time', description: 'Drive our digital presence and create compelling content across social media and web platforms.' },
  { id: 7, title: 'Retail Assistant', department: 'Retail', location: 'Negombo', province: 'Western', type: 'Part-time', description: 'Provide warm, knowledgeable customer service at our Negombo branch showroom.' },
  { id: 8, title: 'IT Support Officer', department: 'IT', location: 'Colombo', province: 'Western', type: 'Full-time', description: 'Maintain and support our branch IT infrastructure and point-of-sale systems island-wide.' },
];

export const bankingPartners = [
  { name: 'Sampath Bank', offer: '0% Installments up to 12 Months', logo: '/assets/banks/sampath.png' },
  { name: 'HNB', offer: '0% Installments up to 24 Months', logo: '/assets/banks/hnb.png' },
  { name: 'BOC', offer: 'Easy Payment Plans', logo: '/assets/banks/boc.png' },
  { name: 'Commercial Bank', offer: '0% Installments up to 12 Months', logo: '/assets/banks/combank.png' },
  { name: 'Seylan Bank', offer: '0% Installments up to 12 Months', logo: '/assets/banks/seylan.png' },
  { name: 'Nations Trust Bank', offer: '0% Installments up to 12 Months', logo: '/assets/banks/ntb.png' },
];

export const promotions = [
  {
    title: 'Flash Sale: 25% Off Frames',
    description: 'Get 25% off on all designer spectacle frames this month. Limited time offer!',
    code: 'VISION25',
    expiry: 'Valid until March 31, 2026',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Free Eye Test',
    description: 'Book your comprehensive eye exam today and get it absolutely free with any spectacle purchase.',
    code: 'FREETEST',
    expiry: 'Ongoing Offer',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800'
  }
];
