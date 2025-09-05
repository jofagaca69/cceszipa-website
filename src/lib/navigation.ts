export interface NavigationOptions {
    exact?: boolean; // Si true, requiere coincidencia exacta
    caseSensitive?: boolean; // Si false, ignora mayúsculas/minúsculas
}

/**
 * Obtiene la ruta actual desde el objeto Astro.url
 * @param astroUrl - El objeto Astro.url
 * @returns La ruta actual (pathname)
 */
export const getCurrentPath = (astroUrl: URL): string => {
    return astroUrl.pathname;
};

/**
 * Determina si un enlace está activo basado en la ruta actual
 * @param href - La ruta del enlace a verificar
 * @param currentPath - La ruta actual
 * @param options
 * @returns true si el enlace está activo, false en caso contrario
 */
export const isActive = (
    href: string,
    currentPath: string,
    options: NavigationOptions = {}
): boolean => {
    const { exact = false, caseSensitive = true } = options;

    let linkPath = href;
    let currentPathToCheck = currentPath;

    // Normalizar caso si es necesario
    if (!caseSensitive) {
        linkPath = href.toLowerCase();
        currentPathToCheck = currentPath.toLowerCase();
    }

    // Coincidencia exacta
    if (exact || href === '/') {
        return linkPath === currentPathToCheck;
    }

    // Coincidencia por prefijo
    return currentPathToCheck.startsWith(linkPath);
};
/**
 * Función de conveniencia que combina getCurrentPath e isActive
 * @param href - La ruta del enlace a verificar
 * @param astroUrl - El objeto Astro.url
 * @param options
 * @returns true si el enlace está activo, false en caso contrario
 */
export const isLinkActive = (
    href: string,
    astroUrl: URL,
    options?: NavigationOptions
): boolean => {
    const currentPath = getCurrentPath(astroUrl);
    return isActive(href, currentPath, options);
};