export function boolAttr(value?: boolean): "" | undefined {
  return value === true ? "" : undefined;
}
