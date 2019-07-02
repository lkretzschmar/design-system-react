import React from 'react';
import Files from '~/components/files';
import File from '~/components/files/file';
import IconSettings from '~/components/icon-settings';
import Icon from '~/components/icon';

class Example extends React.Component {
	static displayName = 'filesExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<Files>
					<File
						title="Proposal.pdf"
						icon={<Icon category="doctype" name="pdf" />}
						image="/assets/images/placeholder-img@16x9.jpg"
						href="javascript:void(0);"
						crop="1-by-1"
					/>
					<File
						title="Proposal.pdf"
						icon={<Icon category="doctype" name="pdf" />}
						image="/assets/images/placeholder-img@16x9.jpg"
						href="javascript:void(0);"
						crop="16-by-9"
					/>
					<File
						title="Proposal.pdf"
						icon={<Icon category="doctype" name="pdf" />}
						image="/assets/images/placeholder-img@16x9.jpg"
						href="javascript:void(0);"
						crop="4-by-3"
					/>
				</Files>
			</IconSettings>
		);
	}
}

export default Example;
