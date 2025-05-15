import cssClasses from './cssClasses';

export const transform = (type: string, text: string) => {
  if (!text) {
    return text;
  }

  const columns = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
  };

  const themes: { [key: string]: string } = {
    primary: 'btn-primary',
    secondary: 'btn-outline',
    success: 'btn-primary',
    danger: 'btn-primary',
    warning: 'btn-primary',
    info: 'btn-primary',
    light: 'btn-outline',
    dark: 'btn-primary',
    link: 'btn-outline',
  };

  switch (type) {
    case 'columns':
      return Object.prototype.hasOwnProperty.call(columns, text.toString())
        ? columns[text.toString()]
        : text;
    case 'class':
      return Object.prototype.hasOwnProperty.call(cssClasses, text.toString())
        ? cssClasses[text.toString()]
        : text;
    case 'theme':
      return themes[text] || text;
    default:
      return text;
  }
};
