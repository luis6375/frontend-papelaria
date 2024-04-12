import React, { useState, useEffect } from "react";
import '../../global.css'
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import {Link} from "react-router-dom";
import { FiEdi, FiEdit, FiTrash } from "react-icons/fi";

export default function Listausuarios(){
const[usuarios,setUsuarios] = useState([]);
function mostrarusuarios(){
    const banco = JSON.parse(localStorage.getItem("usuarios")|| "[]")
    setUsuarios(banco);
}
function editarusuario(id){
    alert(`Estou editando m usuario de id:${id}`)
function excluirusuario(id){
    alert(`Estou excluindo usuario de id:${id}`)

}
useEffect(()=>{
    mostrarusuarios()
},[])
    return(
<div className="dashboard-container">
        <div className="menu">
            <Menu />
        </div>
        <div className="main">
            <Head title="Lista de Usuários" />
            <Link to="/cadastrousuario" className='btn-novo'>Novo</Link>
        </div>  
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Email</th>
                <th></th>
                <th></th>
            </tr>
           
                {
                    usuarios.map((linha)=>{
                        return(
                            <tr key={toString()}>
                            <td>{linha.id}</td>
                            <td>{linha.nome}</td>
                            <td>{linha.email}</td>
                            <td>
                                <FiEdit size={24} color="blue" cursor="pointe" onClick={(e)=>{editarusuario(linha.id)}}/>
                            </td>

                            <td>
                                <FiTrash size={24} color="red" cursor="pointe" onClick={(e)=>{excluirusuario(linha.id)}}/>
                            </td>

                            </tr>
                        )
                    })
                }
              
        </table>
</div>

    )
}