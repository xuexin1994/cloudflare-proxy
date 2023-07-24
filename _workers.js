export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        url.host = "https://chat-gpt-next-web-vercel-ekluh2wlb-xuexin1994.vercel.app";
        return fetch(url, {
            headers: request.headers,
            method: request.method,
            body: request.body,
            redirect: 'follow'
        });
    }
}
