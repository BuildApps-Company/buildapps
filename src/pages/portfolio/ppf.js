import React from 'react';
import { PortfolioDetails } from '../../components/PortfolioPage/index';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { H3, H4 } from '../../styles/styled-headers';

const ppf = () => {
	return (
		<div>
			<PortfolioDetails id={'ppf'}>
				<ProjectDetailsContainer>
					<p>
						Due to the high competition in the lending market and the high
						demand for loans for business purposes, the speed and the quality of
						working with clients are much appreciated, and, last but not least,
						the automation of work with each application. This is where software
						in the form of CRM comes into play.
					</p>
					<H3>The main tasks of the system:</H3>
					<H4>Automation of routine processes:</H4>
					<ul>
						<li>
							Automation of routine, repetitive tasks to save time and money.
						</li>
						<li>
							Software modules expand the platform's automation capabilities and
							speed up tasks, allowing employees to do more useful things than
							manual processing of a large number of paper documents.
						</li>
					</ul>
					<H4>
						Automation of collection and processing of data on credit subjects:
					</H4>
					<ul>
						<li>
							CRM provides and generates an easy-to-read statement on the credit
							history of a given client / entity with the help of specialized
							services and modules
						</li>
						<li>
							Interaction with third-party services (via API) to obtain more
							detailed information about the counterparty, which can automate
							the counterparty verification process. Also providing the most
							complete information about related companies, relatives, etc.
						</li>
						<li>
							Simplification of work with bank statements. Creation of tables
							with transactions ordered according to the rules, construction of
							graphs.
						</li>
					</ul>
					<H4>Application processing up to the issuance of a loan:</H4>
					<ul>
						<li>
							When created in the system, the application goes through several
							stages, including verification by the verifier, underwriter,
							credit committee, etc. It is important to note that there can be
							any number of such checks, until all the necessary data is
							received.
						</li>
						<li>Validation of bank statements.</li>
						<li>
							A mechanism was created to validate incoming and outgoing
							transactions due to the fact that a bank statement provided by the
							lending entity is easy to corrupt, make changes, etc.
						</li>
						<li>
							Mechanism for creating reports on various parts of the system. For
							example: bank statement, uploading reports on applications, etc.
						</li>
						<li>
							Automatic calculation of loan conditions (terms, limits, rates,
							etc.) according to the selected product and the client's financial
							position.
						</li>
						<li>
							Calculation of scoring using an artificial intelligence to
							completely remove the possible bias towards the subject of
							crediting.
						</li>
					</ul>
					<H4>Issuance of loans online:</H4>
					<ul>
						<li>
							The service allows you to issue loans online and with minimal
							requirements, such as scanned documents. Since the processes are
							performed remotely without the need to travel to the main office
							or branch.
						</li>
						<li>Lack of paper documents. </li>
					</ul>
				</ProjectDetailsContainer>
			</PortfolioDetails>
			;
		</div>
	);
};

export default ppf;

const ProjectDetailsContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	margin-bottom: 48px;
	@media all and (min-width: ${breakpoints.tablet}) {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 24px;
		padding-left: 22%;
		padding-right: 22%;
		margin-top: 32px;
	}
`;
