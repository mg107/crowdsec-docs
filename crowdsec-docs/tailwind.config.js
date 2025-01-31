
/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./src/**/*.{js,jsx,ts,tsx,mdx}",
        "./unversioned/**/*.{js,jsx,ts,tsx,mdx}",
        "./versioned_docs/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors:{
                primary: {
                    light: "#2E2A77",
                    dark: '#242441',
                },
                secondary: "#F8AB13",
            }
        },
    },
    plugins: [],
    prefix: "tw-", // This is the prefix for the tailwind classes to not clash with docusarus classes
};
