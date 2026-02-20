import { useState, useCallback } from "react";

/**
 * Reusable form-submit helper.
 * Returns { submit, loading, error, success, reset }
 *
 * @param {Function} submitFn  - async function that performs the submission
 * @param {Function} [onSuccess] - optional callback on success
 */
export function useFormSubmit(submitFn, onSuccess) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submit = useCallback(
    async (payload) => {
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
        const result = await submitFn(payload);
        const msg = result?.message || "Submitted successfully!";
        setSuccess(msg);
        if (onSuccess) onSuccess(result);
      } catch (err) {
        setError(err?.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    },
    [submitFn, onSuccess],
  );

  const reset = useCallback(() => {
    setError(null);
    setSuccess(null);
    setLoading(false);
  }, []);

  return { submit, loading, error, success, reset };
}
