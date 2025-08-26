import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = ()=>{
    const navigate = useNavigate();
    return(<div>
        
        <div className="mt-2 bg-white-200">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
       <div className="flex items-center justify-center h-screen">
       <img src={"/chess.jpeg"}></img>
       </div>
       <div className="flex items-center justify-center h-screen">
       <div className="align-centre">
        <h1 className="text-4xl font-bold">Let's play chess</h1>
        <div className="mt-4">
          <Button onClick={()=>{
            navigate("/game")
          }}>
         Play online
         
          </Button>
      
</div>
        </div>
       </div>
        </div>
        </div>
        
    </div>)
}