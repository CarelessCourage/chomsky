// percent to number : number to percent
export function percentConverter(val, scale, boolean) {
  let percent = (val / 100) * scale;
  if(boolean) percent = (val / scale) * 100;
  return percent
}

