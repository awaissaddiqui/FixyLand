import { useState, useEffect, useCallback } from "react";

/**
 * Generic data-fetching hook.
 *
 * @param {Function} serviceCall  - async service function
 * @param {Array}    deps         - extra dependencies that trigger refetch
 * @param {*}        params       - params passed into serviceCall
 */
export function useFetch(serviceCall, deps = [], params = undefined) {
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result =
        params !== undefined ? await serviceCall(params) : await serviceCall();
      setData(result.data ?? result);
      setMeta(result.meta ?? null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceCall, JSON.stringify(params), ...deps]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, meta, loading, error, refetch: execute };
}
