module.exports = {
    purge: [],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                green: {
                    450: '#1B873F'
                },
                pink: {
                    450: '#FF008E'
                },
                orange: {
                    450: '#FF7A29'
                },
                yellow: {
                    450: '#FFCD1E'
                },
                black: {
                    750: '#202024',
                    850: '#121214',
                    950: '#09090A'
                }
            },
            backgroundImage: theme => ({
                'home-background': "url('/src/assets/background-home.png')",
                'opinions-background': "url('/src/assets/background-opinions.png')"
            })
        }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
