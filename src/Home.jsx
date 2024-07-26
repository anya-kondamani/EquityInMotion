import './Home.css'

function Home() {
  return (
    <div>
      <div className="health-equity-container">
          <div className="term-container">
            <span className="term-large">health equity</span>
            <span className="term-small">noun</span>
          </div>
          <p className="definition">
            A state in which every individual has the opportunity to attain their full health potential. This requires removing obstacles to health such as poverty, discrimination, and their consequences, including powerlessness and lack of access to good jobs with fair pay, quality education and housing, safe environments, and healthcare.
          </p>
      </div>
      <div className="surrounding-container">
        <div className="physical-activity-container">
          <div className="explanation">
          <h2>Unfortunately, due to circumstances such as race, physical environment, and socioeconomic status, health equity remains unattainable in most societies. These aspects are out of our control, thus, creating a persistent gap in health outcomes among different populations. However, physical activity can be a powerful tool in mitigating these disparities.</h2>
          </div>
          <div className='types-container'>
            <h2>physical activity has the power to</h2>
            <h2>★ encourage positive lifestyle changes</h2>
            <h2>★ support physical recovery processes</h2>
            <h2>★ & sustain an already healthy lifestyle</h2>
          </div>
        </div>
      </div>
      <div className="objective-container">
        <h1>EquityInMotion seeks to promote physical activity for purposes of health equity, making steps toward a healthier lifestyle accessible to everyone. We plan to teach simple exercises and routines that can be performed without access to a gym or equipment and help users learn and correct their form using machine learning tools.</h1>
      </div>
    </div>
  );
}

export default Home;