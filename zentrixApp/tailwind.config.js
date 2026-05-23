/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'timExtraLight': 'Itim_200ExtraLight',
        'timLight': 'Itim_300Light',
        'timRegular': 'Itim_400Regular',
        'timMedium': 'Itim_500Medium',
        'timSemiBold': 'Itim_600SemiBold',
        'timBold': 'Itim_700Bold',
      }
    },
  },
  plugins: [],
}

