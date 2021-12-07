export interface PaginatedRequest<t> {
    total_count: number,
    incomplete_results: boolean,
    items: t[]
}
