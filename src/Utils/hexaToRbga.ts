export const hexaToRbga = (hex: string, alpha = 1): string => {
  const rgb = (hex.match(/[A-Za-z0-9]{2}/g) as string[])
    .map((v: string) => parseInt(v, 16))
    .join(',');

  return `rgba(${rgb}, ${alpha})`;
};
