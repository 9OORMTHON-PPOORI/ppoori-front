import { IS_SERVICE_CLOSED } from "@/constants/feature-flags";

import PolicyRecommendationLazy from "@/components/policy/policy-recommendation-lazy";
import ServiceClosedNotice from "@/components/policy/service-closed-notice";

export default function PolicyMainPage() {
  if (IS_SERVICE_CLOSED) {
    return <ServiceClosedNotice />;
  }

  return <PolicyRecommendationLazy />;
}
