import{Empleado} from './empleado.interface'
export interface Pedido{
    id:number;
    fecha:string;
    empleado: Empleado;
}