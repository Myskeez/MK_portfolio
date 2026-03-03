import '../styles/home.css'
import GlitchText_V1 from '../components/GlitchText_V1.tsx'
import GlitchText_V2 from '../components/GlitchText_V2.tsx'

export default function Home() {
    return (
        <section>
            {/*<h1 className='slogan s-top'>Simplicity in design.</h1>
            <h1 className='slogan s-btm'>Harmony in function.</h1>*/}
            {/*<GlitchText_V1 className='slogan s-top' as='h1' text='Simplicity in design.' />
            <GlitchText_V1 className='slogan s-btm' as='h1' text='Harmony in function.' />*/}
            <GlitchText_V2 className='slogan s-top' as='h1' text='Simplicity in design.' />
            <GlitchText_V2 className='slogan s-btm' as='h1' text='Harmony in function.' />
            <p>This is my portfolio homepage.</p>
            <p>And also my very first project with React, Vite and React Router - YAY!</p>
            <br/>
            <p>I'm Maksymilian Kaliszewski.</p>
            <p>Computer Science B.Sc. student from Tübingen in Germany focusing on Frontend Development.</p>
        </section>
    )
}