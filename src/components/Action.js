import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
// import '../styles/Action.css';

const styles = makeStyles({
	contAction: {
		width: '80vw',
		top: '10vh',
		position: 'absolute',
		left: '10vw',
		zIndex: '100',
		borderRadius: '10px',
		background: '#ffffff 0% 0% no-repeat padding-box',
		boxShadow: '0px 26px 81px #0000005c',
		padding: '2rem 1rem',
		color: '#333333',
		'& button': {
			height: '2rem',
			width: '6rem',
			border: 'none',
			borderRadius: '8px',
			'& :hover': {
				boxShadow: '0px 0px 16px #366ef150',
			},
		},
		'@media(max-width:1250px)': {
			width: '90vw',
			left: '5vw',
			fontSize: '0.9rem !important',
		},
		'@media(max-width:800px)': {
			height: 'auto !important',
		},
	},
	cardAction: {
		'& p': {
			textAlign: 'left',
			fontWeight: 500,
		},
	},
	scrollAction: {
		height: '30vh',
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
		scrollbarColor: '#0670ed #004cff38',
		'& input': {
			display: 'none',
			'&:checked + label': {
				backgroundColor: '#eceef1',
			},
			'&:checked + label :nth-child(2)': {
				opacity: 1,
			},
		},
		'& label': {
			padding: '0.5rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			'& :nth-child(2)': {
				opacity: 0,
			},
			'&:hover': {
				backgroundColor: '#eceef1',
			},
		},
		'@media(max-width:800px)': {
			height: '15vh',
		},
	},
	cardContAction: {
		display: 'flex',
		marginTop: '3rem',
		height: '5rem',
		'@media(max-width:800px)': {
			height: 'auto',
			flexDirection: 'column',
		},
	},
});

const Action = ({ setAction, data }) => {
	const classes = styles();
	const [staff, setStaff] = useState('');
	const [followUp, setFollowUp] = useState('');
	const [delivery, setDelivery] = useState('');
	const [pay, setpay] = useState('');

	const [edit1, setEdit1] = useState(false);
	const [edit2, setEdit2] = useState(false);
	const [edit3, setEdit3] = useState(false);
	const [edit4, setEdit4] = useState(false);
	// backgrounds
	const [bg1, setbg1] = useState('#fff');
	const [bg2, setbg2] = useState('#fff');
	const [bg3, setbg3] = useState('#fff');

	//textColor
	const [color1, setColor1] = useState('');
	const [color2, setColor2] = useState('');
	const [color3, setColor3] = useState('');

	//temp storing
	const [t1, sett1] = useState('');
	const [t2, sett2] = useState('');
	const [t3, sett3] = useState('');
	const [t4, sett4] = useState('');

	const [checks, setChecks] = useState([]);

	useEffect(() => {
		const temp = [];
		data.forEach((item, index) => {
			if (document.getElementById(`${'id' + index}`).checked) temp.push(index);
		});
		setChecks(temp);
	}, []);

	return (
		<div
			className={classes.contAction}
			style={{ height: `${edit1 || edit2 || edit3 || edit4 ? 80 : 40}vh` }}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<p style={{ fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
					Choose actions on selected orders
				</p>
				<p style={{ margin: '0', display: 'flex', columnGap: '0.5rem' }}>
					<button
						style={{
							backgroundColor: '#366EF1',
							color: '#fff',
						}}
					>
						SHIP NOW
					</button>
					<button
						style={{
							width: '2rem',
							border: '1px solid #E4E4E4',
							backgroundColor: '#fff',
						}}
						onClick={() => setAction(false)}
					>
						X
					</button>
				</p>
			</div>
			<div className={classes.cardContAction}>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.cardAction}>
						<p style={{ margin: 0 }}>Select Staff</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								border: '1px solid #E4E4E4',
								borderRadius: '8px',
							}}
						>
							<span style={{ fontWeight: '700' }}>{staff}</span>
							<span>
								<span
									onClick={() => {
										if (edit1) {
											setEdit1(false);
										} else setEdit1(true);
									}}
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						{edit1 && (
							<div
								style={{
									boxShadow: '0px 17px 32px #00000029',
									border: '1px solid #F4F4F9',
									borderRadius: '6px',
									padding: '0.7rem',
								}}
							>
								<div className={classes.scrollAction}>
									<input
										type='radio'
										name='staff'
										id='s1'
										value='M. mathew'
										onChange={(e) => {
											sett1(e.target.value);
										}}
									/>
									<label htmlFor='s1'>
										<span>M. Mathew</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='staff'
										id='s2'
										value='M. Aman'
										onChange={(e) => {
											sett1(e.target.value);
										}}
									/>
									<label htmlFor='s2'>
										<span>M. Aman</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='staff'
										id='s3'
										value='M. Deppak'
										onChange={(e) => {
											sett1(e.target.value);
										}}
									/>
									<label htmlFor='s3'>
										<span>M. Deppak</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='staff'
										id='s4'
										value='M. random'
										onChange={(e) => {
											sett1(e.target.value);
										}}
									/>
									<label htmlFor='s4'>
										<span>M. random</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='staff'
										id='s5'
										value='M. Mathew'
										onChange={(e) => {
											sett1(e.target.value);
										}}
									/>
									<label htmlFor='s5'>
										<span>M. Mathew</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='staff'
										id='s6'
										value='M. Bat'
										onChange={(e) => {
											sett1(e.target.value);
										}}
									/>
									<label htmlFor='s6'>
										<span>M. Bat</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
								</div>
								<div style={{ marginTop: '1rem' }}>
									<button
										onClick={() => {
											setStaff(t1);
											checks.forEach((item) => {
												data[item].staff = t1;
											});
											setEdit1(false);
										}}
										style={{ backgroundColor: '#366EF1', color: '#fff' }}
									>
										Confirm
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.cardAction}>
						<p style={{ margin: 0 }}>Select Follow Up</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								border: `${followUp == '' ? '1px solid #E4E4E4' : ''} `,
								borderRadius: '8px',
								backgroundColor: `${bg1}`,
							}}
						>
							<span style={{ color: `${color1}`, fontWeight: '700' }}>
								{followUp}
							</span>
							<span>
								<span
									onClick={() => {
										if (edit2) {
											setEdit2(false);
										} else setEdit2(true);
									}}
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						{edit2 && (
							<div
								style={{
									boxShadow: '0px 17px 32px #00000029',
									border: '1px solid #F4F4F9',
									borderRadius: '6px',
									padding: '0.7rem',
								}}
							>
								<div className={classes.scrollAction}>
									<input
										type='radio'
										name='follow'
										id='f1'
										value='Pending'
										onChange={(e) => {
											sett2(e.target.value);
										}}
									/>
									<label htmlFor='f1'>
										<span>Pending</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='follow'
										id='f2'
										value='Cancelled'
										onChange={(e) => {
											sett2(e.target.value);
										}}
									/>
									<label htmlFor='f2'>
										<span>Cancelled</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='follow'
										id='f3'
										value='Confirmed'
										onChange={(e) => {
											sett2(e.target.value);
										}}
									/>
									<label htmlFor='f3'>
										<span>Confirmed</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='follow'
										id='f4'
										value='Call Back'
										onChange={(e) => {
											sett2(e.target.value);
										}}
									/>
									<label htmlFor='f4'>
										<span>Call Back</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='follow'
										id='f5'
										value='opt #1'
										onChange={(e) => {
											sett2(e.target.value);
										}}
									/>
									<label htmlFor='f5'>
										<span>opt #1</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='follow'
										id='f6'
										value='opt #2'
										onChange={(e) => {
											sett2(e.target.value);
										}}
									/>
									<label htmlFor='f6'>
										<span>opt #2</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
								</div>
								<div style={{ marginTop: '1rem' }}>
									<button
										onClick={() => {
											setFollowUp(t2);
											if (t2 == 'Confirmed') {
												setbg1('#CEFFCC');
												setColor1('#34D12F');
											} else if (t2 == 'Cancelled') {
												setbg1('#FFCCD5');
												setColor1('#FF002B');
											} else if (t2 == 'Pending' || t2 == 'Call Back') {
												setColor1('#FCAF09');
												setbg1('#FFF7CC');
											}
											checks.forEach((item) => {
												data[item].FollowUp = t2;
											});
											setEdit2(false);
										}}
										style={{ backgroundColor: '#366EF1', color: '#fff' }}
									>
										Confirm
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.cardAction}>
						<p style={{ margin: 0 }}>Select Delivery Status</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								border: `${delivery == '' ? '1px solid #E4E4E4' : ''} `,
								borderRadius: '8px',
								backgroundColor: `${bg2}`,
							}}
						>
							<span style={{ color: `${color2}`, fontWeight: '700' }}>
								{delivery}
							</span>
							<span>
								<span
									onClick={() => {
										if (edit3) {
											setEdit3(false);
										} else setEdit3(true);
									}}
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						{edit3 && (
							<div
								style={{
									boxShadow: '0px 17px 32px #00000029',
									border: '1px solid #F4F4F9',
									borderRadius: '6px',
									padding: '0.7rem',
								}}
							>
								<div className={classes.scrollAction}>
									<input
										type='radio'
										name='delivery'
										id='d1'
										value='Pending'
										onChange={(e) => {
											sett3(e.target.value);
										}}
									/>
									<label htmlFor='d1'>
										<span>Pending</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='delivery'
										id='d2'
										value='Cancelled'
										onChange={(e) => {
											sett3(e.target.value);
										}}
									/>
									<label htmlFor='d2'>
										<span>Cancelled</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='delivery'
										id='d3'
										value='Delivered'
										onChange={(e) => {
											sett3(e.target.value);
										}}
									/>
									<label htmlFor='d3'>
										<span>Delivered</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='delivery'
										id='d4'
										value='In Transit'
										onChange={(e) => {
											sett3(e.target.value);
										}}
									/>
									<label htmlFor='d4'>
										<span>In Transit</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='delivery'
										id='d5'
										value='opt #1'
										onChange={(e) => {
											sett3(e.target.value);
										}}
									/>
									<label htmlFor='d5'>
										<span>opt #1</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
									<input
										type='radio'
										name='delivery'
										id='d6'
										value='opt #2'
										onChange={(e) => {
											sett3(e.target.value);
										}}
									/>
									<label htmlFor='d6'>
										<span>opt #2</span>
										<span
											style={{
												height: '1rem',
												width: '1rem',
												display: 'inline-block',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 16 16'
											>
												<path
													id='check_box'
													data-name='check box'
													d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
													transform='translate(-4.5 -4.5)'
													fill='#366EF1'
												/>
											</svg>
										</span>
									</label>
								</div>

								<div style={{ marginTop: '1rem' }}>
									<button
										onClick={() => {
											setDelivery(t3);
											if (t3 == 'Delivered' || t3 == 'In Transit') {
												setbg2('#CEFFCC');
												setColor2('#34D12F');
											} else if (t3 == 'Cancelled') {
												setbg2('#FFCCD5');
												setColor2('#FF002B');
											} else if (t3 == 'Pending') {
												setColor2('#FCAF09');
												setbg2('#FFF7CC');
											}
											checks.forEach((item) => {
												data[item].Delivery = t3;
											});
											setEdit3(false);
										}}
										style={{ backgroundColor: '#366EF1', color: '#fff' }}
									>
										Confirm
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				<div
					style={{
						flex: '1',
						padding: '1rem',
					}}
				>
					<div className={classes.cardAction}>
						<p style={{ margin: 0 }}>Payment Status</p>
						<p
							style={{
								padding: '0.5rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								border: `${pay == '' ? '1px solid #E4E4E4' : ''} `,
								borderRadius: '8px',
								backgroundColor: `${bg3}`,
							}}
						>
							<span style={{ color: `${color3}` }}>{pay}</span>
							<span>
								<span
									onClick={() => {
										if (edit4) {
											setEdit4(false);
										} else setEdit4(true);
									}}
									style={{
										backgroundColor: '#366EF1',
										padding: '0 0.3rem',
										borderRadius: '5px',
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='11'
										height='11'
										viewBox='0 0 24 24'
									>
										<path
											d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
											fill='#fff'
										/>
									</svg>
								</span>
							</span>
						</p>
						{edit4 && (
							<div
								style={{
									boxShadow: '0px 17px 32px #00000029',
									border: '1px solid #F4F4F9',
									borderRadius: '6px',
									padding: '0.7rem',
								}}
							>
								<div className={classes.scrollAction}>
									<div className={classes.scrollAction}>
										<input
											type='radio'
											name='delivery'
											id='d1'
											value='Pending'
											onChange={(e) => {
												sett4(e.target.value);
											}}
										/>
										<label htmlFor='d1'>
											<span>Pending</span>
											<span
												style={{
													height: '1rem',
													width: '1rem',
													display: 'inline-block',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
												>
													<path
														id='check_box'
														data-name='check box'
														d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
														transform='translate(-4.5 -4.5)'
														fill='#366EF1'
													/>
												</svg>
											</span>
										</label>
										<input
											type='radio'
											name='delivery'
											id='d2'
											value='Cancelled'
											onChange={(e) => {
												sett4(e.target.value);
											}}
										/>
										<label htmlFor='d2'>
											<span>Cancelled</span>
											<span
												style={{
													height: '1rem',
													width: '1rem',
													display: 'inline-block',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
												>
													<path
														id='check_box'
														data-name='check box'
														d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
														transform='translate(-4.5 -4.5)'
														fill='#366EF1'
													/>
												</svg>
											</span>
										</label>
										<input
											type='radio'
											name='delivery'
											id='d3'
											value='Paid'
											onChange={(e) => {
												sett4(e.target.value);
											}}
										/>
										<label htmlFor='d3'>
											<span>paid</span>
											<span
												style={{
													height: '1rem',
													width: '1rem',
													display: 'inline-block',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
												>
													<path
														id='check_box'
														data-name='check box'
														d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
														transform='translate(-4.5 -4.5)'
														fill='#366EF1'
													/>
												</svg>
											</span>
										</label>
										<input
											type='radio'
											name='delivery'
											id='d4'
											value='Refunded'
											onChange={(e) => {
												sett4(e.target.value);
											}}
										/>
										<label htmlFor='d4'>
											<span>Refunded</span>
											<span
												style={{
													height: '1rem',
													width: '1rem',
													display: 'inline-block',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
												>
													<path
														id='check_box'
														data-name='check box'
														d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
														transform='translate(-4.5 -4.5)'
														fill='#366EF1'
													/>
												</svg>
											</span>
										</label>
									</div>
								</div>
								<div style={{ marginTop: '1rem' }}>
									<button
										onClick={() => {
											setpay(t4);
											if (t4 == 'Paid' || t4 == 'Refunded') {
												setbg3('#CEFFCC');
												setColor3('#34D12F');
											} else if (t4 == 'Cancelled') {
												setbg3('#FFCCD5');
												setColor3('#FF002B');
											} else if (t4 == 'Pending') {
												setColor3('#FCAF09');
												setbg3('#FFF7CC');
											}
											checks.forEach((item) => {
												data[item].status = t4;
											});
											setEdit4(false);
										}}
										style={{ backgroundColor: '#366EF1', color: '#fff' }}
									>
										Confirm
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Action;
