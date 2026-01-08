import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WP_URL || 'https://api.colexploradoresdelsaber.com/graphql';
const client = new GraphQLClient(endpoint);

/**
 * Función genérica para realizar consultas GraphQL.
 * @param query - La consulta GraphQL a ejecutar.
 * @param variables - (Opcional) Variables para la consulta GraphQL.
 * @returns Los datos de la respuesta o null si falla (para no romper el build).
 */
export const fetchGraphQL = async <T>(query: string, variables?: Record<string, any>): Promise<T | null> => {
    try {
        const data = await client.request<T>(query, variables);
        return data;
    } catch (error) {
        // Durante el build, si la API no está disponible, no lanzamos error
        // para permitir que el build continúe con datos por defecto
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const isNetworkError = errorMessage.includes('ENOTFOUND') || 
                              errorMessage.includes('fetch failed') || 
                              errorMessage.includes('ECONNREFUSED');
        
        if (isNetworkError) {
            console.warn('⚠️ API no disponible durante el build. Usando datos por defecto.');
            return null;
        }
        
        console.error('Error in fetchGraphQL:', error);
        return null;
    }
};