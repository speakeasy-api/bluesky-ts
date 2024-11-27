// deno-lint-ignore-file no-explicit-any

/**
 * Taken from https://github.com/developit/dlv
 *
 * Safely get a dot-notated path within a nested object, with ability to return
 * a default if the full key path does not exist or the value is undefined.
 */
export function dlv(
  obj: object | undefined,
  key: string | Array<string | number>,
  def?: any,
  p?: any,
  undef?: any,
) {
  key = typeof key === "string" ? key.split(".") : key;
  for (p = 0; p < key.length; p++) {
    obj = obj ? (obj as any)[key[p]] : undef;
  }
  return obj === undef ? def : obj;
}
