import { UrlStoreType } from '../store/urlStoreType';

export const transformFromUrl = (): UrlStoreType => ({
    hash: location.hash,
    host: location.host,
    hostname: location.hostname,
    href: location.href,
    origin: location.origin,
    pathname: location.pathname,
    port: location.port,
    protocol: location.protocol,
    search: location.search,
});

export const transformToUrl = (urlObject: UrlStoreType) => {
    location.hash = urlObject.hash;
    location.host = urlObject.host;
    location.hostname = urlObject.hostname;
    location.href = urlObject.href;
    location.pathname = urlObject.pathname;
    location.port = urlObject.port;
    location.protocol = urlObject.protocol;
    location.search = urlObject.search;
};