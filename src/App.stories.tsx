import React from 'react';

export default { title: 'Button' };

export const withText = () => <div>Hello div</div>;

export const withEmoji = () => (
	<div>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</div>
);
