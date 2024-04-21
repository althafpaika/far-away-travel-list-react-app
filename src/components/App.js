import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";


export default function App() {
  const [packList, setPackList] = useState([])

  return (<div className="app">
    <Logo />
    <Form setPackList={setPackList} />
    <PackingList packList={packList} setPackList={setPackList} />
    <Stats list={packList} />
  </div>)
}


