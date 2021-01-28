import logo from './logo.svg';
import './App.css';
import "./styles.css";

export default function App() {
  return (
    <form>
    <label>
      Name:
      <input type="text" name="name" /> 
      <br/> <br/>
      Age: 
      <input type="number" id="quantity" name="quantity" min="1" max="100"/>
    </label>
    <br/> <br/>
    <input type="submit" value="Submit" />
  </form>
  );
}

