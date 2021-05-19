import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect } from "react"
import { api } from '../services/apiClient'

import { withSSRAuth } from '../utils/withSSRAuth';
import { setupAPIClient } from "../services/api";
import { useCan } from "../hooks/useCan";
import { Can } from "../components/Can";

export default function Dashboard(){
  const { user , signOut } = useContext(AuthContext)

  useEffect(() => {
    api.get("/me").then(response => console.log(response))
    .catch(error => console.log(error))
  }, [])
  
  return(
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Logout</button>

      <Can permissions={['metrics.list']}>
          <div>
            Métricas
          </div>
        </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me')
  
  return{
    props: {}
  }
})