
import '../../../assets/css/about.css';
import Footer from './footer';
const AboutPage = () => {
  return (

    <>    <div className="containe">
      <header>
        <h1 className="typed">About Our Boathouse</h1>
      </header>
      <main className='m'>
        <section className="about-section">
          <h2 className="typed">Our Story</h2>
          <p>
            Founded in 2024, our boathouse has been a staple in the local
            community for providing exceptional boating experiences. What
            started as a small rental service has grown into a hub for water
            enthusiasts of all kinds.
          </p>
          <p>
            Our passion for the water drives everything we do. We believe in
            providing top-notch customer service and maintaining a fleet of
            well-maintained boats and equipment to ensure your safety and
            enjoyment on the water.
          </p>
        </section>
        <section className="mission-section">
          <h2 className="typed">Our Mission</h2>
          <p>
            Our mission is simple: to create unforgettable experiences on the
            water for our customers. Whether you re a seasoned angler, a
            family looking for a fun day out, or an adventurer seeking new
            thrills, we are here to make your time on the water memorable and
            hassle-free.
          </p>
        </section>
        <section className="team-section">
          <h2 className="typed">Meet Our Team</h2>
          <p>
            At the heart of our boathouse is our dedicated team of water
            enthusiasts. From our knowledgeable staff who can help you choose
            the right boat for your adventure to our experienced guides who
            lead our tours, each member of our team is committed to providing
            you with the best possible experience.
          </p>
        </section>
      </main>
    </div>
      <Footer/>
      </>
  );
};

export default AboutPage;
