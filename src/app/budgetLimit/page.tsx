import { BudgetLimitForm } from "@/components/forms/BudgetLimitForm";

export default function AboutPage() {
    return (
      <div className="text-secondary mt-20 p-6">
        <h2 className="font-medium text-2xl">İsterseniz harcamalarınızı sınırlandırarak daha efektif bütçe kontorlü yapabilirsiniz.</h2>
        <BudgetLimitForm/>
      </div>
    );
  }
  