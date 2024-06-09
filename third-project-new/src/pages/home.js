import React from 'react';
import Navbar from './Navbar'; // Navbar For Every Page
import "./home.css";
import zadnjaSlika from '../pictures/market.PNG';
import pritokaImage from '../pictures/kamioni3.jpg';
import pritokaFirma from '../pictures/pritoka.jpg';
import majdanFirma from '../pictures/majdan2.jpg';
import betonaraImage from '../pictures/betonarabest.jpg';
import kamenicaFirma from '../pictures/kamenicabest.jpg';


const Home = () => {
  return (
    <div>
      <Navbar />
      { 
      <img src={pritokaImage} className='pritokaFirstPic'/>
      
      }

      <hr className='homeHR' />
      <h1 className='h1home'>BOB D.O.O.</h1>

      <h2 className='h2home'>Who are we?</h2>

      <p className='p1home'>BOB d.o.o. is more than just a company name; it is a legacy, a tribute to the founders whose initials spell out BOB: Behar, Omer, and Besim. Established in 1990, BOB d.o.o. began as a humble grocery store, 
        a modest venture born out of a deep commitment to serve the community. This foundation was laid by the visionary Behar, whose entrepreneurial spirit was passed down through the generations.
        The company, originally a small grocery store, was a testament to Behar’s dedication and hard work. His passion for providing quality goods to the local community set the stage for what would become a much larger enterprise. 
        As the years went by, the leadership baton was passed to the next generation, with Omer taking the helm. It was under his guidance that the grocery store began to flourish and expand its horizons.
    Omer, with a keen eye for opportunities and a relentless drive to grow, saw potential beyond the confines of the grocery business. He envisioned a future where BOB d.o.o. could diversify and cater to various market needs. 
    With this vision, he expanded the company’s operations to include a building materials store. This strategic move allowed BOB d.o.o. to tap into the booming construction industry, providing essential materials to builders and 
    developers who are amazing really...</p>

    <h3 className='h3home'>Where can you find us?</h3>
    <hr className='findUsHR' />

    <img src={pritokaFirma} className='pictureTwo'/>
    <h1 className='h1pritoka'>Pritoka, Bihać</h1>
    <hr className='pritokaHR' />
    <p className='p1pritoka'>
    Firm in Pritoka, Bihac, stands as a pinnacle of success in the region, <strong className='p1strong'>boasting an impressive annual revenue of over 4,000,000 BAM.</strong> With a team of six dedicated individuals, this thriving enterprise has carved 
    its place in the local market. Anchored by two skilled drivers ensuring timely deliveries and two diligent warehouse workers managing inventory, the firm operates with precision and efficiency. Adding a touch 
    of warmth and professionalism are two women adeptly handling the cash registers, fostering positive customer experiences. Despite its modest size, Firm in Pritoka exemplifies resilience and adaptability, navigating 
    market challenges with finesse. Its success is a testament to the visionary leadership and unwavering commitment to excellence ingrained in its operations. As the heartbeat of the community, Firm in Pritoka not only
     meets but exceeds expectations, embodying the values of integrity, quality, and customer satisfaction. With each passing year, it continues to flourish, leaving an indelible mark on the business landscape of Bihac and beyond.
     The future for Firm in Pritoka, Bihac, shines even brighter with the recent addition of a new building/hall, poised to elevate operations to new heights. <strong className='p1strong'>Anticipating a surge in productivity, the firm forecasts an annual revenue 
     exceeding 6,000,000 BAM, </strong>reflecting its unwavering commitment to growth and prosperity. Isn't this really amazing? Wow.......
    </p>



    <img src={majdanFirma} className='majdanImage'/>
    <h2 className='h2majdan'>Majdan, Gata</h2>
    <hr className='majdanHR'/>
    <p className='p1majdan'>
    Nestled in the picturesque landscape of Gata lies Majdan, a quarry that stands as a testament to efficiency, sustainability, <strong className='p1strong'>and unparalleled cleanliness in cash generation. </strong>
    Majdan is not just any quarry; it is a beacon of innovation and excellence, redefining industry standards and setting a new benchmark for success.
    At the heart of Majdan's operations is its remarkable ability to produce clean cash, <strong className='p1strong'>generating a staggering 3,000 BAM per day without compromising 
    on environmental integrity or ethical practices. </strong>This feat is not merely a result of chance but a deliberate strategy meticulously crafted to maximize profits while minimizing ecological impact.
    The cornerstone of Majdan's success lies in its advanced infrastructure and state-of-the-art equipment. With a fleet of six excavators, three kipper trucks, and two Caterpillars, the quarry operates 
    with unmatched efficiency and precision. Each piece of machinery is meticulously maintained, ensuring optimal performance and minimal downtime, thereby maximizing productivity and profitability.
    But what truly sets Majdan apart is its unwavering commitment to environmental sustainability. Unlike traditional quarries that leave a trail of destruction in their wake, Majdan employs cutting-edge 
    technologies and best practices to minimize its ecological footprint. From innovative water management systems to stringent dust control measures, every aspect of operations is carefully designed to 
    preserve the natural environment and protect the surrounding ecosystem.
    </p>



    <img src = {betonaraImage} className='betonaraImage' />
    <h2 className='h2betonara'>Betonara, Kamenica</h2>
    <hr className='betonaraHR'/>
    <p className='p1betonara'>
    The concrete plant, nestled in the heart of the industrial district, stands as a testament to efficiency and productivity. With its six operational trucks constantly in motion, and a range of cutting-edge machinery 
    dedicated to concrete production, it epitomizes the pinnacle of modern engineering and construction practices.
    At the core of the concrete plant's operations are its fleet of six trucks, each meticulously maintained to ensure optimal performance and reliability. 
    These trucks serve as the lifeblood of the plant, transporting raw materials to and from the site with precision and efficiency. Whether navigating busy urban streets 
    or traversing rugged terrain, they stand ready to meet the demands of any project, large or small.
    Complementing the fleet of trucks are the plant's state-of-the-art concrete production machines. From mixers and batching plants to conveyors and pumps, these
     machines work in harmony to produce high-quality concrete with unmatched consistency and precision. Equipped with the latest technology and operated by skilled technicians,
      they enable the plant to meet the exact specifications of each customer, delivering tailor-made solutions for a wide range of construction projects.
    But the success of the concrete plant goes beyond its impressive machinery; it is also a testament to the dedication and expertise of its workforce. 
    </p>


    <img src = {kamenicaFirma} className='kamenicaImage' />
    <h2 className='h2kamenica'>Kamenica, Bihać</h2>
    <hr className='kamenicaHR'/>
    <p className='p1kamenica'>
    Kamenica, nestled in the serene outskirts of Bihac, stands as a cornerstone of the local construction industry, embodying resilience, efficiency, and unwavering commitment to excellence. 
    Despite its modest fleet of three trucks, this <strong className='p1strong'>bulding material store boasts an impressive annual revenue exceeding 2,000,000 BAM, underscoring its significance in the regional economy. </strong>
    At the heart of Kamenica's operations is its dedication to precision and quality in stone extraction and supply. With a carefully curated team of skilled workers and technicians, 
    the quarry ensures that every piece of stone meets the highest standards of quality and craftsmanship. From meticulously selecting the best raw materials to employing cutting-edge 
    machinery for extraction and processing, Kamenica delivers products that exceed expectations and stand the test of time.
    Despite its relatively small fleet, Kamenica's three trucks play a crucial role in the quarry's day-to-day operations. 
    Whether transporting raw materials from the quarry to the processing plant or delivering finished products to customers, these trucks are the lifeline of the operation, 
    ensuring that supplies are delivered promptly and efficiently. Meticulously maintained and operated by experienced drivers, they embody the reliability and efficiency that Kamenica prides itself on.
    </p>

    <img src = {zadnjaSlika} className='slikaZadnja' />
    <h2 className='h2izacic'>Izačić, Bihać</h2>
    <hr className='izacicHR '/>
    <p className='p1izacic'>
    The grocery store, nestled in the heart of the bustling town, serves as a vital hub for the local community, offering a 
    diverse range of food products and essentials. Despite its modest size,  <strong className='p1strong'>the store boasts an impressive annual revenue of 1,000,000 BAM </strong>, reflecting its significance in the regional economy
    At the core of the grocery store's success is its unwavering commitment to quality and customer satisfaction. From fresh produce to pantry staples, 
    every item is carefully selected to meet the highest standards of excellence, ensuring that customers receive nothing but the best. With a focus on 
    locally sourced and artisanal products, the store celebrates the rich culinary heritage of the region while also catering to modern tastes and preferences.
    But what truly sets the grocery store apart is its dedication to personalized service and community engagement. Friendly staff members greet customers by name, 
    offering helpful recommendations and assistance with their shopping needs. Whether it's helping a customer find a specific ingredient or offering cooking tips and recipe ideas, 
    the store goes above and beyond to create a welcoming and inclusive atmosphere for all.
    </p>
    

    </div>


    
    
  );
};

export default Home;
