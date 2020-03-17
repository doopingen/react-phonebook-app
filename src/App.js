import React, {useState} from 'react';
import InformationPage from './components/InformationPage';
import PhoneBookForm from './components/PhoneBookForm'
import './App.css';

const App = () => {
  const [phoneBookData, setPhoneBookData] = useState([])

  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] =useState('');
  const [userPhone, setUserPhone] =useState('');

  const updatePhoneBook = (e) => {
    e.preventDefault();
    return setPhoneBookData([...phoneBookData, {"firstName": firstName, "lastName": lastName, "phone": userPhone}])
  }

  return (
      <div className="App">
        <header className="App-header">
        </header>
          <PhoneBookForm updatePhoneBook={updatePhoneBook} firstName={firstName} lastName={lastName} userPhone={userPhone} setUserPhone={setUserPhone} setFirstName={setFirstName} setLastName={setLastName}/>
          <InformationPage phoneBookData={phoneBookData}/>  
      </div>
  );
}

export default App;
