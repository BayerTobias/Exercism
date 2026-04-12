type Start = { x: number; y: number; angle: number };
type Prism = { id: number; x: number; y: number; angle: number };

function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

function normalizeAngle(deg: number): number {
  let a = deg % 360;
  if (a > 180) a -= 360;
  if (a <= -180) a += 360;
  return a;
}

export function findSequence(start: Start, prisms: Prism[]): number[] {
  const hitSequence: number[] = [];

  let beamX = start.x;
  let beamY = start.y;
  let beamAngle = normalizeAngle(start.angle);

  while (true) {
    const beamAngleRad = toRadians(beamAngle);
    const beamDirectionX = Math.cos(beamAngleRad);
    const beamDirectionY = Math.sin(beamAngleRad);

    let nearestPrism: Prism | null = null;
    let nearestDistance = Infinity;

    for (const prism of prisms) {
      const vectorToPrismX = prism.x - beamX;
      const vectorToPrismY = prism.y - beamY;

      const distanceToPrism = Math.sqrt(
        vectorToPrismX * vectorToPrismX + vectorToPrismY * vectorToPrismY,
      );
      if (distanceToPrism < 1e-10) continue;

      const crossProduct =
        vectorToPrismX * beamDirectionY - vectorToPrismY * beamDirectionX;
      const isOnBeamLine = Math.abs(crossProduct) / distanceToPrism <= 1e-4;
      if (!isOnBeamLine) continue;

      const dotProduct =
        vectorToPrismX * beamDirectionX + vectorToPrismY * beamDirectionY;
      const isAheadOfBeam = dotProduct > 0;
      if (!isAheadOfBeam) continue;

      if (distanceToPrism < nearestDistance) {
        nearestDistance = distanceToPrism;
        nearestPrism = prism;
      }
    }

    if (nearestPrism === null) break;

    hitSequence.push(nearestPrism.id);
    beamX = nearestPrism.x;
    beamY = nearestPrism.y;
    beamAngle = normalizeAngle(beamAngle + nearestPrism.angle);
  }

  return hitSequence;
}
