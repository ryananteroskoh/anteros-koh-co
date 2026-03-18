export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="wordmark">Anteros Koh <em>co·coa</em></a>
        <ul className="nav-links">
          <li><a href="#writing">Writing</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#stream">Stream</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-give"><a href="#give">Give freely</a></div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-ocean"></div>
        <div className="tide-line"></div>
        <div className="tide-line"></div>
        <div className="tide-line"></div>
        <div className="alch-mark">☿</div>
        <div className="hero-horizon"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Anteros Koh Co. — Refining what you already are</p>
          <h1 className="hero-title">
            <span className="tide-word">From the raw</span><br />
            <strong>to the gold.</strong>
          </h1>
          <div className="hero-rule"></div>
          <p className="hero-sub">
            Essays, reflections, and videos on self-understanding, inner strength, and the slow alchemical work of becoming who you were always meant to be. Everything here is free. Come when you need it. Leave when you&apos;re ready.
          </p>
          <div className="hero-cta">
            <a className="btn-gold" href="#writing">Start reading</a>
            <a className="btn-ghost" href="#about">About this place</a>
          </div>
        </div>
      </div>

      {/* ALCHEMY STRIP */}
      <div className="alchemy-strip">
        <div className="alch-stage">
          <div className="alch-symbol">🜔</div>
          <div>
            <div className="alch-label">The breaking down</div>
            <div className="alch-text">You arrive as you are. Unfinished, unresolved, asking questions. That is the beginning, not the problem.</div>
          </div>
        </div>
        <div className="alch-stage">
          <div className="alch-symbol">☿</div>
          <div>
            <div className="alch-label">The dissolving</div>
            <div className="alch-text">Old assumptions soften. The work of reading and sitting and returning to the world loosens what no longer serves.</div>
          </div>
        </div>
        <div className="alch-stage">
          <div className="alch-symbol">☉</div>
          <div>
            <div className="alch-label">The becoming</div>
            <div className="alch-text">What returns from the fire is not what went in. Stronger, clearer, capable of tending the garden and guarding the gate.</div>
          </div>
        </div>
      </div>

      {/* WRITING */}
      <section className="section" id="writing">
        <div className="section-label">Writing</div>
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input className="search-input" type="text" placeholder="Search by feeling, theme, or word…" />
        </div>
        <div className="articles-grid">
          <div className="article-card">
            <div className="card-tag">Myth · Love · Shadow</div>
            <div className="card-title">Anteros and the Love You Owe Yourself</div>
            <div className="card-excerpt">The god who avenges unreturned love is not cruel — he is the part of you that refuses to keep giving what is never received back.</div>
            <div className="card-meta">March 2025 · 8 min</div>
          </div>
          <div className="article-card">
            <div className="card-tag">Strength · Individuation</div>
            <div className="card-title">The Garden Is Not Soft</div>
            <div className="card-excerpt">Peace is not passivity. Every garden that has ever lasted had a wall. To protect something beautiful, you must become someone capable of standing at the gate.</div>
            <div className="card-meta">February 2025 · 11 min</div>
          </div>
          <div className="article-card">
            <div className="card-tag">Alchemy · Transformation</div>
            <div className="card-title">What the Fire Does Not Destroy</div>
            <div className="card-excerpt">The alchemists were not chasing gold. They were documenting what happens to a person who refuses to stay unrefined. The furnace was always internal.</div>
            <div className="card-meta">January 2025 · 9 min</div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="video-section" id="videos">
        <div className="section-label">Videos</div>
        <div className="videos-grid">
          <a className="video-card" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <div className="video-thumb">
              <div className="video-thumb-gradient"></div>
              <div className="play-btn"><div className="play-icon"></div></div>
            </div>
            <div className="video-body">
              <div className="video-tag">Myth · Eros · Anteros</div>
              <div className="video-title">The God Who Demands Love Be Returned</div>
              <div className="video-desc">A close reading of what Anteros actually represents — and why requited love is a form of strength, not luck.</div>
              <span className="video-link">Watch on YouTube</span>
            </div>
          </a>
          <a className="video-card" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <div className="video-thumb">
              <div className="video-thumb-gradient" style={{background: 'linear-gradient(135deg, #1A2E3E 0%, #2A4A5A 60%, #3A7A6A 100%)'}}></div>
              <div className="play-btn"><div className="play-icon"></div></div>
            </div>
            <div className="video-body">
              <div className="video-tag">Shadow · Ocean · Release</div>
              <div className="video-title">What the Tide Knows About Letting Go</div>
              <div className="video-desc">Sitting at the shore and thinking through grief, release, and what it means to return to yourself after loss.</div>
              <span className="video-link">Watch on YouTube</span>
            </div>
          </a>
          <a className="video-card" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <div className="video-thumb">
              <div className="video-thumb-gradient" style={{background: 'linear-gradient(135deg, #2E1A0E 0%, #6B3C22 60%, #9C5A35 100%)'}}></div>
              <div className="play-btn"><div className="play-icon"></div></div>
            </div>
            <div className="video-body">
              <div className="video-tag">Alchemy · Inner Work</div>
              <div className="video-title">The Breaking Down: Why Falling Apart Is the First Step</div>
              <div className="video-desc">The darkening is not the failure. It is the necessary dissolution before anything real can form.</div>
              <span className="video-link">Watch on YouTube</span>
            </div>
          </a>
        </div>
      </section>

      {/* STRENGTH BANNER */}
      <div className="strength-banner">
        <div className="strength-quote">
          Softness is the fruit.<br />
          <strong>Strength is the root.</strong>
        </div>
        <div className="strength-body">
          <p>The alchemical work is not about escaping yourself — it is about passing through yourself. What comes out the other side is not softer. It is clearer. More solid. More capable of love because it is no longer afraid of loss.</p>
          <p>You cannot truly tend a garden you are secretly terrified of losing. The keeper must be unafraid of standing at the edge of it, in the dark, alone.</p>
        </div>
      </div>

      {/* STREAM */}
      <section className="section" id="stream">
        <div className="section-label">Stream</div>
        <div className="thoughts-stream">
          <div className="thought-entry">
            <p className="thought-text">&ldquo;The prima materia is never somewhere else. It is always the thing you least want to look at.&rdquo;</p>
            <div className="thought-date">March 9</div>
          </div>
          <div className="thought-entry">
            <p className="thought-text">&ldquo;You cannot pour from a cup you&apos;ve convinced yourself doesn&apos;t exist. The first act of love is admitting you have one.&rdquo;</p>
            <div className="thought-date">February 28</div>
          </div>
          <div className="thought-entry">
            <p className="thought-text">&ldquo;The ocean keeps nothing. Returns without grief. Comes back fuller. The tide is a better teacher than most books.&rdquo;</p>
            <div className="thought-date">February 14</div>
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section className="donation-section" id="give">
        <div className="section-label" style={{color: 'var(--tide)'}}>
          <span style={{display:'inline-block', width:'26px', height:'1px', background:'var(--tide)', marginRight:'14px'}}></span>
          Give freely
        </div>
        <h2 className="donation-title">
          Knowledge flows like water.<br />
          <em>It does not ask to be repaid.</em>
        </h2>
        <p className="donation-body">
          Everything here is free, without condition. If something you found here changed something real in you — not out of courtesy, not out of guilt, but because it genuinely moved your life forward — you&apos;re welcome to pass something back. That is not payment. It is proof the work worked. A pity penny helps no one. A true gift honors both of us. Take your time. Come back when you&apos;re certain.
        </p>
        <a className="btn-ocean" href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">Give when it&apos;s real</a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">Anteros Koh Co·coa — Anteroskoh LLC</div>
        <div className="footer-note">All knowledge free, always.<br />The gold is already in you.</div>
      </footer>
    </>
  );
}
