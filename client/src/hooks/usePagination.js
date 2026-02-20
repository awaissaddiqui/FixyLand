import { useState, useCallback } from "react";

/**
 * Manage pagination state.
 *
 * @param {number} initialPage
 * @param {number} pageSize
 */
export function usePagination(initialPage = 1, pageSize = 10) {
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / pageSize);

  const next = useCallback(
    () => setPage((p) => Math.min(p + 1, totalPages || 1)),
    [totalPages],
  );
  const prev = useCallback(() => setPage((p) => Math.max(p - 1, 1)), []);
  const goTo = useCallback((n) => setPage(n), []);

  return { page, pageSize, total, setTotal, totalPages, next, prev, goTo };
}
