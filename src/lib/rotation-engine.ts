import type { Player, CourtAssignment, Round } from '@/types/session'

export interface RotationResult {
  courts: CourtAssignment[]
  resting: Player[]
}

export function generateRotation(
  _players: Player[],
  _courtCount: number,
  _courtLabels: string[],
  _previousRounds: Round[],
  _roundNumber: number
): RotationResult {
  // Stub — will be implemented with TDD in Phase 2
  return { courts: [], resting: [] }
}

export function updatePlayerStats(
  players: Player[],
  _courts: CourtAssignment[],
  _resting: Player[]
): Player[] {
  // Stub — will be implemented with TDD in Phase 2
  return players
}
