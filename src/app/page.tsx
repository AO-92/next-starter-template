// app/page.tsx
export default function Home() {
  const card = {
    background: '#11131a',
    border: '1px solid #1f2330',
    borderRadius: 12,
    padding: '20px',
  } as const;

  const link = { textDecoration: 'none', color: '#7cc7ff' } as const;

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 20px' }}>
      {/* HERO */}
      <section style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 14, letterSpacing: 2, color: '#9aa4b2' }}>A0-BUILDS HOLDINGS LLC</div>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: '12px 0 8px' }}>
          Building Secure Systems.<br />Creating Opportunity.
        </h1>
        <p style={{ color: '#b9c2cf', fontSize: 18, maxWidth: 720, margin: '0 auto' }}>
          We design, build, and secure infrastructure and applications—incubating products and services that scale.
        </p>
        <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="mailto:joshua@a0builds.com" style={{ ...link, padding: '10px 16px', border: '1px solid #1f2330', borderRadius: 8 }}>Contact</a>
          <a href="#portfolio" style={{ ...link, padding: '10px 16px', border: '1px solid #1f2330', borderRadius: 8 }}>Portfolio</a>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: 32 }}>
        <div style={card}><h3>Security & SOC</h3><p style={{ color: '#b9c2cf' }}>Managed detection, monitoring, and ethical testing for SMBs and teams.</p></div>
        <div style={card}><h3>Marketplace</h3><p style={{ color: '#b9c2cf' }}>KNCT-Hub connects group buyers to unlock wholesale pricing.</p></div>
        <div style={card}><h3>R&D / Labs</h3><p style={{ color: '#b9c2cf' }}>Encryption tooling and infrastructure experiments that become products.</p></div>
        <div style={card}><h3>Impact</h3><p style={{ color: '#b9c2cf' }}>Giving back through education, access, and community projects.</p></div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ marginTop: 32 }}>
        <h2 style={{ marginBottom: 16 }}>Portfolio</h2>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <a href="https://knct-hub.com" style={{ ...card, ...link }}>
            <h3>KNCT-Hub</h3>
            <p style={{ color: '#b9c2cf' }}>Marketplace MVP for coordinated group buying.</p>
          </a>
          <a href="mailto:security@a0builds.com" style={{ ...card, ...link }}>
            <h3>A0-Security</h3>
            <p style={{ color: '#b9c2cf' }}>SOC services & penetration testing.</p>
          </a>
          <a href="#" style={{ ...card, ...link }}>
            <h3>A0-Labs</h3>
            <p style={{ color: '#b9c2cf' }}>Encryption tool & infra experiments (coming soon).</p>
          </a>
          <a href="#" style={{ ...card, ...link }}>
            <h3>A0-Impact</h3>
            <p style={{ color: '#b9c2cf' }}>Philanthropy & community programs (coming soon).</p>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: 48 }}>
        <h2>Contact</h2>
        <p style={{ color: '#b9c2cf' }}>
          Email <a href="mailto:joshua@a0builds.com" style={link}>joshua@a0builds.com</a> or <a href="mailto:security@a0builds.com" style={link}>security@a0builds.com</a>
        </p>
      </section>

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #1f2330', color: '#9aa4b2', fontSize: 14 }}>
        © {new Date().getFullYear()} A0-Builds Holdings LLC · Salt Lake City, Utah
      </footer>
    </main>
  );
}
