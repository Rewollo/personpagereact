export default function Skills() {

    const skills = [
        {id: 1, desc: 'Опыт игры на ударных более 10 лет.'},
        {id: 2, desc: 'Опыт игры с быстрыми (более 200 bpm) темпами.'},
        {id: 3, desc: 'Опыт игры под метроном и программный фон.'},
        {id: 4, desc: 'Опыт игры в большом количестве жанров.'},
        {id: 5, desc: 'Большой опыт выступлений, участие в турах.'},
        {id: 6, desc: 'Опыт записи на известных зарубежных лейблах.'},
    ]

    const skillsList = skills.map(item => (
        <li key={item.id} style={{
            fontSize: '24px',
            margin: '15px'
        }}>{item.id}. {item.desc}</li>
      ));

    

    return (
      <main style={{
            padding: "1rem 0",
            textAlign: 'center',
      }}>
        <h2 style={{
            fontSize: '36px',
            margin: '50px'
        }}
        > Навыки </h2>
        <ul>
            {skillsList}
        </ul>
      </main>
    );
  }