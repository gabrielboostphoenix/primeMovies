// Importing Area
import { movie } from './Movie';

// This is the API response's type
interface apiResponse {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: movie[],
    total_pages: number,
    total_results: number
}

// Exporting Area
export type { apiResponse };