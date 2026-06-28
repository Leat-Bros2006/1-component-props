import Header from "./components/Header";
import Card from './components/Card'
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />


                <section className="cards">
                    <Card
                        image="p1.png"
                        title="HTML"
                        description="Learn the basics of HTML."
                    />

                    <Card
                        image="p2.png"
                        title="CSS"
                        description="Learn how to style web pages."
                    />

                    <Card
                        image="p3.png"
                        title="JavaScript"
                        description="Create dynamic data"
                    />
                    <Card
                        image="p4.png"
                        title="React"
                        description="Build modern user interfaces."
                    />
                </section>


            <Footer />
        </>
    );
}

export default App;