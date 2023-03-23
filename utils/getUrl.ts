export const getUrl = () =>
    process.env.NODE_ENV === 'production'
        ? 'https://api.tobyrushton.com'
        : 'http://localhost:3000'