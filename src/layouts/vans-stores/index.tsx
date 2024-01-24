import { useState } from 'react'

import { Filter, SalesModalities, StoreBox } from '../../components'
import { STORES } from '../../utils/stores'

import './index.css'

export function VansStores(): JSX.Element {
  const [selectedState, setSelectedState] = useState('')

  const renderStores = () =>
    STORES.filter(
      (store) => !selectedState || store.state === selectedState,
    ).map((store) => <StoreBox key={store.id} store={store} />)

  return (
    <div className="vans-stores">
      <div className="vans-stores-container">
        <h1 className="vans-stores__title">
          Encontre a Vans Store mais próxima de você
        </h1>
        <Filter
          onSelectState={setSelectedState}
          selectedState={selectedState}
        />
        <div className="vans-stores__stores-list">
          <div className="vans-stores__stores-list-container">
            {renderStores()}
          </div>
        </div>
      </div>
      <SalesModalities />
    </div>
  )
}
