const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export function generateSessionCode(): string {
  let code = ''
  for (let i = 0; i < 4; i++) {
    code += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  return code
}

export function isValidSessionCode(code: string): boolean {
  return /^[A-Z0-9]{4}$/.test(code.toUpperCase())
}
