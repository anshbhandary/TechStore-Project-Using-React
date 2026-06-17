import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover Premium
          <span> Tech Gadgets</span>
        </h1>

        <p>
          Shop the latest electronics, smart devices,
          and accessories at unbeatable prices.
        </p>

        <button className="hero-btn">
          Shop Now
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          alt="Tech"
        />
      </div>
    </section>
  );
}