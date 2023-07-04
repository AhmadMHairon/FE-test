import { BuildYourPlanNow } from '@/components/home-page-components/build-your-plan-now';
import { BuildYourWealth } from '@/components/home-page-components/build-your-wealth';
import { FeaturesSection } from '@/components/home-page-components/features-section';
import { HomeTopSection } from '@/components/home-page-components/top-section';

export default function Home() {
    return (
        <div>
            <HomeTopSection />
            <BuildYourWealth />
            <FeaturesSection />
            <BuildYourPlanNow />
        </div>
    );
}
