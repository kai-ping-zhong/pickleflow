export type SessionStatus = 'setup' | 'active' | 'completed'
export type PlayerStatus = 'active' | 'inactive'

export interface Player {
  id: string
  name: string
  status: PlayerStatus
  gamesPlayed: number
  roundsSinceRest: number
}

export interface Team {
  player1: Player
  player2: Player
}

export interface CourtAssignment {
  courtNumber: number
  courtLabel: string
  teamA: Team
  teamB: Team
}

export interface Round {
  roundNumber: number
  courts: CourtAssignment[]
  resting: Player[]
  timestamp: Date
}

export interface Session {
  id: string
  sessionCode: string
  name: string
  courtCount: number
  courtLabels: string[]
  players: Player[]
  rounds: Round[]
  currentRound: number
  status: SessionStatus
  createdAt: Date
}
