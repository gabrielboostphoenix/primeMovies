// Importing Area
import { Jwt } from 'jsonwebtoken';

// That's a user informations type
interface userInformations {
    jwtUserCredentials: Jwt,
    favoriteMovies: number[]
}

// Exporting Area
export type { userInformations };