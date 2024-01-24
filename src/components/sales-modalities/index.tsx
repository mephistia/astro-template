import './index.css'
import { MODALITIES } from './utils'

const backgroundImageUrl = `url(${import.meta.env.PUBLIC_URL}/images/vans-stores-background.png)`

export function SalesModalities(): JSX.Element {
  const renderModalities = () =>
    MODALITIES.map((modality) => (
      <div className="sales-modalities__modality" key={modality.title}>
        <img
          alt={modality.title}
          className="sales-modalities__modality__icon"
          src={modality.icon}
        />
        <div className="sales-modalities__checkerboard checkerboard-m" />
        <h3 className="sales-modalities__modality__title">{modality.title}</h3>
        <p className="sales-modalities__modality__description">
          {modality.description}
        </p>
        <p className="sales-modalities__modality__description">
          {modality.description2}
        </p>
      </div>
    ))

  return (
    <div className="sales-modalities">
      <div className="sales-modalities__checkerboard" />
      <div
        className="sales-modalities__container"
        style={{
          backgroundImage: backgroundImageUrl,
        }}
      >
        <div className="sales-modalities__image-opacity" />
        <div className="sales-modalities__content">
          <h1 className="sales-modalities__title">
            Conheça nossas modalidades de compra em lojas físicas
          </h1>
          <div className="sales-modalities__list"> {renderModalities()}</div>
        </div>
      </div>
    </div>
  )
}
