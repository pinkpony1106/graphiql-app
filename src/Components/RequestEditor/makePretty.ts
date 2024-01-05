export function makePretty(queryText: string) {
  const lines = queryText
    .split(/\r\n|\r|\n/g)
    .map((x) => x.trim().replace(/\s+/g, ' '))
    .filter((x) => x != '')
    .join(' ')
    .split('')
    .filter((el, idx, arr) => {
      if (el === ' ' && arr[idx - 1] === '{') return false;
      return true;
    });

  let tabCounter = 0;
  const tab = '  ';

  const unitedLines = lines
    .map((x) => {
      if (x === '}') {
        if (tabCounter > 0) {
          tabCounter--;
        }
        x = '\n' + `${tab.repeat(tabCounter)}}`;
      }
      if (x === '{') {
        tabCounter++;
        x = `{\n` + `${tab.repeat(tabCounter)}`;
      }
      return x;
    })
    .join('');

  let LinesBefore = unitedLines
    .replace(/(?<=(\n\s{2,}))(\b\w*\b({.*\n*\s*})*)(\s)(\b\w*\b)/g, `$2$1$5`)
    .replace(/(?<=(\s*)}\s)(\b\w)/, `$1$2`);
  let LinesAfter = LinesBefore.replace(
    /(?<=(\n\s{2,}))(\b\w*\b({.*\n*\s*})*)(\s)(\b\w*\b)/g,
    `$2$1$5`
  ).replace(/(?<=(\s*)}\s)(\b\w)/, `$1$2`);

  while (LinesAfter !== LinesBefore) {
    LinesBefore = LinesAfter;
    LinesAfter = LinesBefore.replace(
      /(?<=(\n\s{2,}))(\b\w*\b({.*})*)(\s)(\b\w*\b)/g,
      `$2$1$5`
    ).replace(/(?<=(\s*)}\s)(\b\w)/, `$1$2`);
  }

  return LinesAfter;
}
