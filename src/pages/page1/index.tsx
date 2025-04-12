import PageLayout from "../../layouts/page"
import { getFormInputValueByName } from "../../App";
import { useState } from "react";

type UserDataType = {
    email: string,
    password: string
}

const FirstPage = () =>{

  const [data, setData] = useState<UserDataType>({
    email: "",
    password: ""
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      let email = getFormInputValueByName(event.currentTarget, "email");
      let password = getFormInputValueByName(event.currentTarget, "password");

      // Валідації email/password

      return {
        email: email,
        password: password
      }
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
      event.preventDefault();
      setData({
        ...data, 
        [event.target.name]: event.target.value
      });
  
      console.log(data)
  }


  return (
    <PageLayout title="Моя перша сторінка">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Введіть email: </label>
          <input name="email" type="email" onChange={handleChange} value={data.email}/>
        </div>
        <div>
          <label htmlFor="password">Введіть пароль: </label>
          <input name="password" type="password" minLength={8} maxLength={16} onChange={handleChange} value={data.password} />
        </div>
        <button type="submit">Логін</button>
      </form>
    </PageLayout>
  )
}


export default FirstPage
