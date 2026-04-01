<script>
export default {
    name: "FooterComponent",
};
</script>

<template>
    <footer class="footer">
        <div class="footer-content">
            <!-- Brand / Name -->
            <div class="brand">
                <h2>Ken</h2>
                <p>© 2026. All rights reserved.</p>
            </div>
            <div class="socials">
                <a
                    href="https://www.facebook.com/soriano.kenny"
                    target="_blank"
                    rel="noopener"
                    aria-label="Facebook"
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                    </svg>
                </a>

                <a
                    href="https://www.linkedin.com/in/kennysoriano/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z"
                        />
                    </svg>
                </a>

                <a
                    href="https://github.com/DevKennySoriano"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                        />
                    </svg>
                </a>

                <a
                    href="mailto:devkennysoriano@gmail.com"
                    aria-label="Gmail"
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.footer {
    padding: 40px 20px;
    background: linear-gradient(180deg, var(--surface-strong), var(--surface-strong-2));
    border-radius: 20px 20px 0 0;
    text-align: center;
    font-family: "Inter", sans-serif;
    border-top: 1px solid color-mix(in srgb, var(--text-inverse) 20%, transparent);
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
}

.brand h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: var(--text-inverse);
}

.brand p {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: color-mix(in srgb, var(--text-inverse) 86%, transparent);
}

.socials {
    display: flex;
    gap: 16px;
}

.socials a {
    color: var(--text-inverse);
    transition: transform 0.3s ease, color 0.3s ease;
}

.socials a:hover {
    color: color-mix(in srgb, var(--text-inverse) 75%, #86efac);
    transform: translateY(-3px);
}

.socials svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
}


@media (min-width: 768px) {
    .footer-content {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1000px;
        margin: 0 auto;
    }
}

@media (max-width: 640px) {
    .footer {
        border-radius: 14px 14px 0 0;
        padding: 28px 16px;
    }

    .brand h2 {
        font-size: 20px;
    }

    .brand p {
        font-size: 13px;
    }
}
</style>