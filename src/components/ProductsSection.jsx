const products = [
  {
    name: 'SteadyTails',
    href: 'https://steadytails.app',
    status: 'Pre-launch',
    platforms: 'iOS & Android',
    icon: '/steadytails_icon.png',
    tagline: 'Pet wellness and care tracking for dogs and cats.',
    description:
      'Owners are excellent observers and terrible historians. SteadyTails turns a few seconds a day into a record: daily wellbeing ratings laid over meals, routines, and medications, shared by everyone in the household, and exported as a vet-ready report.',
    features: [
      'Daily wellbeing check-ins that reveal real trends',
      'One shared timeline for every caregiver',
      'Reminders that clear on every phone at once',
      'Vet-ready PDF reports from months of history',
    ],
    screenshots: [
      { src: '/steadytails_trends.webp', alt: 'SteadyTails wellbeing trends screen' },
      { src: '/steadytails_today.webp', alt: 'SteadyTails shared daily care timeline' },
    ],
  },
];

function ProductsSection() {
  return (
    <section className="products" id="products" aria-labelledby="products-heading">
      <div className="section-header">
        <p className="section-eyebrow">Our Products</p>
        <h2 className="section-title" id="products-heading">
          What we&rsquo;re building
        </h2>
        <p className="section-subtitle">
          A small studio shipping a small number of carefully made apps.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-card-glow" aria-hidden="true"></div>

            <div className="product-card-body">
              <header className="product-header">
                <img
                  src={product.icon}
                  alt={`${product.name} app icon`}
                  className="product-icon"
                  width="72"
                  height="72"
                  loading="lazy"
                />
                <div className="product-heading">
                  <h3 className="product-name">
                    <a
                      className="product-name-link"
                      href={product.href}
                      title={`${product.name} — ${product.tagline}`}
                    >
                      {product.name}
                    </a>
                  </h3>
                  <p className="product-tagline">{product.tagline}</p>
                </div>
              </header>

              <div className="product-meta">
                <span className="product-pill product-pill-accent">{product.status}</span>
                <span className="product-pill">{product.platforms}</span>
              </div>

              <p className="product-description">{product.description}</p>

              <ul className="product-features">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="product-cta" href={product.href}>
                <span>Visit steadytails.app</span>
                <svg
                  className="product-cta-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="product-showcase" aria-hidden="true">
              {product.screenshots.map((shot, index) => (
                <div className={`product-phone product-phone-${index + 1}`} key={shot.src}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
