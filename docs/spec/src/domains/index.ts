import { StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const domainSpec: StepSpec<IntegrationConfig>[] = [
  {
    /**
     * ENDPOINT: v2/domains
     * PATTERN: iterateResources
     */
    id: 'fetch-domains',
    name: 'Fetch Domains',
    entities: [
      {
        resourceName: 'Domain',
        _type: 'digitalocean_domain',
        _class: ['Domain'],
      },
    ],
    relationships: [],
    dependsOn: [],
    implemented: true,
  },
  {
    id: 'fetch-domain-records',
    name: 'Fetch Domain Records',
    entities: [
      {
        resourceName: 'Domain Record',
        _type: 'digitalocean_domain_record',
        _class: ['DomainRecord'],
      },
    ],
    relationships: [],
    dependsOn: ['fetch-domains'],
    implemented: true,
  },
];
