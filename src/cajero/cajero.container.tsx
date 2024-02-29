import cajeroStore from '../store/store';
import './cajero.styles.css'
import Button from './components/botones/botones';
import { retirar } from '../api/api'
function Cajero() {
    const cajero = cajeroStore();

    const add = (value: string) => {
        if (cajero.monto === "") {
            if (value !== "0" && value !== '00') {
                cajero.setMonto(cajero.monto + value);
            }
        } else {
            cajero.setMonto(cajero.monto + value);
        }

    }

    const substract = () => {
        const nuevo = cajero.monto.slice(0, -1);
        cajero.setMonto(nuevo)

    }

    const calcular = () => {
        const resultado = retirar(parseInt(cajero.monto));

        cajero.setRetiro(resultado)
    }

    return (<>
        <div className='cajero-container'>

            <div className="pantalla">
                <h1 className='title'>
                    Valor a retirar
                </h1>
                <h1 className='monto'>
                    {cajero.monto}
                </h1>
            </div>
            <div className="teclado-container">
                <div className="teclas">
                    <Button accion={() => { add("1") }} icono='1' color='gray'></Button>
                    <Button accion={() => { add("2") }} icono='2' color='gray'></Button>
                    <Button accion={() => { add("3") }} icono='3' color='gray'></Button>
                    <Button accion={() => { substract() }} icono='<-' color='yellow'></Button>
                    <Button accion={() => { add("4") }} icono='4' color='gray'></Button>
                    <Button accion={() => { add("5") }} icono='5' color='gray'></Button>
                    <Button accion={() => { add("6") }} icono='6' color='gray'></Button>
                    <Button accion={() => { }} icono='X' color='red'></Button>
                    <Button accion={() => { add("7") }} icono='7' color='gray'></Button>
                    <Button accion={() => { add("8") }} icono='8' color='gray'></Button>
                    <Button accion={() => { add("9") }} icono='9' color='gray'></Button>
                    <Button accion={() => { calcular() }} icono='O' color='green'></Button>
                    <Button accion={() => { add(".") }} icono='.' color='gray'></Button>
                    <Button accion={() => { add("0") }} icono='0' color='gray'></Button>
                    <Button accion={() => { add("00") }} icono='00' color='gray'></Button>
                </div>

            </div>
        </div>

    </>);
}

export default Cajero;