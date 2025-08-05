import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WP_URL || 'https://api.colexploradoresdelsaber.com/graphql';
const client = new GraphQLClient(endpoint);

/**
 * Función genérica para realizar consultas GraphQL.
 * @param query - La consulta GraphQL a ejecutar.
 * @param variables - (Opcional) Variables para la consulta GraphQL.
 * @returns Los datos de la respuesta.
 */
export const fetchGraphQL = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
    try {
        const data = await client.request<T>(query, variables);
        return data;
    } catch (error) {
        console.error('Error in fetchGraphQL:', error);
        throw new Error('Error executing GraphQL query');
    }
};