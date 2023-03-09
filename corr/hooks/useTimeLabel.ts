import { useMemo } from 'react';

export function useTimeLabel(date: number) {
  return useMemo(() => {
    const dateObject = new Date(date);

    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    const minutesLabel = minutes < 10 ? '0' + minutes : minutes;
    const secondsLabel = seconds < 10 ? '0' + seconds : seconds;

    return `${dateObject.getHours()}:${minutesLabel}:${secondsLabel}`;
  }, [date]);
}
