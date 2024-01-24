import { STATES_ACRONYMS } from '../../utils/stores'
import type { FilterProps } from './types'

import './index.css'

export function Filter(props: FilterProps): JSX.Element {
  const { selectedState, onSelectState } = props

  const renderStates = () =>
    STATES_ACRONYMS.map((state) => (
      <button
        className={`state ${state === selectedState ? 'selected' : ''}`}
        key={state}
        onClick={() => onSelectState(state)}
        type="button"
      >
        {state}
      </button>
    ))

  return (
    <div className="filter">
      <h5 className="filter__title">Busque por estado</h5>
      <div className="filter__states-wrapper">{renderStates()}</div>
    </div>
  )
}
