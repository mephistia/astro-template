import type { StoreBoxType } from './types'

import './index.css'

export function StoreBox(props: StoreBoxType): JSX.Element {
  const {
    store: {
      name,
      publicPlace,
      phone,
      whatsappLink,
      storeType,
      postalCode,
      email,
    },
  } = props

  return (
    <div className="store-box">
      <h2 className="store-box__store-name">{`VANS ${storeType} ${name}`}</h2>
      <span className="store-box__description">{publicPlace}</span>
      <span className="store-box__description">{`CEP: ${postalCode}`}</span>
      <span className="store-box__description">{`Telefone: ${phone}`}</span>
      <a
        className="store-box__description malito"
        href={`mailto:${email}`}
      >{`E-mail: ${email}`}</a>
      <a
        className="store-box__whatsapp-link"
        href={whatsappLink}
        rel="noreferrer"
        target="_blank"
        type="button"
      >
        Chamar pelo whatsapp
        <img
          alt="Chamar pelo WhatsApp"
          className="store-box__whatsapp-link__icon"
          src={`${import.meta.env.PUBLIC_URL}/icons/whatsapp.svg`}
        />
      </a>
    </div>
  )
}
