import palette from './palette';

const overrides = {
  MuiLink: {
    root: {
      color: palette.text.links,
    },
  },
  MuiCssBaseline: {
    '@global': {
      // The following three style rules help keep
      // the app at full height of the window.
      html: {
        height: '100%',
        overflowY: 'scroll'
      },
      body: {
        height: '100%',
        backgroundColor: '#fff'
      },
      'div#root': {
        height: '100%',
      },
    },
  },
};

export default overrides;
