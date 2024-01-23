import type { AlertButtonProps } from './types'

import './styles.scss'

export function AlertButton({ children, alertText }: AlertButtonProps) {
  return (
    <button className="alert-button" onClick={() => alert(alertText)}>
      {children}
    </button>
  )
}
