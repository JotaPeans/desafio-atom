import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
import InView from "@/components/InView";
import Loading from "@/components/Loading";
import Post from "@/components/Post";

const App = () => {
    return (
        <>
            <Header/>

            <main className="flex-1 px-6 pt-8 py-14 lg:px-32">
                <article className="flex flex-col gap-4 w-full max-w-[1185px] mx-auto">
                    <section className="w-full flex items-start justify-between gap-32">
                        <Post link="#" image="/code.jpg" date={new Date()} title="Começando no ReactJS em 2022">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
                        </Post>

                        <div className="flex-1 divide-y-2">
                            <Post link="#" date={new Date()} title="Conheça as principais técnicas para conseguir uma vaga internacional em programação">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                            </Post>

                            <Post link="#" date={new Date()} title="Veja a evolução do Front-end na prática">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. 
                            </Post>
                        </div>
                    </section>

                    <section className="flex items-center justify-between gap-8 w-full">
                        <Post link="#" image="https://img.freepik.com/fotos-gratis/negocios-conceito-de-entrevista-de-emprego_1421-77.jpg?w=1380&t=st=1709074549~exp=1709075149~hmac=cd6cd6f581f83fbadeedad7f9c6a1529e7a8749990d30555f89cddf888c4dacf" date={new Date()} title="10 dicas para conseguir a vaga desejada">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
                        </Post>
                        <Post link="#" image="/code.jpg" date={new Date()} title="Deixe seu código mais semântico com essas dicas">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                        </Post>
                        <Post link="#" image="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=ais" date={new Date()} title="Use essas dicas nas suas aplicações mobile">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
                        </Post>
                    </section>
                </article>
            </main>
            
            <footer className="flex-1 relative px-6 pb-14 lg:px-32">
                <InView callback={async () => {
                    "use server"
                    console.log("oi")
                }}>
                    <Loading className="mx-auto"/>
                </InView>
                
                <BackToTop/>
            </footer>
        </>
    );
}
 
export default App;