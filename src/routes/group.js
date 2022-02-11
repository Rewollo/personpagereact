import { useParams } from "react-router-dom";
import { getGroups } from "../data";

export default function Group() {
    let groups = getGroups();
    let params = useParams();
    let group = groups.find(item => item.id == params.groupId);
    return (
        <>
            <div
            style={{
            display: 'flex',
            width: '70vw',
            paddingLeft: '10%',
            padding: '2%'
            }}
            >
                <div>
                    <img src={group.img} alt={group.name}
                    style={{
                        width: '400px',
                        height: '500px'
                    }}
                    />
                </div>
                
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    padding: '10px',
                    paddingLeft: '5%',
                    fontSize: '20px',
                    fontWeight: '700'
                }}
                >
                    <h3>Название: {group.name}</h3>
                    <h3>Жанр: {group.genre}</h3>
                    <h3>Период активности группы: {group.active}</h3>
                    <h3>Период личного участия: {group.myactive}</h3>
                    <a href={group.url} target='_blank'> Узнать больше </a>
                </div>
                
            </div>
        </>
        
    );
}