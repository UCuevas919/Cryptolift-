/* Reset y Variables */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-bg-primary: #0a0a0a;
    --color-bg-secondary: #141414;
    --color-bg-tertiary: #1a1a1a;
    --color-text-primary: #ffffff;
    --color-text-secondary: #a0a0a0;
    --color-accent: #f59e0b;
    --color-accent-hover: #d97706;
    --color-border: #2a2a2a;
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    --border-radius: 12px;
    --transition: all 0.3s ease;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    z-index: 1000;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-accent), #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-md);
}

.nav-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: var(--transition);
    font-weight: 500;
}

.nav-link:hover {
    color: var(--color-accent);
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background-color: var(--color-text-primary);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
    z-index: -1;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: center;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
}

.highlight {
    color: var(--color-accent);
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
}

.hero-stats {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.stat {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-accent);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 20px 60px rgba(245, 158, 11, 0.2);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    text-align: center;
}

.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-bg-primary);
}

.btn-primary:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
}

.btn-large {
    padding: 1.125rem 2.5rem;
    font-size: 1.125rem;
}

.btn-block {
    display: block;
    width: 100%;
}

/* Importance Section */
.importance {
    padding: var(--spacing-xl) 0;
    background-color: var(--color-bg-secondary);
}

.importance-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: center;
}

.importance-image img {
    width: 100%;
    border-radius: var(--border-radius);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
}

.section-description {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
}

.importance-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.importance-list li {
    display: flex;
    gap: var(--spacing-sm);
    align-items: flex-start;
}

.icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

.importance-list h3 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
}

.importance-list p {
    color: var(--color-text-secondary);
}

/* Benefits Section */
.benefits {
    padding: var(--spacing-xl) 0;
}

.text-center {
    text-align: center;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.benefit-card {
    background-color: var(--color-bg-secondary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    transition: var(--transition);
}

.benefit-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent);
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.1);
}

.benefit-icon {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-sm);
}

.benefit-card h3 {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-sm);
}

.benefit-card p {
    color: var(--color-text-secondary);
}

/* Exchanges Section */
.exchanges {
    padding: var(--spacing-xl) 0;
    background-color: var(--color-bg-secondary);
}

.exchanges-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.exchange-card {
    position: relative;
    background-color: var(--color-bg-tertiary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    border: 2px solid var(--color-border);
    transition: var(--transition);
}

.exchange-card:hover {
    border-color: var(--color-accent);
    transform: translateY(-5px);
}

.exchange-badge {
    position: absolute;
    top: -12px;
    right: var(--spacing-md);
    background-color: var(--color-accent);
    color: var(--color-bg-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}

.exchange-logo {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-sm);
}

.exchange-logo img {
    max-width: 100%;
    max-height: 100%;
}

.exchange-card h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
}

.exchange-description {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
    min-height: 60px;
}

.exchange-features {
    list-style: none;
    margin-bottom: var(--spacing-md);
}

.exchange-features li {
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
}

/* Comparison Table */
.comparison {
    padding: var(--spacing-xl) 0;
}

.table-wrapper {
    overflow-x: auto;
    margin-top: var(--spacing-lg);
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--color-bg-secondary);
    border-radius: var(--border-radius);
    overflow: hidden;
}

.comparison-table th,
.comparison-table td {
    padding: var(--spacing-sm) var(--spacing-md);
    text-align: left;
    border-bottom: 1px solid var(--color-border);
}

.comparison-table th {
    background-color: var(--color-bg-tertiary);
    font-weight: 600;
    color: var(--color-accent);
}

.comparison-table tbody tr:hover {
    background-color: var(--color-bg-tertiary);
}

/* Guides Section */
.guides {
    padding: var(--spacing-xl) 0;
    background-color: var(--color-bg-secondary);
}

.guides-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.guide-card {
    background-color: var(--color-bg-tertiary);
    border-radius: var(--border-radius);
    overflow: hidden;
    border: 1px solid var(--color-border);
    transition: var(--transition);
}

.guide-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent);
}

.guide-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.guide-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.guide-card:hover .guide-image img {
    transform: scale(1.05);
}

.guide-content {
    padding: var(--spacing-md);
}

.guide-category {
    display: inline-block;
    background-color: var(--color-accent);
    color: var(--color-bg-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.guide-content h3 {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-sm);
}

.guide-content p {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-sm);
}

.guide-link {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.guide-link:hover {
    color: var(--color-accent-hover);
}

/* Resources Section */
.resources {
    padding: var(--spacing-xl) 0;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.resource-card {
    background-color: var(--color-bg-secondary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    text-align: center;
    transition: var(--transition);
}

.resource-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent);
}

.resource-card h3 {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-sm);
}

.resource-card p {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
}

/* FAQ Section */
.faq {
    padding: var(--spacing-xl) 0;
    background-color: var(--color-bg-secondary);
}

.faq-container {
    max-width: 800px;
    margin: var(--spacing-lg) auto 0;
}

.faq-item {
    background-color: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    margin-bottom: var(--spacing-sm);
    overflow: hidden;
}

.faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    background: none;
    border: none;
    color: var(--color-text-primary);
    font-size: 1.125rem;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition: var(--transition);
}

.faq-question:hover {
    color: var(--color-accent);
}

.faq-icon {
    font-size: 1.5rem;
    transition: var(--transition);
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
    max-height: 500px;
}

.faq-answer p {
    padding: 0 var(--spacing-md) var(--spacing-md);
    color: var(--color-text-secondary);
    line-height: 1.6;
}

/* CTA Final */
.cta-final {
    padding: var(--spacing-xl) 0;
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, transparent 100%);
}

.cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-md);
}

.cta-content p {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

/* Footer */
.footer {
    background-color: var(--color-bg-secondary);
    padding: var(--spacing-lg) 0 var(--spacing-md);
    border-top: 1px solid var(--color-border);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: var(--spacing-sm);
    color: var(--color-accent);
}

.footer-section p {
    color: var(--color-text-secondary);
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: var(--transition);
}

.footer-section a:hover {
    color: var(--color-accent);
}

.footer-bottom {
    text-align: center;
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-secondary);
}

.disclaimer {
    font-size: 0.875rem;
    margin-top: var(--spacing-sm);
    font-style: italic;
}

/* Responsive Design */
@media (max-width: 968px) {
    .hero-content,
    .importance-content {
        grid-template-columns: 1fr;
    }

    .hero-image {
        order: -1;
    }

    .benefits-grid,
    .exchanges-grid,
    .guides-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .resources-grid,
    .footer-content {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 640px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        flex-direction: column;
        background-color: var(--color-bg-secondary);
        width: 100%;
        padding: var(--spacing-md);
        transition: var(--transition);
        border-bottom: 1px solid var(--color-border);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-toggle {
        display: flex;
    }

    .benefits-grid,
    .exchanges-grid,
    .guides-grid,
    .resources-grid,
    .footer-content {
        grid-template-columns: 1fr;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-stats {
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .section-title {
        font-size: 1.75rem;
    }

    .cta-content h2 {
        font-size: 1.75rem;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* Selection */
::selection {
    background-color: var(--color-accent);
    color: var(--color-bg-primary);
}