import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blueGrey.darken2,
        accent: colors.blueGrey.darken4,
        secondary: '#F9AA33',
        background: colors.blueGrey.lighten5
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        button: colors.blue.accent2,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  iconfont: 'mdi'
}
