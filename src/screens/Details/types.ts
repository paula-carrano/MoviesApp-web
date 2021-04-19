
export type DetailMovie = {
    id: number,
    poster_path: string,
    original_title: string,
    backdrop_path: string,
    overview: string,
    release_date: string,
    runtime: number,
    genres: Genre[],
    video: Video[],
    vote_average: number,
}

export type Genre = {
    id: number,
    name: string
}

export type Video = {
    name: string,
    key: string

}