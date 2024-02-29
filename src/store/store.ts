import { create } from "zustand";
type Cajero = {
    monto: string
    retiro: number[]
}

type Actions = {
    setMonto: (monto: string) => void
    setRetiro: (retiro: number[]) => void
}

const cajeroStore = create<Cajero & Actions>((set) => ({
    monto: "",
    setMonto: (monto: string) => set(() => ({
        monto
    })),
    retiro: [0, 0, 0, 0],
    setRetiro: (retiro: number[]) => set(() => ({
        retiro
    }))
}));


export default cajeroStore;