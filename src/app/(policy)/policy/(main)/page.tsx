import { IS_SERVICE_CLOSED } from "@/constants/feature-flags";

import PolicyRecommendation from "@/components/policy/policy-recommendation";
import ServiceClosedNotice from "@/components/policy/service-closed-notice";

export default function PolicyMainPage() {
  if (IS_SERVICE_CLOSED) {
    return <ServiceClosedNotice />;
  }

  return <PolicyRecommendation />;
}
