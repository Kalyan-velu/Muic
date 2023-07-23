import DiscoverItem from "./DiscoverItem.jsx";

export default function DiscoverBlock({data,title}){
    return(
        <div className="discover__block">
            <h3>{title}</h3>
            <div className="discover__block__items">
            {data && data?.map((item)=>(
                <DiscoverItem item={item}/>
            ))}
            </div>
        </div>
    )
}