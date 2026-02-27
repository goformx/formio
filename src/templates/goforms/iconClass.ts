type iconset = 'lucide' | 'bi' | 'fa';

export default (_iconset: iconset, name: string, spinning: boolean): string => {
  if (spinning) {
    return 'formio-icon formio-icon-spinner animate-spin';
  }
  return `formio-icon formio-icon-${name}`;
};
