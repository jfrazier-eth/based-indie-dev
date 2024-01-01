/**
 * Range represents a series of numbers where `from` is inclusive and `to` is exclusive
 */
export interface Range {
  from: number;
  to: number;
}

export function* iterRange(range: Range) {
  let current = range.from;

  while (current < range.to) {
    yield current;
    current += 1;
  }
}

export function partitionRange(range: Range, maxSize: number): Range[] {
  let ranges: Range[] = [];
  for (let start = range.from; start < range.to; start += maxSize) {
    const to = Math.min(range.to, start + maxSize);
    const item: Range = {
      from: start,
      to: to,
    };
    ranges.push(item);
  }

  return ranges;
}
