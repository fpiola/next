import * as React from 'react'

type Props = {

}

const SubPagina = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>SubPágina</h1>
            <button onClick= {(event) => setCount(count + 1)}>Contar</button>
            {count}
        </div>
    )
}

export default SubPagina;