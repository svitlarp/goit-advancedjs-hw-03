export function createUrl(keyword) {
    const options = {
        baseUrl: "https://pixabay.com/api/",
        apiKey: '50902999-34d3d718e1412684e61a556a9',
        query: keyword,
        imageType: "photo",
        orientation: "horizontal",
        safesearch: true,
    }
    console.log('Options:', options);
    
    const url = new URL(options.baseUrl);
    url.search = new URLSearchParams({
        key: options.apiKey,
        q: options.query,
        imageType: options.imageType,
        orientation: options.orientation,
        safesearch: options.safesearch,
    }).toString();

    return url;
}