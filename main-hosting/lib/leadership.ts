// Names, roles and biographies from the published IMOKO leadership pages.
// Source capture and image edit records: ../leadership-update (14 September 2026).
export type Leader = {
  id: string;
  name: string;
  role: string;
  email: string;
  image: string;
  bio: readonly string[];
};
const people: readonly Leader[] = [
  {
    "id": "michael-ihekwoaba",
    "name": "Michael Ihekwoaba",
    "role": "Chief Executive Officer",
    "email": "mihekwoaba@imokong.com",
    "image": "/images/leadership/michael-ihekwoaba.webp",
    "bio": [
      "Michael Ihekwoaba is a seasoned business leader and strategic expert with over a decade of experience in telecommunications, higher education, and business management.",
      "At Swift Networks Limited, a Nigerian telecommunications services provider that offers broadband internet and connectivity solutions to homes and businesses, Michael’s career progression reflected his versatility and leadership impact. He began by leading the Marketing Unit, where he strengthened brand visibility and market positioning. His dedication and expertise propelled him to lead the Human Resources & Administration team, where he built strategies that sustained a satisfied and high-performing workforce. He later advanced to become Head of Consumer Business and Support, a pivotal role in which he consistently broke sales records, drove innovative strategies that boosted revenue, and expanded market share. At this stage, Michael also became a member of the Management Committee of Swift Networks, contributing to strategic decisions that shaped the company’s direction.",
      "Beyond telecommunications, Michael doubles as the MD/CEO of Imoko Films Ltd, profitably producing numerous movies with valuable lessons for a global audience.",
      "A lover of philosophy, Michael holds a Bachelor of Arts degree in Philosophy from the University of Lagos (magna cum laude) and a Master’s degree in Philosophy from Strathmore University. In his early career, he taught philosophy at the prestigious Pan-Atlantic University, focusing on Western philosophy, peace, and conflict resolution in Africa. He was also a Research Associate at Lagos Business School, conducting research and leading academic initiatives.",
      "Michael further honed his leadership expertise with certifications in Non-Profit Leadership and Management (Lagos Business School, Pan-Atlantic University), the Advanced Leadership course at Daystar Leadership Academy, and specialized training in communication and writing (Nigerian Institute of Journalism). His credentials are complemented by certificates in professional human resources management, underscoring his holistic approach to leadership."
    ]
  },
  {
    "id": "ugochukwu-azuogu",
    "name": "Ugochukwu Azuogu",
    "role": "Chief Financial Officer",
    "email": "uazuogu@imokong.com",
    "image": "/images/leadership/ugochukwu-azuogu.webp",
    "bio": [
      "Ugochukwu is a finance-first operator and strategic advisor with deep cross-sector experience spanning finance, supply chain, and advisory across Nigeria and West Africa. He brings over 8 years of progressive leadership across global shipping, agro-chemicals manufacturing, and startup advisory, with a track record of driving financial clarity, operational discipline, and commercial scale.",
      "Ugochukwu led supply chain operations at Candel Agro-chemicals, optimizing end-to-end logistics for 13 SKUs of product across Nigeria and Ghana and was involved in delivering over 4.5 million dollars in procurement contracts. At CMA CGM, one of the world's largest shipping companies, he managed credit risk portfolios achieving demurrage collection targets exceeding 50 million dollars, advised on cross-border logistics decisions, and supported the launch of transshipment operations at the Lekki Deep Seaport, where he acted as the pioneer transshipment manager.",
      "He has advised startups on financial restructuring, growth strategy, and investor relations, and brings a CFO's mindset to early-stage decision-making: balancing cash discipline with scale ambition. He is known for combining analytical depth with operational speed, building robust models, closing funding gaps, and helping teams act on data.",
      "He is a certified Chartered Accountant (ACA), a Financial Modeling and Valuation Analyst (FMVA), and has attended Corporate Finance and Strategy trainings by seasoned experts at NYU Stern and BCG. He earned a degree in Accountancy from the University of Nigeria and completed a mini-MBA at the Lagos Business School.",
      "At IMOKO, he leads finance, operations, and capital strategy, building the systems and discipline required to scale a modern African consumer brand."
    ]
  },
  {
    "id": "julius-okoro",
    "name": "Engr. Julius Okoro",
    "role": "Manager - Sales & Marketing",
    "email": "jokoro@imokong.com",
    "image": "/images/leadership/julius-okoro.webp",
    "bio": [
      "Julius Okoro holds a strong foundation in Systems Engineering and Network Design, complemented by early exposure to operational excellence through his time as a Management Trainee in a leading blue-chip manufacturing company. This experience broadened his perspective, equipping him with strategic thinking, operational insight, and leadership skills that enhance his technical expertise.",
      "He has built a successful career as a Systems Engineer, excelling in complex network design and integration projects. Julius is recognized for galvanizing teams to deliver prompt, high-quality service, coordinating cross-functional efforts to ensure efficient execution and reliable outcomes in demanding technical environments.",
      "Transitioning into sales leadership, Julius leverages his deep technical knowledge to understand client needs, design tailored solutions, and communicate value with clarity and precision. His ability to bridge engineering expertise with customer engagement enables him to drive business growth, foster trust, and secure long-term partnerships in highly competitive markets.",
      "Known for his resourcefulness, analytical mindset, and commitment to excellence, Julius combines hands-on engineering capability with sales acumen to deliver impactful results. He brings a unique blend of technical credibility and persuasive leadership, positioning him as a dynamic force in both technical and commercial domains."
    ]
  },
  {
    "id": "sylvia-makuachukwu",
    "name": "Alaebo Sylvia Makuachukwu",
    "role": "Regional Sales Manager - South East",
    "email": "amakuachukwu@imokong.com",
    "image": "/images/leadership/sylvia-makuachukwu.webp",
    "bio": [
      "Sylvia graduated in Pure and Applied Chemistry from the University of Lagos (UNILAG). She has undergone specialized training in Health and Safety, High Performance Liquid Chromatography (HPLC), and Analytical Method Validation, and is a proud member of the Institute of Chartered Chemists of Nigeria (ICCON).",
      "She has accumulated several years of hands-on experience working with leading pharmaceutical companies in Nigeria, including Emzor Pharmaceutical Industries, Swipha, and Juhel Nigeria Limited.",
      "Recognized for her exceptional performance, Sylvia has won the Best Quality Control Staff award multiple times. She consistently demonstrates excellence in maintaining high standards of professionalism, regulatory compliance, and product quality.",
      "Known for her detail-oriented approach, scientific expertise, and ability to contribute effectively through teamwork and innovation, Sylvia drives organizational success in the pharmaceutical industry."
    ]
  },
  {
    "id": "eusebius-eze",
    "name": "Eusebius Eze",
    "role": "Head - Food and Pharmaceutical Division",
    "email": "eeze@imokong.com",
    "image": "/images/leadership/eusebius-eze.webp",
    "bio": [
      "Eusebius holds a BSc in Pharmacology, Therapeutics, and Toxicology from the University of Lagos. He has also conducted research on the Antidepressant and Anxiolytic Activity of Crude Drugs in Mice, reflecting his commitment to evidence-based therapeutics and drug safety.",
      "With over 10 years of experience in community pharmacy, he has built and scaled a multi-branch healthcare organization focused on accessible, patient-centered pharmaceutical care. Under his leadership, the business expanded from a single location to several branches, setting new standards for quality and service delivery.",
      "Eusebius combines clinical expertise, business acumen, and a passion for public health to drive impact across communities in Africa."
    ]
  },
  {
    "id": "kingsley-okoronkwo",
    "name": "Engr. Kingsley Okoronkwo",
    "role": "Head, Information and ICT",
    "email": "kokoronkwo@imokong.com",
    "image": "/images/leadership/kingsley-okoronkwo.webp",
    "bio": [
      "Kingsley Okoronkwo holds a B.Eng. in Electrical and Electronics Engineering from the Federal University of Technology, Owerri (FUTO). He has further strengthened his expertise through Backend Web Development training at AltSchool Africa, Frontend Web Development certification from InternHub, and professional certifications in Responsive Web Design, jQuery, and Cybersecurity.",
      "He is an experienced developer specializing in JavaScript, TypeScript, Node.js, React, and modern backend technologies. Kingsley builds secure, scalable, and user-focused web applications with a passion for high-performance digital solutions.",
      "Throughout his career, he has contributed to projects in transportation, real estate, and digital voting systems, collaborating with cross-functional teams to deliver reliable applications with intuitive user experiences. His expertise includes leading frontend initiatives, designing secure backend architectures, integrating payment and mailing systems, and optimizing performance for applications serving thousands of users.",
      "Passionate about clean code and continuous learning, Kingsley actively explores modern software architecture, backend engineering, and cloud-native technologies while contributing to innovative digital products."
    ]
  },
  {
    "id": "chimezie-anyakora",
    "name": "Prof. Chimezie Anyakora",
    "role": "Chairman",
    "email": "canyakaora@imokong.com",
    "image": "/images/leadership/chimezie-anyakora.webp",
    "bio": [
      "Professor Chimezie Anyakora is the Chief Executive Officer of Bloom Public Health. He holds a PhD in Pharmaceutical Chemistry and taught at the Faculty of Pharmacy of the University of Lagos for over a decade. He has also been involved in public health and medicine quality research.",
      "Professor Anyakora was the Nigeria Country Director for the United States Pharmacopeia. Prior to that he consulted for the Global Health Impact Program, where he worked on public health projects across several African countries including Nigeria, Cameroon, Congo, Malawi, Ghana, Tanzania, Uganda, Congo Brazzaville, and more. He is very active in regional public health initiatives across the continent.",
      "As the country lead of the United States Pharmacopeia and the Chief of Party of the Promoting the Quality of Medicines program in Nigeria, Professor Anyakora led the development and execution of the overall project strategy in Nigeria. He is now leading Bloom Public Health and continues to advance public health on the continent, especially in different African countries where Bloom Public Health has offices including Nigeria, Rwanda, Botswana, Zambia, and Cameroon.",
      "Lately he has been doing a lot in the vaccine space. Through Bloom Public Health he supported Nigeria in the development of the National Vaccine Policy and worked with the country on a WHO-funded vaccine manufacturing ecosystem mapping. He is currently leading the localization of pharmaceutical manufacturing on the continent through various Bloom Public Health projects."
    ]
  },
  {
    "id": "fernando-vega-catalan",
    "name": "Dr. F. J. Vega Catalan",
    "role": "Director",
    "email": "fjvegac@imokong.com",
    "image": "/images/leadership/fernando-vega-catalan.webp",
    "bio": [
      "F. J. Vega Catalan holds a Masters in Chemistry and a PhD in Physics, and taught at the University of Malaga in Spain for two years and at the University of Ibadan for over a decade.",
      "After more than a year in Abuja as an expert with the United Nations Industrial Development Organisation, he joined a team to establish the Lagos Business School before moving into the corporate world as a director in several companies. The latest was Helmar Building Materials, where he currently serves as a non-executive director.",
      "He is also the chairman of Sapphire Surgical Centre in Victoria Island, Lagos, and was a director at the Educational Co-operation Society for several decades."
    ]
  }
];

const executiveOrder = ["michael-ihekwoaba","ugochukwu-azuogu","julius-okoro","sylvia-makuachukwu","eusebius-eze","kingsley-okoronkwo"];
const boardOrder = ["chimezie-anyakora","michael-ihekwoaba","fernando-vega-catalan","ugochukwu-azuogu"];

function roster(ids: readonly string[]): Leader[] {
  return ids.map(id => {
    const person = people.find(person => person.id === id);
    if (!person) throw new Error(`Missing leadership profile: ${id}`);
    return person;
  });
}

export const executiveMembers = roster(executiveOrder);
export const boardMembers = roster(boardOrder);

