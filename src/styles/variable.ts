import { css } from 'styled-components';

const variables = {
	flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

	position: (position = 'fixed', top = 0, right = 0, bottom = 0, left = 0) => `
	position: ${position};
	top: ${top};
	left: ${left};
	bottom: ${bottom};
	right: ${right};
`,

	absoluteCenter: css`
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	`,
};

export default variables;
