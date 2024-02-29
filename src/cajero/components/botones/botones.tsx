
import './botones.styles.css'
type boton = {
    accion: Function, icono: string, color: string
}
function Button({ accion, icono, color }: boton) {
    const style = {
        background: color
    }

    const handledClick = () => {
        accion()
    }


    return (
        <div onClick={handledClick} className="boton" style={style}>
            <h1>
                {icono}
            </h1>
            <div className='punto'></div>
        </div>
    );
}

export default Button;