import { useState } from 'react'
import { doctorData, hastaData } from '../helper/Data'
import PatientList from '../components/PatientList';

const Home = () => {

  const [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [tikla, setTikla] = useState(true);

  const doctorClick = (id)  => {
    setTikla((prev)=> !prev);
    setDoktorlar(tikla? doktorlar.filter((doc) => doc.id === id): doctorData);
  }


  return (
    <div>

    <div>
      <header className='header'>
        <h1>HOSPTAL</h1>

        <div className='dr'>
          {doktorlar.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <img className='btn' src={doc.doctorImg} alt={doc.doctorName} width="180px" height="150px" style={{background:"aqua"}} 
              onClick={() => doctorClick(doc.id)}
              />
              <h4 style={{background:"aqua", borderLeft:"10px solid blue"}}>{doc.doctorName}</h4>
            </div>
          ))}
        </div>
      </header>
    </div>

    <PatientList hastalar={hastalar} setHastalar={setHastalar} />

    </div>
  )
}

export default Home