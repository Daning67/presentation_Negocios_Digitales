export default function EditToolbar({
  isEditing,
  onToggleNotes,
  onExitEditing
}) {
  if (!isEditing) return null

  return (
    <div id="toolbar" style={{ display: 'flex' }}>
      <span>
        Modo edición: haz clic en lo resaltado y escribe. Para salir presiona E.
      </span>
      <button id="btnNotes" onClick={onToggleNotes}>
        Notas de esta lámina
      </button>
      <button id="btnExit" onClick={onExitEditing}>
        Listo
      </button>
    </div>
  )
}
