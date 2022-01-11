import React, { useState } from 'react';
import styled from 'styled-components';
import plusIcon from '../../../static/images/ic_plus_grey.svg';
import minusIcon from '../../../static/images/ic_minus_grey.svg';
import { colors } from '../../styles/colors';
import { useTranslation } from 'react-i18next';

const PricesSectionMob = ({ el }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toogleList = () => setIsOpen(prevState => !prevState);

  const { t } = useTranslation();
	return (
		<>
			<div key={el.name}>
				<TableHead>
					<div>{el.name}</div>
					<div>
						{isOpen ? (
							<img src={minusIcon} alt="Minus Icon" onClick={toogleList} />
						) : (
							<img src={plusIcon} alt="Plus Icon" onClick={toogleList} />
						)}
					</div>
				</TableHead>
			</div>
			{isOpen && (
				<TableWrap>
					<tbody>
						<tr>
							<TdTitle>{t('tablePrice')}</TdTitle>
							<DetailWrap>{el.price}</DetailWrap>
						</tr>
						<tr>
							<TdTitle>{t('tableTime')}</TdTitle>
							<DetailWrap>{el.estimate}</DetailWrap>
						</tr>
					</tbody>
				</TableWrap>
			)}
		</>
	);
};

export default PricesSectionMob;

const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 16px 6%;
	padding-top: 16px;
	border-top: 1px solid ${colors.grey.background};
`;

const TableWrap = styled.table`
	width: 100%;
	margin: 0;
	padding: 0px 6%;
	font-size: 1rem;
	line-height: 160%;
`;

const DetailWrap = styled.td`
	text-align: end;
  padding-top: 14px;
`;
const TdTitle = styled.td`
	text-transform: uppercase;
	font-weight: 600;
  padding-top: 14px;
`;
