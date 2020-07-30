import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/Carousel/components/FormField'


function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }

    const [values, setValues] = useState(valoresIniciais)


    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, //valor dinâmico (criando a chave de forma dinâmica)
        })
        
    }
    
    function handleChange(infosDoEvento) {
        const { name, value } = infosDoEvento.target
        setValue(
            name,
            value);
    }

    return(
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome} </h1>

        <form onSubmit={(event) => {
            event.preventDefault()
            setCategorias([
                ...categorias,
                values
           ])
           setValues(valoresIniciais)
        }}>
         <FormField 
            label="Nome da categoria"
            name="nome"
            type="text"
            value={values.nome} 
            onChange={handleChange} />

        <FormField 
            label="Descrição"
            name="descricao"
            type="textarea"
            value={values.descricao} 
            onChange={handleChange} />
         {/* <div>
            <label>
                Descrição:
                <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
                />
            </label>
          </div> */}
          <FormField 
            label="Cor"
            name="cor"
            type="color"
            value={values.cor} 
            onChange={handleChange} />
  
          <button>
            Cadastrar
          </button>
        </form>

        <ul>
            {categorias.map((categoria, index) => {
                return(
                    <li key={`${categoria}${index}`}>
                        {categoria.nome}
                    </li>
                )
            })}
        </ul>
  
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
      
    )
  }
export default CadastroCategoria;