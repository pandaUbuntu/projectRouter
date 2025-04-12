import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageLayout from './layouts/page'

type UserDataType = {
  username: string,
  email: string,
  password: string
}

export function getFormInputValueByName(form: HTMLFormElement, name: string): string {
  const control = form.elements.namedItem(name) as HTMLInputElement;

  if (!control || control instanceof RadioNodeList || !("value" in control)) {
      throw new Error(`Form control "${name}" not found or was a RadioNodeList`);
  }

  return control.value;
} 

function App() {
  const [userData, setUserData] = useState<UserDataType>({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({
      ...userData, 
      [event.target.name]: event.target.value
    });

    console.log(userData)
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const userName:string = getFormInputValueByName(event.currentTarget, "username");
    const email:string = getFormInputValueByName(event.currentTarget, "email");
    const password:string = getFormInputValueByName(event.currentTarget, "password");

    setUserData({
      username: userName,
      email: email,
      password: password
    })
  }

  return (
    <PageLayout title="Головна сторінка">
     <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Введіть ім'я користувача:</label>
          <input name="username" id="username" type="text" minLength={2} onChange={handleChange} value={userData.username}></input>
        </div>
        <div>
          <label htmlFor="email">Введіть ваш email:</label>
          <input name="email" id="email" type="email" placeholder='example@gmail.com' onChange={handleChange} value={userData.email}></input>
        </div>
        <div>
          <label htmlFor="password">Введіть ваш пароль:</label>
          <input name="password" id="password" type="password" minLength={8} maxLength={16} onChange={handleChange} value={userData.password}></input>
        </div>

        <button type="submit">Саксесс</button>
     </form>
    </PageLayout >
  )
}

export default App
