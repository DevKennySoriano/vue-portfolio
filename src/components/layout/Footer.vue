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
                    href="https://facebook.com/yourusername"
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
                    href="https://linkedin.com/in/yourusername"
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
                    href="mailto:youremail@gmail.com"
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
    background: #445d48;
    border-radius: 20px 20px 0 0;
    text-align: center;
    font-family: "Inter", sans-serif;
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
    color: #fafafa;
}

.brand p {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #fafafa;
}

.socials {
    display: flex;
    gap: 16px;
}

.socials a {
    color: #fafafa;
    transition: transform 0.3s ease, color 0.3s ease;
}

.socials a:hover {
    color: #d5d3d3;
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
</style>