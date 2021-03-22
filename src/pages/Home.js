import { CallToAction } from '../cmps/CallToAction';
import { Description } from '../cmps/Description';
import { FamilyGathering } from '../cmps/FamilyGathering';
import { Hero } from '../cmps/Hero';
import { Highlights } from '../cmps/Highlights';

function Home() {

    return (
        <div className="flex column full">
            <Hero />
            <Description />
            <Highlights />
            <FamilyGathering />
            <CallToAction />
        </div>
    )
}

export { Home };