export default function NotesDrawer({
  isOpen,
  currentSlideIndex,
  currentSlideData
}) {
  if (!isOpen) return null

  return (
    <div id="notesStore" style={{ display: 'block' }}>
      <div className="notes cur" data-for={currentSlideIndex + 1}>
        <h4>
          {currentSlideIndex + 1} · {currentSlideData.title}
        </h4>
        <ul>
          {currentSlideData.notes?.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
