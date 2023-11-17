import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                main: "#20232F",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                istok: ["Istok Web", "sans-serif"],
                ralewy: ["Raleway", "sans-serif"],
                libre: ["Libre Baskerville", "sans-serif"],
                mirza: ["Mirza", "serif"],
                karma: ["Karma", "serif"],
                jomhuaria: ["Jomhuria", "serif"],
                playfair: ["Playfair Display", "serif"],
            },
        },
    },

    plugins: [forms, require("daisyui")],

    daisyui: {
        themes: ["light"],
    },
};
