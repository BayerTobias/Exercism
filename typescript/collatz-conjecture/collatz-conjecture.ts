export function steps(count: number): number {

  if(count <=0 || !Number.isInteger(count)) {
    throw new Error('Only positive integers are allowed')
  }

  let steps = 0;
  
  while(count !== 1) {
    if(count % 2 === 0) {
      count /= 2;
    } else {
      count = 3 * count + 1;
    }
    steps++;
  }

  return steps;

}
