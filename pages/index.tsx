import BuildYourPlanNow from "@/components/home-page-components/build-your-plan-now";
import HowDoWeHelpYouBuildYourWealth from "@/components/home-page-components/how-do-we-help-you-build-your-wealth";
import YourInvestmentIsEasierWithWafra from "@/components/home-page-components/your-investment-is-easier-with-wafra";
import AdvantagesOfBuildingFinancialPortfolio from "@/components/home-page-components/advantages-of-building-financial-portfolio";


export default function Home() {
  return (
    <div className='pt-24 pb-40 space-y-40 md:space-y-52 lg:space-y-96'>
      <YourInvestmentIsEasierWithWafra />
      <HowDoWeHelpYouBuildYourWealth />
      <AdvantagesOfBuildingFinancialPortfolio />
      <BuildYourPlanNow />
    </div>
  )
}
