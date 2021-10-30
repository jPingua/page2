import { useEffect, useState } from 'react';
import '../styles/table.css';
import Navbar from './Navbar';
import { CircularProgressbar } from 'react-circular-progressbar';
// import Shopify from '../table/shopify.svg';
import 'react-circular-progressbar/dist/styles.css';
import Action from './Action';
import NavMob from './NavbarMobile';
import useWindowDimensions from './Width';

const Table = () => {
	// const route = useRouter();
	const { height, width } = useWindowDimensions();
	const [editDims, setEditDims] = useState(false);
	const [editStatus, setEditStatus] = useState('');
	const [editStaff, setEditStaff] = useState('');
	const [editFollowUp, setEditFollowUp] = useState(false);
	const [editDelivery, setEditDelivery] = useState(false);
	const [checked, setChecked] = useState(0);
	const [create, setCreate] = useState(0);
	const [calander, setCalander] = useState(false);
	const [ready, setReady] = useState(false);

	//states for table
	const [status, setStatus] = useState(-1);
	const [staff, setStaff] = useState(-1);
	const [follow, setFollow] = useState(-1);
	const [deli, setDeli] = useState(-1);
	const [dims, setDims] = useState(-1);
	const [filter, setFilter] = useState(false);
	const [action, setAction] = useState(false);
	const [totalChecked, setTotalChecked] = useState(0);
	const [data, setData] = useState([
		{
			id: '#123123',
			date: '12/28/1221',
			time: '02:20:12',
			shopify: 'shopify',
			product: 'arm chairasdfasdf',
			qty: '1',
			dims: '123 x 213 x 213000',
			Volume: 12,
			Entered: 10,
			rs: '7654',
			status: 'Pending',
			cust: 'Aman Kumar',
			phNum: '1234567890',
			mail: 'random@mail.com',
			staff: 'Mr. Aman',
			FollowUp: 'pending',
			Delivery: 'Pending',
			CS: 3,
			DS: 7,
		},
		{
			id: '#123123',
			date: '12/28/1221',
			time: '02:20:12',
			shopify: 'shopify',
			product: 'arm chair',
			qty: '1',
			dims: '123 x 213 x 213',
			Volume: 12,
			Entered: 10,
			rs: '7654',
			status: 'Paid',
			cust: 'Aman Kumar',
			phNum: '1234567890',
			mail: 'random@mail.com',
			staff: 'D.mathews',
			FollowUp: 'pending',
			Delivery: 'Pending',
			CS: 9,
			DS: 4,
		},
	]);

	useEffect(() => {
		setReady(true);
	});

	const findChecked = () => {
		const temp = [];
		data.forEach((item, index) => {
			if (document.getElementById(`${'id' + index}`).checked) temp.push(index);
		});
		console.log(temp.length);
		setTotalChecked(temp.length);
	};

	return (
		<div className={'container'}>
			{ready && width >= 800 && <Navbar />}
			{ready && width < 800 && <NavMob width={width} />}

			<div className={'pageInfo'}>
				{action && <Action setAction={setAction} data={data} />}
				<div className={'infoLeft'}>
					<p>Orders</p>
					{totalChecked > 0 && <p>{totalChecked} ORDER SELECTED</p>}
					<p>
						{totalChecked > 0 && (
							<span
								style={{ cursor: 'pointer' }}
								onClick={() => setAction(true)}
							>
								Take Actions
							</span>
						)}
					</p>
				</div>
				<div className={'infoRight'}>
					<div style={{ position: 'relative' }}>
						<span
							style={{
								height: '2rem',
								width: '2rem',
								backgroundColor: '#fff',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: '8px',
								backgroundColor: `${calander ? '#366ef1' : '#fff'}`,
							}}
							onClick={() => {
								if (!calander) setCalander(true);
								else setCalander(false);
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
							>
								<path
									d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'
									fill={calander ? '#fff' : '#366ef1'}
								/>
							</svg>
						</span>
						{calander && (
							<div className={'calander'}>
								<div>
									<label htmlFor='calc1'>Starting Date</label>
									<input type='date' name='calc1' id='calc1' />
								</div>
								<div>
									<label htmlFor='calc2'>Last Date</label>
									<input type='date' name='calc2' id='calc2' />
								</div>
							</div>
						)}
					</div>
					<input
						type='text'
						style={{
							height: '2rem',
							borderRadius: '8px',
							border: 'none',
							padding: '0.2rem 0.2rem',
							color: '#707070',
						}}
						name='text'
						id='text'
						placeholder='Search'
					/>
					<span
						style={{
							height: '2rem',
							width: '2rem',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '8px',
							backgroundColor: `${filter ? '#366ef1' : '#fff'}`,
						}}
						onClick={() => {
							if (!filter) setFilter(true);
							else {
								setFilter(false);
							}
						}}
					>
						<svg
							id='filter_icon'
							data-name='filter icon'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path
								id='container'
								d='M4,0H20a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z'
								transform='translate(24) rotate(90)'
								fill='#fff'
								opacity='0'
							/>
							<path
								id='filter_icon-2'
								data-name='filter icon'
								d='M11.437,0H.563a.563.563,0,0,0-.4.96L4.5,5.3v4.83a.563.563,0,0,0,.24.461L6.615,11.9a.563.563,0,0,0,.885-.461V5.3L11.835.96A.563.563,0,0,0,11.437,0Z'
								transform='translate(6 6)'
								fill={filter ? '#fff' : '#366ef1'}
							/>
						</svg>
					</span>
					<span
						style={{
							height: '2rem',
							width: '2rem',
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '8px',
						}}
					>
						<svg
							id='export_icon'
							data-name='export icon'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path
								id='container'
								d='M4,0H20a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z'
								transform='translate(24) rotate(90)'
								fill='#fff'
								opacity='0'
							/>
							<path
								id='Icon_material-file-upload'
								data-name='Icon material-file-upload'
								d='M10.357,13.676h4.286V9.441H17.5L12.5,4.5l-5,4.941h2.857ZM7.5,15.088h10V16.5H7.5Z'
								transform='translate(-0.5 1.5)'
								fill='#366ef1'
							/>
						</svg>
					</span>
					<span>
						<button
							// link for new create page
							// onClick={() => route.push('/Create')}

							className={'create'}
							style={{
								height: '2rem',
								backgroundColor: '#366EF1',
								color: '#fff',
								border: 'none',
								padding: '0 1rem',
								borderRadius: '8px',
							}}
						>
							Create Order
						</button>
					</span>
				</div>
			</div>
			{filter && (
				<div className={'filter'}>
					<div className={'filterLeft'}>
						<p
							style={{
								textAlign: 'left',
								fontSize: '2rem',
								margin: '0.5rem',
								fontWeight: '600',
								color: '#333333',
							}}
						>
							Filter
						</p>
						<div style={{ paddingLeft: '1rem', fontSize: '0.8rem' }}>
							<p
								style={{
									backgroundColor: '#ECEEF1',

									padding: '0.5rem',
									margin: '0',
								}}
							>
								Order Id
							</p>
							<p>Domain</p>
							<p>Phone No</p>
						</div>
						<p style={{ color: '#477eff', fontSize: '0.6rem' }}>STATUS</p>
						<div style={{ paddingLeft: '1rem', fontSize: '0.8rem' }}>
							<p>Payment</p>
							<p>Follow Up</p>
							<p>Delivery</p>
						</div>
						<p style={{ color: '#477eff', fontSize: '0.6rem' }}>CUSTOMER</p>
						<div style={{ paddingLeft: '1rem', fontSize: '0.8rem' }}>
							<p>Name</p>
							<p>Email Id</p>
							<p>Phone No.</p>
							<p>Staff</p>
						</div>
						<div
							style={{
								paddingLeft: '1rem',
								fontSize: '0.8rem',
								position: 'absolute',
								bottom: '0.5rem',
								cursor: 'pointer',
							}}
						>
							<p onClick={() => setFilter(false)}>CLOSE</p>
						</div>
					</div>
					<div className={'filterRight'}>
						<div
							style={{
								height: '4rem',
								borderBottom: '1px solid #70707020',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'right',
								columnGap: '0.2rem',
							}}
						>
							<button>Clear</button>
							<button
								style={{
									backgroundColor: '#477eff',
									color: '#fff',
								}}
							>
								Apply
							</button>
						</div>
						<div>
							<p style={{ textAlign: 'center' }}>
								<input type='text' name='' id='' placeholder='Enter Order Id' />
								<button
									style={{
										backgroundColor: '#fff',
										color: '#477eff',
										fontWeight: '600',
									}}
								>
									ADD
								</button>
							</p>
						</div>
						<div style={{ marginTop: '2rem', padding: '1rem' }}>
							<p
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									border: '1px solid #F5F5F5',
									padding: '0.5rem 0.5rem',
									borderRadius: '10px',
									margin: '0.4rem 0',
								}}
							>
								<span style={{ color: '#477eff', fontWeight: '600' }}>
									#123456
								</span>
								<span style={{ color: '#707070' }}>1x Arm Chair</span>
								<span style={{ color: '#707070' }}>x</span>
							</p>
							<p
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									border: '1px solid #F5F5F5',
									padding: '0.5rem 0.5rem',
									borderRadius: '10px',
									margin: ' 0.4rem 0',
								}}
							>
								<span style={{ color: '#477eff', fontWeight: '600' }}>
									#123456
								</span>
								<span style={{ color: '#707070' }}>1x Arm Chair</span>
								<span style={{ color: '#707070' }}>x</span>
							</p>
							<p
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									border: '1px solid #F5F5F5',
									padding: '0.5rem 0.5rem',
									borderRadius: '10px',
									margin: '0.4rem 0',
								}}
							>
								<span style={{ color: '#477eff', fontWeight: '600' }}>
									#123456
								</span>
								<span style={{ color: '#707070' }}>1x Arm Chair</span>
								<span style={{ color: '#707070' }}>x</span>
							</p>
						</div>
					</div>
				</div>
			)}
			<div className={'table'}>
				{width <= 800 && (
					<table cellSpacing='0' className={'tb'}>
						<tr className={'head'} style={{ marginBottom: '1rem' }}>
							<th
								style={{
									padding: '0.2rem',
								}}
							>
								<div
									style={{
										width: '1.2rem',
										height: '1.2rem',
										// backgroundColor: 'red',
										borderRadius: '4px',
										transform: 'translateX(0.2rem)',
										// backgroundImage: `url${check}`,
									}}
								></div>
							</th>
							<th>Order Id</th>
							<th>Channels</th>
							<th>Products</th>
							<th>Dinmensions</th>
							<th>Payments</th>
							<th>Customers</th>
							<th>Staffs</th>
							<th>Follow Ups</th>
							<th>Delivery Status</th>
							<th>CS</th>
							<th>DS</th>
							<th>Actions</th>
						</tr>
						<tr></tr>
						{data.map((data, index) => {
							return (
								<tr key={index}>
									{/* checkbox */}
									<td>
										<span style={{ display: 'flex', alignItems: 'center' }}>
											<input
												type='checkbox'
												name={'id' + index}
												id={'id' + index}
												style={{ display: 'none' }}
												onChange={() => findChecked()}
											/>
											<label
												htmlFor={'id' + index}
												style={{
													borderRadius: '5px',
													border: '1px solid #366EF1',
													height: '1.2rem',
													width: '1.2rem',
												}}
											></label>
										</span>
									</td>

									{/* time & id */}
									<td
										style={{
											display: 'flex',
											columnGap: '0.4rem',
											textAlign: 'left',
										}}
									>
										<div>
											<p>{data.id}</p>
											<p
												style={{
													fontWeight: '300',
													display: 'flex',
													columnGap: '0.2rem',
													alignItems: 'center',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='10'
													height='10'
													viewBox='0 0 24 24'
												>
													<path
														d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'
														fill='#366EF1'
													/>
												</svg>{' '}
												{data.date}
											</p>
											<p
												style={{
													fontWeight: '300',
													display: 'flex',
													alignItems: 'center',
													columnGap: '0.2rem',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='10'
													height='10'
													viewBox='0 0 24 24'
												>
													<path
														d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z'
														fill='#366EF1'
													/>
												</svg>
												{data.time}
											</p>
										</div>
									</td>

									{/* shopify */}
									<td>
										<p
											style={{
												display: 'block',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'nowrap',
												width: '5rem',
												margin: 'auto',
												// border: '1px solid black',
											}}
										>
											{data.shopify}
										</p>
										<p>
											{/* <Image src={Shopify} height={24} width={24} /> */}
										</p>
									</td>

									{/* product */}
									<td style={{ textAlign: 'left', width: '2rem' }}>
										<p
											style={{
												display: 'block',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'nowrap',
												width: '4rem',
												// border: '1px solid black',
											}}
										>
											{data.product}
										</p>
										<p>Qty : {data.qty}</p>
									</td>

									{/* dimensions */}
									<td style={{ position: 'relative' }}>
										<p
											style={{
												display: 'flex',
												columnGap: '0.5rem',
												textAlign: 'left',
											}}
										>
											<span
												style={{
													whiteSpace: 'nowrap',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													width: '5rem',
												}}
											>
												{data.dims}
											</span>
											<span>
												<span
													onClick={() => setDims(index)}
													style={{
														backgroundColor: '#366EF1',
														padding: '0 0.3rem',
														borderRadius: '5px',
													}}
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='7.9'
														height='7.9'
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
										<p>Volumetric : {data.Volume} Kg</p>
										<p>Entered : {data.Entered} Kg</p>

										{dims == index && (
											<div className={'dims'}>
												<div>
													<div
														style={{
															textAlign: 'left',
															fontSize: '0.8rem',
															margin: '0.5rem 0',
														}}
													>
														<input
															type='radio'
															name=''
															id=''
															style={{ margin: 0 }}
														/>
														<label htmlFor=''>Use Original Dimensions</label>
													</div>
													<div
														style={{
															textAlign: 'left',
															fontSize: '0.8rem',
															margin: '0.5rem 0',
														}}
													>
														<input
															type='radio'
															name=''
															id=''
															style={{ margin: 0 }}
														/>
														<label htmlFor=''>Add Custom Dimensions</label>
													</div>
												</div>
												<div>
													<p
														style={{
															margin: '0',
															textAlign: 'left',
															fontSize: '0.7rem',
														}}
													>
														Dimensions
													</p>
													<div style={{ display: 'flex', columnGap: '10%' }}>
														<input type='text' />
														<input type='text' />
														<input type='text' />
													</div>
												</div>
												<div>
													<p
														style={{
															margin: '0',
															textAlign: 'left',
															fontSize: '0.7rem',
															marginTop: '1rem',
														}}
													>
														Volumetric
													</p>
													<div style={{ display: 'flex', columnGap: '10%' }}>
														<input type='text' />
													</div>
												</div>
												<div
													style={{
														display: 'flex',
														columnGap: '1rem',
														justifyContent: 'center',
														margin: '0.5rem 0',
													}}
												>
													<button
														style={{
															background: '#366EF1 0% 0% no-repeat padding-box',
															borderRadius: '4px',
															color: '#fff',
														}}
														onClick={() => setDims(-1)}
													>
														Done
													</button>
													<button onClick={() => setDims(-1)}>Cancel</button>
												</div>
											</div>
										)}
									</td>

									{/* status */}
									<td>
										<p>Rs. {data.rs}</p>
										<p
											style={{
												position: 'relative',
												display: 'flex',
												columnGap: '0.3rem',
											}}
										>
											<span
												style={{
													padding: '0.2rem 0.5rem',
													backgroundColor: `${
														data.status == 'Pending' ? '#FFCCD5' : '#CEFFCC'
													}`,
													borderRadius: '10px',
													color: `${
														data.status == 'Pending' ? '#FF002B' : '#00E3A5'
													}`,

													overflow: 'hidden',
													textOverflow: 'ellipsis',
													whiteSpace: 'nowrap',
													display: 'block',
													maxWidth: '3.5rem',
													flex: '1',
												}}
											>
												{data.status}
											</span>{' '}
											<span
												onClick={() => {
													setStatus(index);
												}}
												style={{
													backgroundColor: '#366EF1',
													padding: '0 0.4rem',
													borderRadius: '5px',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='10'
													height='10'
													viewBox='0 0 24 24'
												>
													<path
														d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
														fill='#fff'
													/>
												</svg>
											</span>
											{status == index && (
												<div className={'status'}>
													<input
														type='radio'
														value='Paid'
														name={'status' + index}
														id={'statusPaid' + index}
														defaultChecked={
															data.status == 'Paid' ? true : false
														}
														onChange={(e) => {
															setEditStatus(e.target.value);
														}}
													/>
													<label htmlFor={'statusPaid' + index}>
														<span>Paid</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',

																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#00E3A5'
																/>
															</svg>
														</span>
													</label>

													<input
														type='radio'
														name={'status' + index}
														id={'statusPending' + index}
														defaultChecked={
															data.status == 'Pending' ? true : false
														}
														onChange={(e) => {
															setEditStatus(e.target.value);
														}}
														value='Pending'
													/>
													<label htmlFor={'statusPending' + index}>
														<span>Pending</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',

																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#FF002B'
																/>
															</svg>
														</span>
													</label>
													<div
														style={{
															marginTop: '1rem',
															display: 'flex',
															columnGap: '0.2rem',
															justifyContent: 'center',
														}}
													>
														<button
															style={{
																background:
																	'#366EF1 0% 0% no-repeat padding-box',
																borderRadius: '4px',
																color: '#fff',
															}}
															onClick={(e) => {
																e.preventDefault();
																data.status = editStatus;
																setEditStatus('');
																setStatus(-1);
															}}
														>
															Done
														</button>
														<button
															style={{
																backgroundColor: '#fff',
																color: '#707070',
															}}
															onClick={() => setStatus(-1)}
														>
															Cancel
														</button>
													</div>
												</div>
											)}
										</p>
									</td>

									{/* cust */}
									<td style={{ textAlign: 'left' }}>
										<p>{data.cust}</p>
										<p
											style={{
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												fontWeight: '300',
											}}
										>
											{data.phNum}
										</p>
										<p
											style={{
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												fontWeight: '300',
											}}
										>
											{data.mail}
										</p>
									</td>

									{/* staff */}
									<td style={{ position: 'relative' }}>
										<p
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												columnGap: '0.2rem',
											}}
										>
											<span
												style={{
													fontWeight: '700',
													color: '#366EF1',
													whiteSpace: 'nowrap',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													display: 'block',
												}}
											>
												{data.staff}
											</span>
											<span>
												<span
													style={{
														backgroundColor: '#366EF1',
														padding: '0 0.3rem',
														borderRadius: '5px',
													}}
													onClick={() => {
														setStaff(index);
													}}
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='7.9'
														height='7.9'
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
										{staff == index && (
											<div className={'staff'}>
												<div className='staffNames'>
													<input
														type='radio'
														name='staff'
														id={'1' + index}
														value='Mr. Drew'
														onChange={(e) => setEditStaff(e.target.value)}
														defaultChecked={
															data.staff == 'Mr. Drew' ? true : false
														}
													/>
													<label htmlFor={'1' + index}>
														<span>Mr. Drew</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',

																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='staff'
														id={'2' + index}
														value='Mr. Random'
														onChange={(e) => setEditStaff(e.target.value)}
														defaultChecked={
															data.staff == 'Mr. Random' ? true : false
														}
													/>
													<label htmlFor={'2' + index}>
														<span>Mr. Random</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>

													<input
														type='radio'
														name='staff'
														id={'3' + index}
														value='Mr. Aman'
														onChange={(e) => setEditStaff(e.target.value)}
														defaultChecked={
															data.staff == 'Mr. Aman' ? true : false
														}
													/>
													<label htmlFor={'3' + index}>
														<span>Mr. Aman</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',

																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>

													<input
														type='radio'
														name='staff'
														id={'4' + index}
														value='Mr. Aman'
														onChange={(e) => setEditStaff(e.target.value)}
														defaultChecked={
															data.staff == 'Mr. Other' ? true : false
														}
													/>
													<label htmlFor={'4' + index}>
														<span>Mr. Other</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',

																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>

													<input
														type='radio'
														name='staff'
														id={'5' + index}
														value='Mr. Aman'
														onChange={(e) => setEditStaff(e.target.value)}
														defaultChecked={
															data.staff == 'Mr. another' ? true : false
														}
													/>
													<label htmlFor={'5' + index}>
														<span>Mr. another</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',

																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 16 16'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
												</div>
												<div
													style={{
														display: 'flex',
														columnGap: '0.3rem',
														alignContent: 'center',
														justifyContent: 'center',
														marginTop: '0.3rem',
													}}
												>
													<button
														style={{
															backgroundColor: '#366EF1',
															color: '#fff',
														}}
														onClick={() => {
															data.staff = editStaff;
															setEditStaff('');
															setStaff(-1);
														}}
													>
														Done
													</button>
													<button
														onClick={() => {
															setEditStaff('');
															setStaff(-1);
														}}
													>
														Cancel
													</button>
												</div>
											</div>
										)}
									</td>

									{/* follow ups */}
									<td style={{ position: 'relative' }}>
										<p
											style={{
												backgroundColor: '#FFF7CC',
												color: '#FCAF09',
												padding: '0.4rem 0.1rem',
												borderRadius: '10px',
												display: 'flex',
												justifyContent: 'space-between',
												padding: '0.5rem',
												columnGap: '0.3rem',
											}}
										>
											<span
												style={{
													display: 'block',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													whiteSpace: 'nowrap',
													width: '4rem',
												}}
											>
												{data.FollowUp}
											</span>
											<span
												style={{
													backgroundColor: '#366EF1',
													padding: '0 0.3rem',
													borderRadius: '5px',
												}}
												onClick={() => setFollow(index)}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='7.9'
													height='7.9'
													viewBox='0 0 24 24'
												>
													<path
														d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
														fill='#fff'
													/>
												</svg>
											</span>
										</p>
										{follow == index && (
											<div className={'followUp'}>
												<p style={{ textAlign: 'center' }}>
													Choose Follow Up Status
												</p>

												<div
													style={{
														height: '60%',
														borderTop: '1px solid #E4E4E4',
													}}
													className={'staffNames'}
												>
													<input
														type='radio'
														name='followUp'
														id={'follow1' + index}
														value='Pending'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow1' + index}>
														<span>Pending</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow2' + index}
														value='Canceled'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow2' + index}>
														<span>Canceled</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow3' + index}
														value='Confirmed'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow3' + index}>
														<span>Confirmed</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow4' + index}
														value='Call back'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow4' + index}>
														<span>Call back</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow5' + index}
														value='Unreachable'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow5' + index}>
														<span>Unreachable</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow6' + index}
														value='Switched Off'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow6' + index}>
														<span>Switched Off</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow7' + index}
														value='Wrong Number'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow7' + index}>
														<span>Wrong Number</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='followUp'
														id={'follow8' + index}
														value='Busy'
														onChange={(e) => setEditFollowUp(e.target.value)}
													/>
													<label htmlFor={'follow8' + index}>
														<span>Busy</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
												</div>
												<div
													style={{
														display: 'flex',
														columnGap: '0.3rem',
														alignContent: 'center',
														justifyContent: 'center',
														marginTop: '0.3rem',
													}}
												>
													<button
														onClick={() => {
															data.FollowUp = editFollowUp;
															setEditFollowUp('');
															setFollow(-1);
														}}
														style={{
															backgroundColor: '#366EF1',
															color: '#fff',
														}}
													>
														Confirm
													</button>
													<button onClick={() => setFollow(-1)}>Cancel</button>
												</div>
											</div>
										)}
									</td>

									{/* delivery */}
									<td style={{ position: 'relative' }}>
										<p
											style={{
												backgroundColor: '#FFF7CC',
												color: '#FCAF09',
												padding: '0.4rem 0.1rem',
												borderRadius: '10px',
												display: 'flex',
												justifyContent: 'space-between',
												columnGap: '0.3rem',
												padding: '0.5rem',
											}}
										>
											<span
												style={{
													display: 'block',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													whiteSpace: 'nowrap',
													width: '4rem',
												}}
											>
												{data.Delivery}
											</span>
											<span
												style={{
													backgroundColor: '#366EF1',
													padding: '0 0.3rem',
													borderRadius: '5px',
												}}
												onClick={() => setDeli(index)}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='7.9'
													height='7.9'
													viewBox='0 0 24 24'
												>
													<path
														d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
														fill='#fff'
													/>
												</svg>
											</span>
										</p>
										{deli == index && (
											<div className={'deli'}>
												<p style={{ textAlign: 'center' }}>
													Choose Delivery Status
												</p>

												<div
													style={{
														height: '60%',
														borderTop: '1px solid #E4E4E4',
													}}
													className={'staffNames'}
												>
													<input
														type='radio'
														name='delivery'
														id={'deli1' + index}
														value='Pending'
														onChange={(e) => setEditDelivery(e.target.value)}
													/>
													<label htmlFor={'deli1' + index}>
														<span>Pending</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='delivery'
														id={'deli2' + index}
														value='Canceled'
														onChange={(e) => setEditDelivery(e.target.value)}
													/>
													<label htmlFor={'deli2' + index}>
														<span>Canceled</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='delivery'
														id={'deli3' + index}
														value='Delivered'
														onChange={(e) => setEditDelivery(e.target.value)}
													/>
													<label htmlFor={'deli3' + index}>
														<span>Delivered</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='delivery'
														id={'deli4' + index}
														value='In Transit'
														onChange={(e) => setEditDelivery(e.target.value)}
													/>
													<label htmlFor={'deli4' + index}>
														<span>In transit</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
													<input
														type='radio'
														name='delivery'
														id={'deli5' + index}
														value='Undelivered'
														onChange={(e) => setEditDelivery(e.target.value)}
													/>
													<label htmlFor={'deli5' + index}>
														<span>Undelivered</span>
														<span
															style={{
																height: '1.2rem',
																width: '1.2rem',
																position: 'relative',
																display: 'inline-block',
															}}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='20'
																height='20'
																viewBox='0 0 20 20'
															>
																<path
																	id='check_box'
																	data-name='check box'
																	d='M18.722,4.5H6.278A1.777,1.777,0,0,0,4.5,6.278V18.722A1.777,1.777,0,0,0,6.278,20.5H18.722A1.777,1.777,0,0,0,20.5,18.722V6.278A1.777,1.777,0,0,0,18.722,4.5Zm-8,12.444L6.278,12.5l1.253-1.253,3.191,3.182,6.747-6.747,1.253,1.262Z'
																	transform='translate(-4.5 -4.5)'
																	fill='#366ef1'
																/>
															</svg>
														</span>
													</label>
												</div>

												<div
													style={{
														display: 'flex',
														columnGap: '0.3rem',
														alignContent: 'center',
														justifyContent: 'center',
														marginTop: '0.3rem',
													}}
												>
													<button
														onClick={() => {
															data.Delivery = editDelivery;
															setEditDelivery('');
															setDeli(-1);
														}}
														style={{
															backgroundColor: '#366EF1',
															color: '#fff',
														}}
													>
														Confirm
													</button>
													<button onClick={() => setDeli(-1)}>Cancel</button>
												</div>
											</div>
										)}
									</td>

									<td style={{ padding: '0.2rem' }}>
										<p
											style={{
												width: '1.8rem',
												height: '1.8rem',
												margin: 'auto',
											}}
										>
											<CircularProgressbar
												value={data.CS * 10}
												text={`${data.CS}`}
												styles={{
													root: {},

													path: {
														stroke: `${data.CS > 5 ? '#34D12F' : '#FF002B'}`,
														strokeLinecap: 'round',
														transformOrigin: 'center center',
													},

													trail: {
														stroke: '#fff',
														strokeLinecap: 'round',
														transformOrigin: 'center center',
													},

													text: {
														fill: '#333333',
														fontSize: '2rem',
														fontWeight: '600',
													},

													background: {
														fill: '#fff',
													},
												}}
											/>
										</p>
									</td>
									<td
										style={{
											padding: '0.2rem',
										}}
									>
										<p
											style={{
												width: '1.8rem',
												height: '1.8rem',
												margin: 'auto',
											}}
										>
											<CircularProgressbar
												value={data.DS * 10}
												text={`${data.DS}`}
												styles={{
													root: {},

													path: {
														stroke: `${data.DS > 5 ? '#34D12F' : '#FF002B'}`,
														strokeLinecap: 'round',
														transformOrigin: 'center center',
													},

													trail: {
														stroke: '#fff',
														strokeLinecap: 'round',
														transformOrigin: 'center center',
													},

													text: {
														fill: '#333333',
														fontSize: '2rem',
														fontWeight: '600',
													},

													background: {
														fill: '#fff',
													},
												}}
											/>
										</p>
									</td>
									<td>
										<p
											style={{
												padding: 0,
												display: 'flex',
												justifyContent: 'space-around',
												columnGap: '0.2rem',
											}}
										>
											<span
												style={{
													height: '2rem',
													width: '2rem',
													borderRadius: '50%',
													backgroundColor: '#CCDBFF',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='10'
													height='10'
													viewBox='0 0 24 24'
												>
													<path
														d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z'
														fill='#366EF1'
													/>
												</svg>
											</span>
											<span
												style={{
													height: '2rem',
													width: '2rem',
													borderRadius: '50%',
													backgroundColor: '#F2E8FF',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='12'
													height='10'
													viewBox='0 0 12 10'
												>
													<path
														id='shipment_icon_12x12'
														data-name='shipment icon 12x12'
														d='M14.571,11.169l-1.5-3.077h-2.25V6.553a.762.762,0,0,0-.75-.769H3.321a.762.762,0,0,0-.75.769v6.154l.75.769h.951a1.561,1.561,0,0,0-.2.769,1.5,1.5,0,1,0,3,0,1.561,1.561,0,0,0-.2-.769h4.152a1.561,1.561,0,0,0-.2.769,1.5,1.5,0,1,0,3,0,1.561,1.561,0,0,0-.2-.769h.951V11.169Zm-3.75,0V8.861h1.555L13.5,11.169Z'
														transform='translate(-2.57 -5.784)'
														fill='#8736F1'
													/>
												</svg>
											</span>
										</p>
									</td>
								</tr>
							);
						})}
					</table>
				)}

				<div className='tableDiv'>
					<div className='tableDivHeading'>
						<p className={'table1col'}>
							<span></span>
						</p>
						<p className={'table2col'}>Orders Id</p>
						<p className={'table3col'}>Channels</p>
						<p className={'table4col'}>Products</p>
						<p className={'table5col'}>Dinmensions</p>
						<p className={'table6col'}>Payments</p>
						<p className={'table7col'}>Customers</p>
						<p className={'table8col'}>Staff</p>
						<p className={'table9col'}>Follow Up</p>
						<p className={'table10col'}>Delivery Status</p>
						<p className={'table11col'}>CS</p>
						<p className={'table12col'}>DS</p>
						<p className={'table13col'} style={{ borderRight: 'none' }}>
							Actions
						</p>
					</div>
					{data.map((data, index) => {
						return (
							<div className='tableDivRow' key={index}>
								<div className='table1col'>
									<input
										type='checkbox'
										name={'id' + index}
										id={'id' + index}
										style={{ display: 'none' }}
										onChange={() => findChecked()}
									/>
									<label
										htmlFor={'id' + index}
										style={{
											borderRadius: '5px',
											border: '1px solid #366EF1',
											height: '1.2rem',
											width: '1.2rem',
										}}
									></label>
								</div>
								<div className='table2col'>
									<div style={{ border: 'none', padding: 'none' }}>
										<p style={{ fontWeight: '600' }}>{data.id}</p>
										<p>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='10'
												height='10'
												viewBox='0 0 24 24'
											>
												<path
													d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'
													fill='#366EF1'
												/>
											</svg>{' '}
											{data.date}
										</p>
										<p>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='10'
												height='10'
												viewBox='0 0 24 24'
											>
												<path
													d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z'
													fill='#366EF1'
												/>
											</svg>{' '}
											{data.time}
										</p>
									</div>
								</div>
								<div className='table3col'>
									<div
										style={{
											border: 'none',
											display: 'flex',
											// backgroundColor: 'blue',
											justifyContent: 'center',
											width: '100%',
											alignItems: 'center',
										}}
									>
										<p>
											<p style={{ margin: '0.1rem', fontWeight: '600' }}>
												{data.shopify}
											</p>
											<p style={{ margin: 0 }}>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 48 48'
													width='20px'
													height='20px'
												>
													<path
														fill='#7cb342'
														d='M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211	C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125	c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671	C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671	c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812	c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812	L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655	c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z'
													/>
													<path
														fill='#558b2f'
														d='M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549	C37.169,11.569,37.005,11.475,36.865,11.428z'
													/>
													<path
														fill='#fff'
														d='M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867	c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411	c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214	C23.777,17.994,24.792,18.593,24.792,18.593z'
													/>
												</svg>
											</p>
										</p>
									</div>
								</div>
								<div className='table4col'>
									<p>{data.product}</p>
								</div>
								<div className='table5col'></div>
								<div className='table6col'></div>
								<div className='table7col'></div>
								<div className='table8col'></div>
								<div className='table9col'></div>
								<div className='table10col'></div>
								<div className='table11col'></div>
								<div className='table12col'></div>
								<div className='table13col'></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Table;
