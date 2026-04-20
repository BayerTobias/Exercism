type GameResult = {
  status: "finished" | "loop";
  cards: number;
  tricks: number;
};

const PENALTY: Record<string, number> = {
  J: 1,
  Q: 2,
  K: 3,
  A: 4,
};

function isPaymentCard(card: string): boolean {
  return card in PENALTY;
}

function normalizeCard(card: string): string {
  return isPaymentCard(card) ? card : "N";
}

function serializeState(deckA: string[], deckB: string[]): string {
  return deckA.map(normalizeCard).join(",") + "|" + deckB.map(normalizeCard).join(",");
}

function collectPile(winnerDeck: string[], pile: string[]): number {
  const collectedCount = pile.length;
  winnerDeck.push(...pile);
  pile.length = 0;
  return collectedCount;
}

export function simulateGame(playerA: string[], playerB: string[]): GameResult {
  const deckA = [...playerA];
  const deckB = [...playerB];

  let totalCardsPlayed = 0;
  let totalTricks = 0;

  const seenStates = new Set<string>();
  const decks = [deckA, deckB];
  let currentPlayer = 0;

  while (true) {
    const state = serializeState(deckA, deckB);
    if (seenStates.has(state)) {
      return { status: "loop", cards: totalCardsPlayed, tricks: totalTricks };
    }
    seenStates.add(state);

    const pile: string[] = [];
    let pendingPenalty = 0;
    let lastPaymentPlayer = -1;

    while (true) {
      const opponent = 1 - currentPlayer;
      const currentDeck = decks[currentPlayer];

      if (currentDeck.length === 0) {
        const winner = pendingPenalty > 0 ? lastPaymentPlayer : opponent;
        totalCardsPlayed += collectPile(decks[winner], pile);
        totalTricks++;

        if (decks[1 - winner].length === 0) {
          return { status: "finished", cards: totalCardsPlayed, tricks: totalTricks };
        }

        currentPlayer = winner;
        break;
      }

      const card = currentDeck.shift()!;
      pile.push(card);

      if (isPaymentCard(card)) {
        pendingPenalty = PENALTY[card];
        lastPaymentPlayer = currentPlayer;
        currentPlayer = opponent;
      } else if (pendingPenalty > 0) {
        pendingPenalty--;

        if (pendingPenalty === 0) {
          totalCardsPlayed += collectPile(decks[lastPaymentPlayer], pile);
          totalTricks++;

          if (decks[1 - lastPaymentPlayer].length === 0) {
            return { status: "finished", cards: totalCardsPlayed, tricks: totalTricks };
          }

          currentPlayer = lastPaymentPlayer;
          break;
        }
      } else {
        currentPlayer = opponent;
      }
    }
  }
}
