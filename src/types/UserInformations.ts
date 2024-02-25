// Importing Area
import { Jwt } from 'jsonwebtoken';

// That's a type 'user informations'
interface userInformations {
    jwtUserCredentials: Jwt,
    favoriteMovies: number[]
}

// Exporting Area
export type { userInformations };