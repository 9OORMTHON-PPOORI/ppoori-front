import PolicyRecommendation from "@/components/components/policy/policy-recommendation";
import ServiceClosedNotice from "@/components/components/policy/service-closed-notice";

import { IS_SERVICE_CLOSED } from "@/constants/feature-flags";

export default function PolicyMainPage() {
  if (IS_SERVICE_CLOSED) {
    return <ServiceClosedNotice />;
  }

  return <PolicyRecommendation />;
}
