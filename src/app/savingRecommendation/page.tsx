import { SavingsRecommendation } from "@/components/SavingsRecommendation";

export default function FeaturesPage() {
    return (
      <div className="text-secondary mt-20 p-6">
        <h2 className="text-3xl font-bold mb-4">Tasarruf Önerileri</h2>
        <h2 className="font-medium text-xl">Burada harcamalarınıza göre size tasarruf uyarılarında bulunuyoruz.</h2>
        <SavingsRecommendation/>
      </div>
    );
  }
  