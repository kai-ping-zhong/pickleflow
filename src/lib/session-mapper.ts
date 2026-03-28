import type { Session, Player, Round, CourtAssignment } from '@/types/session'

export interface DbSession {
  id: string
  session_code: string
  name: string
  court_count: number
  court_labels: unknown
  current_round: number
  status: string
  created_at: string
}

export interface DbPlayer {
  id: string
  session_id: string
  name: string
  status: string
  games_played: number
  rounds_since_rest: number
}

export interface DbRound {
  id: string
  session_id: string
  round_number: number
  courts: unknown
  resting: unknown
  timestamp: string
}

export function mapDbToSession(
  dbSession: DbSession,
  dbPlayers: DbPlayer[],
  dbRounds: DbRound[]
): Session {
  const players: Player[] = dbPlayers.map((p) => ({
    id: p.id,
    name: p.name,
    status: p.status as Player['status'],
    gamesPlayed: p.games_played,
    roundsSinceRest: p.rounds_since_rest,
  }))

  const rounds: Round[] = dbRounds
    .sort((a, b) => a.round_number - b.round_number)
    .map((r) => ({
      roundNumber: r.round_number,
      courts: r.courts as CourtAssignment[],
      resting: r.resting as Player[],
      timestamp: new Date(r.timestamp),
    }))

  return {
    id: dbSession.id,
    sessionCode: dbSession.session_code,
    name: dbSession.name,
    courtCount: dbSession.court_count,
    courtLabels: dbSession.court_labels as string[],
    players,
    rounds,
    currentRound: dbSession.current_round,
    status: dbSession.status as Session['status'],
    createdAt: new Date(dbSession.created_at),
  }
}
