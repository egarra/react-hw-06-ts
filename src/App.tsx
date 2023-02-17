import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { Form } from "./Components/Form/Form";

const App: React.FC = () => {

  return (
    <>
        <Form/>
        <Filter/>
       <ContactList />
    </>
  );
};

export default App;
