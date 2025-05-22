export const PersonForm = ({ onSubmit, newName, handleNameChange, newTelef, handleTelefChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newTelef} onChange={handleTelefChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
