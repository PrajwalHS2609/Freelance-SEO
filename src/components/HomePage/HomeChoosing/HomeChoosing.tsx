import HomeChoosingHead from "./HomeChoosingHead";
import HomeChoosingMain from "./HomeChoosingMain";
import "./HomeChoosing.css"

export default function HomeChoosing(){
    return(
        <div className="homeChoosing-container">
        <HomeChoosingHead/>
        <HomeChoosingMain/>
        </div>
    )
}