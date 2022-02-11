import React, {useState} from 'react';

function Wish(props) {
    return(
        <li style={{
            fontSize: '18px'
        }}> {props.wish.name} <button type='button' onClick={() => props.handlerDelete(props.wish)} style={{
            height: '40px',
            fontSize: '18px',
            margin: '5px',
            padding: '5px'
        }}> x </button> </li>  
    )
  }


export default function Wishes() {

    const [wishList, setWishList] = useState('');

    const [wishesState, setWishesState] = useState([]);

    const [nameState, setNameState] = useState('');

    const [counterState, setCounterState] = useState(0);

    const deleteWish = (wish) => {
        const newWish = wishesState.filter(elem => elem.id != wish.id);
        setWishesState(newWish);
    }

    function createWish(name = '') {
        const id = counterState;
        setCounterState(id+1);
        return {
        id: id,
        name: name
        }
    }

    function clearWish() {
        let wishValue = document.getElementById('textarea');
        wishValue.value = null;
        setWishList('');
    }

  const handleSubmit = event => {
    event.preventDefault();
    const newWish = createWish(nameState);
    
    if (newWish.name !== "") {
        setWishList(wishList + newWish.name + '. ');
        setWishesState([...wishesState, newWish]);
        setNameState('');
        console.log(wishesState);
        console.log(newWish);
    }
  }

  const handleChange = event => {
    const newName = event.target.value;
    setNameState(newName);
  }

  const wishesList = wishesState.map(elem => <Wish wish = {elem} key = {elem.id} handlerDelete = {deleteWish}></Wish>);
    return (
        
    <div className="App" style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'stretch',
        textAlign: 'center',
        fontSize: '18px',
        backgroundColor: '#ccc'
    }}
    >

        <div>
            <input type='text' id='input' maxLength='100' value={nameState} onChange={handleChange} placeholder='Напишите своё пожелание здесь' style={{
                width: '300px',
                height: '40px',
                fontSize: '18px',
                margin: '10px',
                padding: '5px'
            }}></input>
            <button type='button' onClick={handleSubmit} style={{
                height: '40px',
                fontSize: '18px',
                margin: '10px',
                padding: '5px'
            }}> Записать </button>

            <form action="https://formsubmit.co/rewollo@gmail.com" method="POST">
                <textarea name='Пожелания' id='textarea' rows='10' cols='100' value={wishList} onChange={handleChange} style={{
                    fontSize: '18px',
                    margin: '10px',
                    padding: '10px'
                }}></textarea>
                <div>
                    <button type='submit' style={{
                        height: '40px',
                        fontSize: '18px',
                        margin: '10px',
                        padding: '5px'
                    }}> Отправить </button>
                    <button type='button' onClick={clearWish} style={{
                        height: '40px',
                        fontSize: '18px',
                        margin: '10px',
                        padding: '5px'
                    }}> Очистить </button>
                </div>
        
            </form>
        </div>  

        <ol style={{
            marginTop: '30px'
        }}>
            {wishesList}
        </ol>

    </div>

    );
}