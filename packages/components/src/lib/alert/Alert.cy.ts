import { mount } from '@cypress/vue';
import i18n from '@app/i18n';

import Alert from './Alert.vue';

const t = i18n.global.t;

it('Mounts Alert', () => {
  const titleKey = 'name';
  mount(Alert, { props: { titleKey }, global: { plugins: [i18n] } })
    .get('.alert')
    .should('exist');
});
