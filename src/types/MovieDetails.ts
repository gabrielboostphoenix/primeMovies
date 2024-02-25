// This is the type 'movie details'
interface movieDetails {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string | null,
        backdrop_path: string | null
    }[] | {
        id: number,
        name: string,
        poster_path: string | null,
        backdrop_path: string | null
    } | null,
    budget: number,
    genres: {
        id: number,
        name: string
    }[] | {
        id: number,
        name: string
    } | null,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: {
        id: number,
        logo_path: string | null,
        name: string,
        origin_country: string
    }[] | {
        id: number,
        logo_path: string | null,
        name: string,
        origin_country: string
    } | null,
    production_countries: {
        iso_3166_1: string,
        name: string
    }[] | {
        iso_3166_1: string,
        name: string
    } | null,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: {}[] | {} | null,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

// Exporting Area
export type { movieDetails };