import { useState } from 'react';
import '../styles/NavMob.css';
// import noti from '../../public/nav/noti.svg';
// import wallet from '../../public/nav/wallet.svg';
// import Image from 'next/dist/client/image';
const NavMob = ({ width }) => {
	const [navOpen, setNavOpen] = useState(false);
	const [user, setUser] = useState(false);
	const [orders, setOrders] = useState(false);
	const [shipments, setShipments] = useState(false);
	const [stores, setStores] = useState(false);
	const [staff, setStaff] = useState(false);
	const [biling, setBiling] = useState(false);

	const animateMenu = () => {
		var list = document.getElementById('mobMenuList');
		if (!navOpen) {
			list.style.right = '0%';
		} else {
			list.style.right = '-100%';
		}
	};

	const resetAll = () => {
		setBiling(false);
		setOrders(false);
		setStaff(false);
		setShipments(false);
		setStores(false);
	};

	return (
		<div className={'contMob'}>
			<div className={'bodyMob'}>
				<div className={'logoMob'}>logo here</div>
				<div className={'menuMob'}>
					<svg
						onClick={() => {
							setNavOpen(true);
							animateMenu();
							console.log('clicked');
						}}
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path
							d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'
							fill='#333333'
						/>
					</svg>
				</div>
				<div id='mobMenuList' className={'menuListMob'}>
					<div
						style={{
							textAlign: 'right',
							marginBottom: '1rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							position: 'relative',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								columnGap: '1rem',
								position: 'relative',
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								onClick={() => {
									if (!user) setUser(true);
									else setUser(false);
								}}
							>
								<path
									id='user_icon'
									data-name='user icon'
									d='M16,16a5,5,0,1,0-5-5A5,5,0,0,0,16,16Zm0,2.5c-3.337,0-10,1.675-10,5V26H26V23.5C26,20.175,19.338,18.5,16,18.5Z'
									transform='translate(-6 -6)'
									fill={`${user ? '#0670ed' : '#707070'}`}
								/>
							</svg>
							{/* <Image src={noti} /> */}
							{user && (
								<div className={'userListMob'}>
									<p>Edit Profile</p>
									<p>Settings</p>
									<p>Wallet</p>
									<p>Log Out</p>
								</div>
							)}
						</div>
						<div>
							<svg
								onClick={() => {
									setNavOpen(false);
									animateMenu();
								}}
								style={{ margin: '.8rem -0.3rem' }}
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'
								fillRule='evenodd'
								clipRule='evenodd'
							>
								<path
									d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'
									fill='#333333'
								/>
							</svg>
						</div>
					</div>

					<div className={'userDataMob'}>
						<p>
							<span style={{ display: 'flex', alignItems: 'center' }}>
								<span>{/* <Image src={wallet} /> */}</span>
								<span
									style={{
										color: '#366EF1',
										fontSize: '1.2rem',
										fontWeight: '500',
										letterSpacing: '0.05px',
									}}
								>
									$1234
								</span>
							</span>
						</p>
					</div>

					<div className={'listElementsMob'}>
						<p
							onClick={() => {
								resetAll();
								if (!orders) setOrders(true);
								else setOrders(false);
							}}
							style={{
								color: `${orders ? '#fff' : ''}`,
								backgroundColor: `${orders ? '#366ef1' : ''}`,
								fontWeight: `${orders ? 600 : ''}`,
							}}
						>
							Orders
						</p>
						{orders && (
							<div>
								<p>Create Orders</p>
								<p>All Orders</p>
								<p>Abonded Cart</p>
								<p>All Customers</p>
							</div>
						)}
						<p
							onClick={() => {
								resetAll();
								if (!shipments) setShipments(true);
								else setShipments(false);
							}}
							style={{
								color: `${shipments ? '#fff' : ''}`,
								backgroundColor: `${shipments ? '#366ef1' : ''}`,
								fontWeight: `${shipments ? 600 : ''}`,
							}}
						>
							Shipments
						</p>
						{shipments && (
							<div>
								<p>All Shipments</p>
								<p>Shipment Slips</p>
								<p>All NDR</p>
								<p>Weight Discrepancy</p>
							</div>
						)}
						<p
							onClick={() => {
								resetAll();
								if (!stores) setStores(true);
								else setStores(false);
							}}
							style={{
								color: `${stores ? '#fff' : ''}`,
								backgroundColor: `${stores ? '#366ef1' : ''}`,
								fontWeight: `${stores ? 600 : ''}`,
							}}
						>
							Stores
						</p>
						{stores && (
							<div>
								<p>Warehouseses</p>
								<p>Products</p>
								<p>Inventory</p>
								<p>Channels</p>
							</div>
						)}
						<p
							onClick={() => {
								resetAll();
								if (!staff) setStaff(true);
								else setStaff(false);
							}}
							style={{
								color: `${staff ? '#fff' : ''}`,
								backgroundColor: `${staff ? '#366ef1' : ''}`,
								fontWeight: `${staff ? 600 : ''}`,
							}}
						>
							Staff
						</p>
						{staff && (
							<div>
								<p>All Members</p>
								<p>Role Groups</p>
								<p>Assign Orders</p>
							</div>
						)}
						<p
							onClick={() => {
								resetAll();
								if (!biling) setBiling(true);
								else setBiling(false);
							}}
							style={{
								color: `${biling ? '#fff' : ''}`,
								backgroundColor: `${biling ? '#366ef1' : ''}`,
								fontWeight: `${biling ? 600 : ''}`,
							}}
						>
							Billing
						</p>
						{biling && (
							<div>
								<p>Shopping Plans</p>
								<p>Shipping rate Calculator</p>
								<p>COD Remittance</p>
								<p>Wallet Transactions</p>
								<p>Shipping Charges</p>
							</div>
						)}
						<p>Control Tower</p>
						<p>Reports</p>
						<p>Tickets</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavMob;
