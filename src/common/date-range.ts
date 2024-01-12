/**
 * Range represents a series of numbers where `from` is inclusive and `to` is exclusive
 */
export interface DateRange {
  from: Date;
  to: Date;
}

export function* iterDateRange(range: DateRange, pageSize: number) {
  let end = range.to.getTime();
  for (
    let current = range.from.getTime();
    current <= end;
    current += pageSize
  ) {
    yield new Date(current);
  }
}

export function* partitionDateRange(range: DateRange, maxSize: number) {
  const absoluteEnd = range.to.getTime();
  for (const start of iterDateRange(range, maxSize)) {
    const startTime = start.getTime();
    const end = Math.min(startTime + maxSize, absoluteEnd);

    if (startTime === end) {
      break;
    }

    const item: DateRange = {
      from: start,
      to: new Date(end),
    };

    yield item;
  }
}
