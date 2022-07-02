import { accountSteps } from './account';
import { alertPolicySteps } from './alerts';
import { databaseSteps } from './databases';
import { domainSteps } from './domains';
import { dropletSteps } from './droplets';
import { firewallSteps } from './firewall';
import { ipSteps } from './ips';
import { sshKeySteps } from './keys';
import { projectSteps } from './projects';
import { snapshotsSteps } from './snapshots';
import { volumeSteps } from './volumes';

const integrationSteps = [
  ...accountSteps,
  ...dropletSteps,
  ...projectSteps,
  ...volumeSteps,
  ...domainSteps,
  ...ipSteps,
  ...sshKeySteps,
  ...databaseSteps,
  ...snapshotsSteps,
  ...firewallSteps,
  ...alertPolicySteps,
];

export { integrationSteps };
