import { useState, useEffect } from 'react';
import './App.css';

// make a card that shows or hide on button click

const majors = [
  {
    name: 'Computer Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 1,
  },
  {
    name: 'Life Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 2,
  },
  {
    name: 'Mathematics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: 3,
  },
];

const initialStudents = [
  {
    name: 'John',
    age: 20,
    majorId: 1,
  },
  {
    name: 'Jane',
    age: 21,
    majorId: 2,
  },
];

// filter, sort, search, pagination, infinite scroll, lazy loading, etc

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuButtonClick = () => {
    setIsMenuOpen(true);
  };
  const [students, setStudents] = useState(initialStudents);
  const [searchInput, setSearchInput] = useState('');
  const [selectedMajors, setSelectedMajors] = useState<number[]>([]);

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const handleMajorSelect = (event: any, majorId: number) => {
    if (event.target.checked) {
      setSelectedMajors([...selectedMajors, majorId]);
    } else {
      setSelectedMajors(selectedMajors.filter((id) => id !== majorId));
    }
  };

  return (
    <div className='App'>
      <h1>Hello world</h1>
      <div className='menu-container'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Open Menu</button>
        <ul className={`dropdown-menu ${isMenuOpen ? '' : 'hide'}`}>
          <li>Menu option 1</li>
          <li>Menu option 2</li>
          <li>Menu option 3</li>
        </ul>
      </div>
      <div className='search-container'>
        <p>Majors</p>
        <div className='filters-container'>
          {majors.map((major) => {
            return (
              <div className='filter'>
                <input
                  onChange={(e) => handleMajorSelect(e, major.id)}
                  type='checkbox'
                  name={major.name}
                  id={major.name}
                />
                <label htmlFor={major.name}>{major.name}</label>
              </div>
            );
          })}
        </div>

        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type='text'
        />
      </div>
      <div className='students-container'>
        {filteredStudents.map((student) => (
          <div className='student-card'>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>
              Major:{' '}
              {majors.find((major) => major.id === student.majorId)?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// truthy
// string: "xzca" "..." "false" "0" "null" "undefined"
// boolean: true
// number: 1 2 3 4 5 6 7 8 9 -1 -2 -1000 -infinity
// objects that have value

// falsy
// string: ""
// boolean: false
// number: 0
// null undefined

export default App;
