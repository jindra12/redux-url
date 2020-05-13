import { UrlStoreState } from '../store/urlStoreState';

export const transformFromUrl = (): UrlStoreState => ({
    hash: location.hash.replace('#', ''),
    host: location.host,
    hostname: location.hostname,
    href: location.href,
    origin: location.origin,
    pathname: location.pathname,
    port: location.port,
    protocol: location.protocol,
    search: transformSearchToQuery(location.search),
});

export const transformSearchToQuery = (
    search: string
): { [key: string]: string } => (search
    .replace('?', '')
    .split('&')
    .reduce((p: { [key: string]: string }, c) => {
        const [key, value] = c.split('=').map(decodeURIComponent);
        p[key] = value;
        return p;
    }, {}));

export const transformQueryToSearch = (
    query: { [key: string]: string }
) => `?${Object.entries(query)
        .filter(([key, value]) => key && value)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}`;
