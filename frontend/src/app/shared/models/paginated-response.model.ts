// This interface describes the wrapper object your API returns
// when pagination is enabled.
// It matches your backend's ApiResponse or PagedResult structure.

export interface PaginatedResponse<T> {
    data: T[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    success: boolean;
    message: string;
}