import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';
//import { states } from './redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadStates, selectState, updateCities } from './redux/actions';

function App() {
  const states = useSelector((state) => state)
  const dispatch = useDispatch()
  const [ lista, setLista ] = React.useState(0)


  const fetchStatesCities = async (e) => {
      //console.log(e)
      dispatch(selectState(states.list.find( x => x.sigla === e.currentTarget.value)))
      const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.currentTarget.value}/municipios`)
      dispatch(updateCities(res.data))
      //console.log(res.data)
  }

  React.useEffect(() => {

    const fetchStates = async () => {
        const res = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        //console.log('REQ', res.data)
        dispatch(loadStates(res.data))
    }

    fetchStates()

    //console.log('REDUX', states)
  }, [])


  return (
    <div className="App">
      {
        states && states.list.length > 0 && (
          <select defaultValue="null" onChange={fetchStatesCities}>
            <option value="null" disabled>Selecione um estado</option>
            {
              states.list.map((estado, key) => {
                return <option value={estado.sigla} key={key}>{estado.nome}</option>
              })
            }
          </select>
        )
      }
      {
        states && states.cities.length > 0 && states.cities.map((cidade, key) => {
          return <h1 key={key}>{cidade.nome} - {cidade.id}</h1>
        })
      }
    </div>
  );
}

export default App;
