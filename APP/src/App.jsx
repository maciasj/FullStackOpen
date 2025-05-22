import { useState } from 'react'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter shown with: 
      <input value={value} onChange={onChange} />
    </div>
  )
}

const PersonForm = ({ onSubmit, newName, handleNameChange, newTelef, handleTelefChange }) => {
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

const Contacts = ({ persons, filter }) => {
  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {filteredPersons.map(person => 
        <p key={person.name}>{person.name} {person.telefone}</p>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', telefone: '123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newTelef, setNewTelef] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (newName === '' || newTelef === '') {
      alert('Please fill in all fields')
      return
    }

    const nameObject = {
      name: newName,
      telefone: newTelef,
    }

    if (persons.find(person => person.name.toLowerCase() === nameObject.name.toLowerCase())) {
      alert(`${nameObject.name} is already added to phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewTelef('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleTelefChange = (event) => setNewTelef(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      
      <h2>Add new</h2>
      <PersonForm 
        onSubmit={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newTelef={newTelef}
        handleTelefChange={handleTelefChange}
      />

      <h2>Numbers</h2>
      <Contacts persons={persons} filter={newFilter} />
    </div>
  )
}

export default App
