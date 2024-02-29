
import diez from "../assets/10K.jpg";
import veinte from "../assets/20k.png";
import cincuenta from "../assets/50k.jpg";
import cien from "../assets/100k.jpg";
import './resultado.styles.css'
import cajeroStore from "../store/store";
function Resultado() {
    const cajero = cajeroStore()

    return (<>
        <div className="container-billetes">
            <div className="contador-billete">
                <img src={diez} className="billetes" />
                <h1 className="por">x</h1>
                <h1>{cajero.retiro[0]}</h1>
            </div>
            <div className="contador-billete">
                <img src={veinte} className="billetes" />
                <h1 className="por">x</h1>
                <h1>{cajero.retiro[1]}</h1>
            </div>
            <div className="contador-billete">
                <img src={cincuenta} className="billetes" />
                <h1 className="por">x</h1>
                <h1>{cajero.retiro[2]}</h1>
            </div>
            <div className="contador-billete">
                <img src={cien} className="billetes" />
                <h1 className="por">x</h1>
                <h1>{cajero.retiro[3]}</h1>
            </div>

        </div>

    </>);
}

export default Resultado;