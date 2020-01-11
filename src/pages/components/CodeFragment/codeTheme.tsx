import {PrismTheme} from 'prism-react-renderer';

const theme: PrismTheme = {
  'plain': {
    'color': '#eeffff',
    'backgroundColor': '#212121'
  },
  'styles': [
    {
      'types': [
        'string'
      ],
      'style': {
        'color': 'rgb(195, 232, 141)'
      }
    },
    {
      'types': [
        'boolean'
      ],
      'style': {
        'color': 'rgb(255, 156, 172)'
      }
    },
    {
      'types': [
        'number',
        'keyword'
      ],
      'style': {
        'color': 'rgb(247, 140, 108)'
      }
    },
    {
      'types': [
        'comment'
      ],
      'style': {
        'color': 'rgb(74, 74, 74)',
        'fontStyle': 'italic'
      }
    },
    {
      'types': [
        'punctuation',
        'builtin'
      ],
      'style': {
        'color': 'rgb(137, 221, 255)'
      }
    },
    {
      'types': [
        'tag'
      ],
      'style': {
        'color': 'rgb(240, 113, 120)'
      }
    },
    {
      'types': [
        'attr-name'
      ],
      'style': {
        'color': 'rgb(255, 203, 107)'
      }
    },
    {
      'types': [
        'function'
      ],
      'style': {
        'color': 'rgb(130, 170, 255)'
      }
    }
  ]
};

export default theme;
