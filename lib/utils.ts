export function getTextFromXmlElement(xml: string, path: string) {
  const parts = path.split(".");
  let result = xml;
  for (const part of parts) {
    const start = result.indexOf(`<${part}>`) + part.length + 2;
    const end = result.indexOf(`</${part}>`);
    result = result.slice(start, end);
  }
  return result;
}
