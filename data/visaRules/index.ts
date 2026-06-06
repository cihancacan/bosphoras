import { ukTurkeyVisaRule } from './uk';
import { franceTurkeyVisaRule } from './france';

export const turkeyVisaCountryRules = [ukTurkeyVisaRule, franceTurkeyVisaRule];

export function getTurkeyVisaCountryRule(key: string) {
  return turkeyVisaCountryRules.find((rule) => rule.keys.includes(key));
}
