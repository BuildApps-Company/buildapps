import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton, PrimaryButtonOutline } from '../../styles/buttons';
import { colors } from '../../styles/colors';
import { BlueGradient } from '../../styles/gradients';
import { HeroBlock } from '../../styles/layout';
import { H2Block, H4, SubH3, Body2 } from '../../styles/styled-headers';

export const LatestProjects = ({ projects }) => {
	const [index, setIndex] = useState(0);
	const activeProject = projects[index];

	return (
		<BlockWrapper>
			<HeaderLine>
				<div>
					<H2Block>LATEST PROJECTS</H2Block>
					<Pagination>
						{projects.map((_, i) => (
							<Tab
								key={i}
								onClick={() => setIndex(i)}
								active={index === i}
							></Tab>
						))}
					</Pagination>
				</div>
			</HeaderLine>
			<ProjectDetails>
				<ImageSection>
					<LongImage src={activeProject.longImage} />
				</ImageSection>
				<DescriptionSection>
					<SmallLogo src={activeProject.image} />
					<Title>{activeProject.title}</Title>
					<TagContainer>
						{activeProject.responsibility.map(res => (
							<Tag key={res}>{res}</Tag>
						))}
					</TagContainer>
					<Description>{activeProject.description}</Description>
					<ContactUs>Contact us</ContactUs>
				</DescriptionSection>
			</ProjectDetails>
		</BlockWrapper>
	);
};

const BlockWrapper = styled(HeroBlock)`
	background: ${colors.light.background};
	padding: 80px 0 0;
`;

const HeaderLine = styled.div`
	padding: 0 11%;
	flex: 0 0 auto;
	justify-content: space-between;
`;

const ProjectDetails = styled.div`
	flex: 1 1 auto;
	display: flex;
	margin-top: 30px;
	overflow: hidden;
`;

const Section = styled.div`
	flex: 0 0 50%;
`;

const ImageSection = styled(Section)`
	display: flex;
	align-items: center;
	justify-content: center;

	${BlueGradient}
`;

const LongImage = styled.img`
	max-height: 80%;
	max-width: 80%;
`;

const DescriptionSection = styled(Section)`
	padding: 0 8%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const SmallLogo = styled.img`
	max-height: 80px;
`;

const Tag = styled(SubH3)`
	display: inline-block;
	color: #969696;
	text-transform: uppercase;

	& + & {
		margin-left: 12px;
	}
`;

const Title = styled(H4)`
	margin-top: 32px;
`;

const TagContainer = styled.div`
	margin-top: 12px;
`;

const Description = styled(Body2)`
	margin-top: 16px;
`;

const Pagination = styled.div`
	display: flex;
	margin-top: -18px;
`;

const Tab = styled.div`
	cursor: pointer;
	padding: 8px;
	margin-left: -8px;

	${({ active }) =>
		!active &&
		css`
			opacity: 0.25;
		`}

	& + & {
		margin-left: 8px;
	}

	&:before {
		width: 64px;
		height: 6px;
		content: '';
		display: block;
		background: ${colors.Main};
	}
`;

const ContactUs = styled(PrimaryButton)`
	font-size: 1rem;
	margin-top: 44px;
`;
