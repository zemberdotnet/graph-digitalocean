import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  DROPLETS: 'fetch-droplets',
  PROJECTS: 'fetch-projects',
  VOLUMES: 'fetch-volumes',
  DOMAINS: 'fetch-domains',
  DOMAIN_RECORDS: 'fetch-domain-records',
  RESERVED_IPS: 'fetch-reserved-ips',
  BUILD_VOLUME_DROPLET_RELATIONSHIPS: 'build-volume-droplet-relationships',
};

export const Entities: Record<
  | 'ACCOUNT'
  | 'DROPLET'
  | 'PROJECT'
  | 'VOLUME'
  | 'DOMAIN'
  | 'DOMAIN_RECORD'
  | 'RESERVED_IP',
  StepEntityMetadata
> = {
  ACCOUNT: {
    resourceName: 'Account',
    _type: 'digitalocean_account',
    _class: ['Account'],
    schema: {
      properties: {
        email: { type: 'string' },
        emailVerified: { type: 'boolean' },
        status: { type: 'string' },
        statusMessage: {
          type: 'string',
        },
        dropletLimit: {
          type: 'number',
        },
        floatingIpLimit: {
          type: 'number',
        },
        reservedIpLimit: {
          type: 'number',
        },
        volumeLimit: {
          type: 'number',
        },
      },
      required: [
        'email',
        'emailVerified',
        'status',
        'statusMessage',
        'dropletLimit',
        'floatingIpLimit',
        'reservedIpLimit',
        'volumeLimit',
      ],
    },
  },
  DROPLET: {
    resourceName: 'Droplet',
    _type: 'digitalocean_droplet',
    _class: ['Host'],
  },
  PROJECT: {
    resourceName: 'Project',
    _type: 'digitalocean_project',
    _class: ['Project'],
  },
  VOLUME: {
    resourceName: 'Volume',
    _type: 'digitalocean_volume',
    _class: ['DataStore', 'Disk'],
  },
  DOMAIN: {
    resourceName: 'Domain',
    _type: 'digitalocean_domain',
    _class: ['Domain'],
  },
  DOMAIN_RECORD: {
    resourceName: 'Domain Record',
    _type: 'digitalocean_domain_record',
    _class: ['DomainRecord'],
  },
  RESERVED_IP: {
    resourceName: 'Reserved IP',
    _type: 'digitalocean_reserved_ip',
    _class: ['IpAddress'],
  },
};

export const Relationships: Record<
  'DROPLET_USES_VOLUME' | 'ACCOUNT_HAS_PROJECT',
  StepRelationshipMetadata
> = {
  DROPLET_USES_VOLUME: {
    sourceType: Entities.DROPLET._type,
    targetType: Entities.VOLUME._type,
    _type: 'digitalocean_droplet_uses_volume',
    _class: RelationshipClass.USES,
  },
  ACCOUNT_HAS_PROJECT: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.PROJECT._type,
    _type: 'digitalocean_account_has_project',
    _class: RelationshipClass.HAS,
  },
};
