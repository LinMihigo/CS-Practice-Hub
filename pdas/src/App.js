import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png";
import CortanaImage from "./img/cortana.png";
import SiriImage from "./img/siri.png";

function App () {

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                    Personal Digital Assistant
                    </p>
                </div>
            </section>

            <div className='container'>
                <section className="section">
                    <div className='columns'>
                        <div className="column is-2">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@Alexa99" 
                                imgSrc={AlexaImage}
                                content = "Alexa was created by Amazon and helps you buy stuff"
                                />
                        </div>
                        <div className="column is-2">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@Cortana32" 
                                imgSrc={CortanaImage}
                                content = "Cortana was created by Microsoft and helps you look up stuff on the net"
                                />
                        </div>
                        <div className="column is-2">
                            <ProfileCard 
                            title="Siri" 
                            handle="@Siri01" 
                            imgSrc={SiriImage}
                            content = "Siri was created by Apple and is being taken down"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;