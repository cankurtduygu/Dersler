
export default function About() {

    const students = {
        'duygu' : 'Duygu',
        'ayla' : 'Ayla',
        'elif' : 'Elif'
    };

    const duygununRengi = {color:'red'};

  return (
    <>
     <h1>About Our Students</h1>
    <div>
        <h2 className="elifin-rengi">{students.elif}</h2>
        <p>Experienced developer with passion for web technologies.</p>
    </div>
    <div>
        <h2 style={{color: 'orange'}}>{students.ayla}</h2>
        <p>Creative designer focused on user experience and interface design.</p>
    </div>
    <div>
        <h2 style={duygununRengi}>{students.duygu}</h2>
        <p>Full-stack developer interested in modern JavaScript frameworks.</p>
    </div>
    </>
  )
}
