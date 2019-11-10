import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Menu } from '../data/menu';
import { Team } from '../data/team';
import SectionHeader from './section-header';
import { SlideContainer } from '../styles/shared';

const HiddenSvg = styled.svg`
	width: 0;
	height: 0;
`;

const MemberPhoto = styled.div`
	width: 100%;
	height: 100%;
	background: url(${props => props.src}) no-repeat;
	background-size: 100% auto;
	background-color: #e4e4e4;
	background-size: 94%;
`;

const MemberDescription = styled.div`
	display: none;
	position: absolute;
	top: 0px;
	color: ${theme.colors.white};
`;

const MemberName = styled.div`
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const MemberContainer = styled.div`
	width: 240px;
	height: 240px;
	flex: 0 0 auto;
	margin: 0 2rem;
	position: relative;
	cursor: pointer;

	&:nth-child(odd) ${MemberPhoto} {
		clip-path: url(#pattern1);
	}
	&:nth-child(odd) ${MemberDescription} {
		padding: 20% 15%;
	}

	&:nth-child(even) ${MemberPhoto} {
		clip-path: url(#pattern2);
	}
	&:nth-child(even) ${MemberDescription} {
		padding: 20%;
	}

	&:hover ${MemberDescription} {
		display: block;
	}
	&:hover ${MemberPhoto} {
		filter: url(#hoverFilter);
	}
`;

const TeamGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 2rem;
`;

export default () => (
	<div id={Menu.Team.key}>
		<SectionHeader
			smallDescription="team"
			largeDescription="Our beloved team of professionals"
		/>
		<SlideContainer>
			<TeamGrid>
				{Object.entries(Team).map(([key, member]) => (
					<MemberContainer>
						<MemberPhoto src={member.url} />
						<MemberDescription>
							<MemberName className={`member-photo-${member.key}`}>
								{member.name}
							</MemberName>
							{member.description}
						</MemberDescription>
					</MemberContainer>
				))}
			</TeamGrid>

			<HiddenSvg>
				<filter id="hoverFilter">
					<feColorMatrix
						type="matrix"
						values="0.51     0     0     0     0
								0     0.28     0     0     0
								0     0     0.65     0     0
								0     0     0     1     0 "
					/>
					<feGaussianBlur stdDeviation="2" />
				</filter>
				<clipPath id="pattern1">
					<path
						d="M2.50286 132.53C-3.97293 92.7043 5.85655 52.9616 23.3151 27.7764C32.0443 15.1839 42.6521 6.2704 54.0396 2.76567C65.4022 -0.731437 77.6048 1.13591 89.6115 10.2271C114.017 28.7064 135.999 27.3224 154.052 24.8201C155.719 24.5891 157.349 24.3492 158.942 24.1148C165.997 23.0765 172.33 22.1447 177.92 22.5593C184.714 23.0631 190.355 25.555 194.753 32.3273C196.961 35.7262 199.009 40.882 200.79 47.3789C202.569 53.8678 204.072 61.6637 205.201 70.3217C207.461 87.6378 208.224 108.375 206.724 128.951C205.223 149.53 201.461 169.923 194.685 186.564C187.906 203.213 178.141 216.033 164.682 221.599C151.146 227.196 140.53 227.021 131.65 224.159C122.745 221.289 115.545 215.707 108.849 210.389C108.612 210.2 108.375 210.012 108.139 209.824C101.748 204.743 95.7376 199.964 89.1488 198.39C82.2379 196.739 74.7889 198.622 65.6776 206.935C56.7123 215.114 48.8542 217.507 42.001 215.913C35.1176 214.312 29.0825 208.654 23.8623 200.349C13.4255 183.745 6.46812 156.917 2.50286 132.53Z"
						stroke="black"
					/>
				</clipPath>
				<clipPath id="pattern2">
					<path
						d="M193.64 168.939C171.685 199.427 139.043 219.117 110.961 224.195C96.9203 226.735 84.0682 225.614 74.2646 220.422C64.4839 215.243 57.678 205.981 55.7539 192.092C51.8382 163.825 36.4316 150.243 22.8843 139.992C21.6331 139.046 20.4005 138.129 19.196 137.233C13.863 133.268 9.08016 129.711 5.67158 125.757C1.53198 120.955 -0.540347 115.606 1.01871 108.26C1.80138 104.573 3.84459 99.8307 6.94892 94.3799C10.0492 88.9362 14.1918 82.8131 19.1482 76.3678C29.0613 63.4771 42.2132 49.3197 56.7504 36.7594C71.2903 24.1968 87.1964 13.2491 102.616 6.75749C118.043 0.262686 132.911 -1.74239 145.434 3.45729C158.033 8.6889 164.908 15.7953 168.871 23.5241C172.846 31.2757 173.915 39.6909 174.825 47.6068C174.857 47.8885 174.89 48.1696 174.922 48.4502C175.787 56.005 176.601 63.1197 179.911 68.5047C183.385 74.1586 189.547 77.8307 201.033 78.3614C212.321 78.883 219.063 82.4828 222.521 88.0359C225.996 93.6153 226.249 101.308 224.221 110.213C220.166 128.019 207.086 150.267 193.64 168.939Z"
						stroke="black"
					/>
				</clipPath>
			</HiddenSvg>
		</SlideContainer>
	</div>
);
