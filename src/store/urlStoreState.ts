/**
 * Basically the same as Location object. Except for search, which is a map.
 */
export interface UrlStoreState {
    hash?: string;
    host?: string;
    hostname?: string;
    href?: string;
    origin?: string;
    pathname?: string;
    port?: string;
    protocol?: string;
    search?: { [key: string]: string };
}