import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import PageHero from "../../components/common/PageHero";

export default function NotFoundPage() {
  return (
    <main>
      <PageHero title="404 Error" breadcrumb="Error" />

      <section
        className="bg-[var(--color-surface-soft)]"
        style={{ padding: "var(--spacing-section) 0" }}
      >
        <Container className="flex flex-col items-center text-center gap-6 py-8">
          {/* Illustration area */}
          <div className="relative w-full max-w-sm mx-auto flex items-center justify-center">
            {/* Simple SVG scenery */}
            <svg
              viewBox="0 0 400 250"
              className="w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sky patch */}
              <ellipse cx="200" cy="130" rx="190" ry="110" fill="#e8f8f2" />
              {/* Clouds */}
              <ellipse cx="80" cy="60" rx="35" ry="18" fill="white" />
              <ellipse cx="105" cy="52" rx="25" ry="16" fill="white" />
              <ellipse cx="300" cy="55" rx="30" ry="15" fill="white" />
              <ellipse cx="325" cy="47" rx="22" ry="14" fill="white" />
              {/* Hills */}
              <ellipse
                cx="100"
                cy="220"
                rx="120"
                ry="60"
                fill="#0e9f6e"
                opacity="0.7"
              />
              <ellipse
                cx="310"
                cy="230"
                rx="130"
                ry="65"
                fill="#0e9f6e"
                opacity="0.6"
              />
              <ellipse
                cx="200"
                cy="240"
                rx="100"
                ry="50"
                fill="#0a7f59"
                opacity="0.5"
              />
              {/* Trees */}
              <polygon points="70,170 55,205 85,205" fill="#0a7f59" />
              <rect x="68" y="205" width="4" height="12" fill="#6b3e1a" />
              <polygon points="55,180 40,210 70,210" fill="#0e9f6e" />
              <rect x="53" y="210" width="4" height="10" fill="#6b3e1a" />
              <polygon points="340,165 325,200 355,200" fill="#0a7f59" />
              <rect x="338" y="200" width="4" height="12" fill="#6b3e1a" />
              <polygon points="325,175 310,205 340,205" fill="#0e9f6e" />
              {/* Small creatures (birds) */}
              <path
                d="M160 80 Q165 75 170 80"
                stroke="#6b7280"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M180 70 Q185 65 190 70"
                stroke="#6b7280"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M220 85 Q225 80 230 85"
                stroke="#6b7280"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            {/* Big 404 text over illustration */}
            <span
              className="absolute font-heading font-black text-[var(--color-text-primary)] select-none"
              style={{
                fontSize: "clamp(4rem, 18vw, 7rem)",
                lineHeight: 1,
                opacity: 0.9,
              }}
            >
              404
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-lg">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-[var(--color-text-primary)]">
              Ohh! Page Not Found
            </h1>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We're sorry, but we can't seem to find the page you requested.
              This might be because you have typed the web address incorrectly.
            </p>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-8 py-3 rounded-[var(--radius-primary)] hover:bg-[var(--color-primary-dark)] transition-colors mt-2"
          >
            Back To Home
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </Container>
      </section>
    </main>
  );
}
