import '../styles/contact.css'
import GlassBox from "../components/GlassBox.tsx";

export default function Contact() {
    return (
        <section>
            <h1>C<span style={{color: 'var(--blue_analoug)'}}>on</span>tact</h1>
            <div className="box">
                <p>I hope I convinced you about my mindset and skills.</p>
                <br />
                <p>I am more than happy for you reaching out to me and making your vision come true.</p>
                <p>Feel free to contact me so we can initiate your project's glow-up so it can be seen by the whole world.</p>
            </div>
            <GlassBox kind='simple' widthness='adjusted'>
                <div className='mailBox'>
                    <span>Email:</span>
                    <a href="mailto:max.schwarz2003@gmail.com">max.schwarz2003@gmail.com</a>
                </div>
            </GlassBox>
        </section>
    )
}