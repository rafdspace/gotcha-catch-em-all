type FallbackMatcher = "none" | ((e: unknown) => Error);

const fallbackUnknownError = (e: unknown) => {
  return Error(`Unknown error: ${String(e)}`);
};

/**
 * Return an Error object from an error.
 *
 * An error in Javascript is not always an instance of Error class. This helper
 * converts the error into an Error object so you can always manipulate it as
 * an Error object.
 *
 * @param e - error
 */
export function castError(
  e: unknown,
  fallbackMatcher: FallbackMatcher = fallbackUnknownError
): Error {
  if (e instanceof Error) return e;

  if (typeof e === "string") return Error(e);

  if (fallbackMatcher === "none") {
    return Error(String(e));
  }

  return fallbackMatcher(e);
}
