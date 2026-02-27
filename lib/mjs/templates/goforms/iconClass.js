export default (_iconset, name, spinning) => {
    if (spinning) {
        return 'formio-icon formio-icon-spinner animate-spin';
    }
    return `formio-icon formio-icon-${name}`;
};
