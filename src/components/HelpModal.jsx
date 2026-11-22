import { Fragment } from 'react'
import { KEYBOARD_SHORTCUTS } from '../data/slidesData'

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div id="help" className="on" role="dialog" aria-label="Atajos de teclado">
      <button className="closeo" data-close onClick={onClose}>
        Cerrar (Esc)
      </button>
      <h3>Atajos de teclado</h3>
      <dl>
        {KEYBOARD_SHORTCUTS.map((sc, index) => (
          <Fragment key={index}>
            <dt>{sc.key}</dt>
            <dd>{sc.desc}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  )
}
