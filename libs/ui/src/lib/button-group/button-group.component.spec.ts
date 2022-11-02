import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ButtonGroupComponent } from './button-group.component';
describe('ButtonGroupComponent', () => {
  let spectator: Spectator<ButtonGroupComponent>;
  const createComponent = createComponentFactory(ButtonGroupComponent);

  beforeEach(() => {
    spectator = createComponent();
  });
  it('Can Create the Component', () => {
    expect(spectator.query('[data-testid="button-group-component"]')).toExist();
  });

  describe('how initial state no buttons it work', () => {
    it('no button', () => {
      expect(spectator.queryAll('button').length).toBe(0);
    });
  });

  describe('shows a single button', () => {
    let output: unknown;
    beforeEach(() => {
      spectator = createComponent({
        props: {
          buttons: [
            {
              label: 'Birds',
              value: '1',
            },
          ],
        },
      });
      spectator.output('selected').subscribe((value) => (output = value));
    });
    it('shows one button', () => {
      expect(spectator.queryAll('button').length).toBe(1);
    });
    it('label sb birds', () => {
      const button = spectator.query<HTMLButtonElement>('button');
      expect(button?.textContent).toBe(' Birds ');
    });

    it('clicking the button emits the item', () => {
      const button = spectator.query<HTMLButtonElement>('button');
      expect(output).toBeUndefined();
      button?.click();
      expect(output).toEqual({ label: 'Birds', value: '1' });
    });
  });
}); // end
