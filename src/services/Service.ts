import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-spring-t83-dtjk.onrender.com' //enderço da minha api
})

export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}

export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}