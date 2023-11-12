export interface IAuthInterface {
    avatar:{
        gravatar:{
            hash:string
        },
        tmdb:{}
    },
    id: number,
    name: string,
    include_adult: boolean,
    username:string
    iso_639_1: string,
    iso_3166_1: string

}