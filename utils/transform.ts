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
