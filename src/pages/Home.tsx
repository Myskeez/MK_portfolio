import '../styles/home.css'
import GlitchText from '../components/GlitchText.tsx'
import GlassBox from "../components/GlassBox.tsx";

export default function Home() {
    return (
        <section>
            <GlitchText className='slogan s-top' as='h1' text='Simplicity in design.' />
            <GlitchText className='slogan s-btm' as='h1' text='Harmony in function.' />

            <h2>About me</h2>
            <GlassBox>
                <p style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Hi, I'm Maks - a passionate student that focuses on frontend development with a conviction for simple and smart design.</p>
                <br/>
                <p>As my studies are all about Computer Science, my spectrum of competence and skills is as wide as you would imagine. But no problem I ever encountered left such a mark as building my first website.
                    <br/>
                    A Website is like a mirror for the brand, people and company behind a project that always matters.
                    <br/>
                    And showing the world what your vision is, is as relevant as the project itself.</p>
                <br />
                <p>I was born in Poland, but was raised in Germany and also went on to study in Tübingen.</p>
            </GlassBox>
        </section>
    )
}