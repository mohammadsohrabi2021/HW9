import React, { useState } from "react";

const filterData = [
  { id: 1, title: 'allData' },
  { id: 2, title: 'favoriteData' },
  { id: 3, title: 'unfavoriteData' },
]
function App() {
  const [data, setData] = useState([
    { id: 1, name: 'mohammad', lastName: 'sohrabi', phone: '09186333667', age: 21, state: 'unfavoriteData' },
    { id: 2, name: 'reza', lastName: 'sohrabi', phone: '09186333667', age: 18, state: 'favoriteData' },
    { id: 3, name: 'ali', lastName: 'sohrabi', phone: '09186333667', age: 30, state: 'unfavoriteData' },
    { id: 4, name: 'mohammad', lastName: 'sohrabi', phone: '09186333667', age: 20, state: 'favoriteData' },
  ])

  const [massege, setMassege] = useState('none');
  const [id, setId] = useState('0')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('allData')
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    lastName: '',
    phone: '',
    age: '',
    state: ''
  })

  const handleDelete = () => {
    setData(data.filter(data => data.id !== id))
    setMassege('none')

  }

  const handleMassege = id => {
    setMassege('flex')
    setId(id)
  }

  const handleDeleteMassege = () => {
    setMassege('none')
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleFilterBtn = title => {
    setFilter(title)
  }

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmite = e => {
    e.preventdefault()
    setData([...data, form])
    setForm({
      id: Math.floor(Math.random() * 1000),
      name: '',
      lastName: '',
      phone: '',
      age: '',
      state: ''
    })
  }

  return (
    <div>
      <div>
        <div style={{ display: massege }}>
          <p>
              are you delete item?
          </p>
          <button onClick={handleDelete}>
            yes
          </button>
          <button onClick={handleDeleteMassege}>
            no
          </button>
        </div>
      </div>
      <div>
        <div>
           add new contact:
        </div>
        <div>
          <form onSubmit={handleSubmite}>
            <label>name</label>
            <input onChange={handleForm} name={'name'} value={form.name} />
            <label>lastName</label>
            <input onChange={handleForm} name={"lastName"} value={form.lastName} />
            <label>phone</label>
            <input onChange={handleForm} name={"phone"} value={form.phone} />
            <label>age</label>
            <input onChange={handleForm} name={"age"} value={form.age} />
            <button type={'submit'}>
              submite
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>search:</div>
        <div>
          <input onChange={handleSearch} value={search} />
        </div>
      </div>
      <div>
        <div>
          filter:
        </div>
        <div>
          {filterData.map(filterBtn => (
            <button onClick={() => handleFilterBtn(filterBtn.title)} style={{ backgroundColor: filterBtn.title === filter ? 'red' : 'white' }}>
              {filterBtn.title}
            </button>
          ))}
        </div>

      </div>
      {data.filter(item => item.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allData' ? true : item.state === filter)).map(item => (
        <div style={{ border: '1px solid red' }}>
          <div style={{ width: '60px' }}>
            <img src={`https://avatars.dicebear.com/api/avataaars/:${item.id}.svg`} />
          </div>
          <div>id:{item.id}</div>
          <div>name:{item.name}</div>
          <div>lastName:{item.lastName}</div>
          <div>phone:{item.phone}</div>
          <div>age:{item.age}</div>
          <div>state:{item.state }</div>
          <button onClick={() => handleMassege(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
