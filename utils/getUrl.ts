export const getUrl = () =>
    process.env.NODE_ENV === 'production'
        ? 'https://gpt.tobyrushton.com'
        : 'http://localhost:3000'