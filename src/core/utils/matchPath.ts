import { Key, pathToRegexp } from "path-to-regexp";

const cache = {};
const cacheLimit = 10000;
let cacheCount = 0;

function compilePath(path: any, options: any) {
  const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
  // @ts-expect-error
  const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

  if (pathCache[path]) return pathCache[path];

  const keys: Key[] | undefined = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = { regexp, keys };

  if (cacheCount < cacheLimit) {
    pathCache[path] = result;
    cacheCount += 1;
  }

  return result;
}

interface Options {
  url?: string;
  path?: string | string[];
  strict?: boolean;
  sensitive?: boolean;
  exact?: boolean;
  params?: any;
}

/**
 * Public API for matching a URL pathname to a path.
 */
function matchPath(pathname: any, options: Options = {}) {
  if (typeof options === "string" || Array.isArray(options)) {
    // eslint-disable-next-line no-param-reassign
    options = { path: options };
  }

  const { path, exact = false, strict = false, sensitive = false } = options;

  // @ts-expect-error
  const paths = [].concat(path);

  return paths.reduce((matched: any, path) => {
    if (!path && path !== "") return null;
    if (matched) return matched;

    const { regexp, keys } = compilePath(path, {
      end: exact,
      strict,
      sensitive,
    });
    const match = regexp.exec(pathname);

    if (!match) return null;

    const [url, ...values] = match;
    const isExact = pathname === url;

    if (exact && !isExact) return null;

    return {
      path, // the path used to match
      url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
      isExact, // whether or not we matched exactly
      params: keys.reduce(
        (
          memo: { [x: string]: any },
          key: { name: string | number },
          index: string | number
        ) => {
          // eslint-disable-next-line no-param-reassign
          memo[key.name] = values[index];
          return memo;
        },
        {}
      ),
    };
  }, null);
}

export default matchPath;
