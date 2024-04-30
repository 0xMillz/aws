import homeImg from "public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <>
            <Hero image={homeImg} alt="car factory" title="Professional Cloud Hosting"/>
        </>
    );
}
