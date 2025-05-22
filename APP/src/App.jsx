import { useState } from 'react'
import {Filter} from '../../part2/phonebook/components/Filter'
import { PersonForm } from '../../part2/phonebook/components/PersonForm'
import { Persons } from '../../part2/phonebook/components/Persons'

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
      <Persons persons={persons} filter={newFilter} />
    </div>
  )
}

export default App
