const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media",
    theme: {
        extend: {
            textColor: {
                white: "#FFF",
                black: "#000",
                red: colors.red,
            },
        },
    },
    variants: {
        extend: {
            padding: ["hover"],
        },
    },
    plugins: [],
};
