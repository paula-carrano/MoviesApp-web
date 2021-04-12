export type Paginate = {
    totalcount: number,
    currentPage: number,
    handleChange: (arg: number) => void,
    firstPage: () => void,
    lastPage: () => void,
    nextPage: () => void,
    prevPage: () => void
}

export type MovieResult = {
    total_pages: number,
    page: number
}