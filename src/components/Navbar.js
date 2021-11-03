// import '../styles/navbar.css';
import noti from '../nav/noti.svg';
import wallet from '../nav/wallet.svg';
import {useState} from 'react';
import {makeStyles} from '@mui/styles';

const style = makeStyles({
    contNav: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
        margin: '0',
        top: '-1rem',
    },
    bodyNav: {
        marginTop: '1rem',
        width: '95%',
        display: 'flex',
        margin: 'auto',
    },
    logoNav: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infosNav: {
        flex: 2,
        display: 'flex',
        '& p:nth-child(1)': {
            textAlign: 'center',
            flex: 4,
            display: 'grid',
            alignItems: 'center',
        },
        '& p:nth-child(2)': {
            textAlign: 'center',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
        },
        '& p:nth-child(3)': {
            textAlign: 'center',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            '&:hover > svg path': {
                fill: '#366ef1',
            },
        },
    },
    ftrsNav: {
        flex: 6,
        display: 'flex',
        '& p': {
            flex: 1,
            textAlign: 'center',
            fontSize: '0.9rem',
            padding: '0.3rem 0',
            borderRadius: '10px',
            color: '#707070',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            '&:hover': {
                // color: '#fff !important',
                backgroundColor: '#366ef1',
                fill: '#fff',
                color: '#fff',
                '& svg': {
                    '& path': {
                        fill: '#fff',
                        color: '#fff',
                    },
                },
            },
            '@media(max-width:1200px)': {
                fontSize: '0.7rem',
            },
            '@media(max-width:900px)': {
                fontSize: '0.6rem',
            },
            '& svg': {
                '& path': {
                    fill: '#707070',
                },
            },
        },
    },
    dropdownsNav: {
        background: '#ffffff 0% 0% no-repeat padding-box',
        boxShadow: '12px 24px 38px #0000001c',
        position: 'absolute',
        width: '200%',
        left: 0,
        top: '100%',
        padding: '1rem 1rem',
        borderRadius: '10px',
        height: 'auto',
        zIndex: '100',
        '& p': {
            textAlign: 'left',
            padding: '0.5rem 1rem',
            margin: '0',
            display: 'block',
            fontSize: '0.8rem',
            fontWeight: 600,
            '&:hover': {
                color: '#366ef1 !important',
                backgroundColor: '#eceef1',
                cursor: 'pointer',
            },
        },
    },
    userPanelNav: {
        position: 'absolute',
        height: 'auto',
        width: '10rem',
        backgroundColor: '#fff',
        right: 0,
        top: '100%',
        fontSize: '0.8rem',
        borderRadius: '10px',
        boxShadow: '12px 9px 38px #00000014',
        zIndex: 100,
        '& p': {
            color: '#707070',
            '&:hover': {
                backgroundColor: '#eceef1',
                color: '#366ef1',
                borderRadius: '10px',
            },
            '&:last-child': {
                border: '1px solid #fff',
            },
            '&:last-child:hover': {
                backgroundColor: '#fff',
                border: '1px solid #ff002b',
                color: '#ff002b',
            },
        },
    },
});
const Navbar = () => {
    const classes = style();
    const [fst, setFirst] = useState(false);
    const [sec, setsec] = useState(false);
    const [thd, setThd] = useState(false);
    const [frth, setFrth] = useState(false);
    const [fiv, setFiv] = useState(false);
    const [six, setSix] = useState(false);
    const [sev, setSev] = useState(false);
    const [eth, setEth] = useState(false);
    const [user, setUser] = useState(false);
    // const unset = () => {
    // 	setFirst(false);
    // 	setFiv(false);
    // 	setFrth(false);
    // 	setSev(false);
    // 	setsec(false);
    // 	setSix(false);
    // 	setEth(false);
    // 	setThd(false);
    // };
    return (
        <div className={classes.contNav}>
            <div className={classes.bodyNav}>
                <div className={classes.logoNav}>LOGO HERE</div>
                <div className={classes.ftrsNav}>
                    <p
                        onMouseEnter={() => {
                            setFirst(true);
                        }}
                        onMouseLeave={() => setFirst(false)}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                            >
								<path
                                    id='order_icon_12x12'
                                    data-name='order icon 12x12'
                                    d='M11.941,4.327,10.755.769A1.122,1.122,0,0,0,9.689,0H6.375V4.5H11.97A1.071,1.071,0,0,0,11.941,4.327ZM5.625,0H2.311A1.122,1.122,0,0,0,1.245.769L.059,4.327A1.07,1.07,0,0,0,.03,4.5H5.625ZM0,5.25v5.625A1.125,1.125,0,0,0,1.125,12h9.75A1.125,1.125,0,0,0,12,10.875V5.25Z'
                                />
							</svg>
                            {' '}
                            Orders
						</span>
                        {fst && (
                            <div className={classes.dropdownsNav}>
                                <p>&#62; Create Orders</p>
                                <p>&#62; All Orders</p>
                                <p>&#62; Abondend Cart</p>
                                <p>&#62; All Customers</p>
                            </div>
                        )}
                    </p>
                    <p
                        onMouseEnter={() => {
                            setsec(true);
                        }}
                        onMouseLeave={() => setsec(false)}
                    >
						<span>
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
                                />
							</svg>
                            {' '}
                            Shipments
						</span>
                        {sec && (
                            <div className={classes.dropdownsNav}>
                                <p>&#62; All Shipments</p>
                                <p>&#62; Shipments Slips</p>
                                <p>&#62; All NDR</p>
                                <p>&#62; Weight Discrepancy</p>
                            </div>
                        )}
                    </p>
                    <p
                        onMouseEnter={() => {
                            setThd(true);
                        }}
                        onMouseLeave={() => setThd(false)}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                            >
								<path
                                    id='store_icon_12x12'
                                    data-name='store icon 12x12'
                                    d='M11.732,2.78,10.467.352A.608.608,0,0,0,9.939,0H2.068A.608.608,0,0,0,1.54.352L.276,2.78c-.653,1.254-.074,3,1.146,3.2A1.689,1.689,0,0,0,1.688,6a1.8,1.8,0,0,0,1.438-.776A1.805,1.805,0,0,0,4.564,6,1.8,1.8,0,0,0,6,5.222,1.805,1.805,0,0,0,7.439,6a1.8,1.8,0,0,0,1.438-.776A1.808,1.808,0,0,0,10.315,6a1.671,1.671,0,0,0,.267-.021C11.806,5.78,12.386,4.036,11.732,2.78ZM10.319,6.75a2.08,2.08,0,0,1-.575-.089V9H2.263V6.661a2.172,2.172,0,0,1-.575.089,2.193,2.193,0,0,1-.351-.028,2.1,2.1,0,0,1-.32-.084V11.25a.7.7,0,0,0,.623.75H10.37a.7.7,0,0,0,.623-.75V6.638a1.706,1.706,0,0,1-.32.084A2.26,2.26,0,0,1,10.319,6.75Z'
                                    transform='translate(-0.004)'
                                />
							</svg>
                            {' '}
                            Stores
						</span>
                        {thd && (
                            <div className={classes.dropdownsNav}>
                                <p>&#62; Warehouses</p>
                                <p>&#62; Products</p>
                                <p>&#62; Inventory</p>
                                <p>&#62; Channels</p>
                            </div>
                        )}
                    </p>
                    <p
                        onMouseEnter={() => {
                            setFrth(true);
                        }}
                        onMouseLeave={() => setFrth(false)}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='12'
                                height='10'
                                viewBox='0 0 12 10'
                            >
								<path
                                    id='staff_icon_12x12'
                                    data-name='staff icon 12x12'
                                    d='M1.8,6.536A1.331,1.331,0,0,0,3,5.107,1.331,1.331,0,0,0,1.8,3.679,1.331,1.331,0,0,0,.6,5.107,1.331,1.331,0,0,0,1.8,6.536Zm8.4,0a1.331,1.331,0,0,0,1.2-1.429,1.331,1.331,0,0,0-1.2-1.429A1.331,1.331,0,0,0,9,5.107,1.331,1.331,0,0,0,10.2,6.536Zm.6.714H9.6a1.109,1.109,0,0,0-.846.415,3.319,3.319,0,0,1,1.408,2.442H11.4a.664.664,0,0,0,.6-.714V8.679A1.331,1.331,0,0,0,10.8,7.25ZM6,7.25a2.325,2.325,0,0,0,2.1-2.5A2.325,2.325,0,0,0,6,2.25a2.325,2.325,0,0,0-2.1,2.5A2.325,2.325,0,0,0,6,7.25Zm1.44.714H7.284a2.488,2.488,0,0,1-2.569,0H4.56A2.393,2.393,0,0,0,2.4,10.536v.643a1,1,0,0,0,.9,1.071H8.7a1,1,0,0,0,.9-1.071v-.643A2.393,2.393,0,0,0,7.44,7.964Zm-4.194-.3A1.109,1.109,0,0,0,2.4,7.25H1.2A1.331,1.331,0,0,0,0,8.679v.714a.664.664,0,0,0,.6.714H1.836A3.327,3.327,0,0,1,3.246,7.665Z'
                                    transform='translate(0 -2.25)'
                                />
							</svg>
                            {' '}
                            Staffs
						</span>
                        {frth && (
                            <div className={classes.dropdownsNav}>
                                <p>&#62; All Members</p>
                                <p>&#62; Role Group</p>
                                <p>&#62; Assign Orders</p>
                            </div>
                        )}
                    </p>
                    <p
                        onMouseEnter={() => {
                            setFiv(true);
                        }}
                        onMouseLeave={() => setFiv(false)}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='9'
                                height='12'
                                viewBox='0 0 9 12'
                            >
								<path
                                    id='billing_icon_12x12'
                                    data-name='billing icon 12x12'
                                    d='M6.75,6H2.25V7.5h4.5ZM8.836,2.461,6.541.164A.562.562,0,0,0,6.143,0H6V3H9V2.857A.561.561,0,0,0,8.836,2.461ZM5.25,3.188V0H.563A.561.561,0,0,0,0,.563V11.438A.561.561,0,0,0,.563,12H8.438A.561.561,0,0,0,9,11.438V3.75H5.813A.564.564,0,0,1,5.25,3.188ZM1.5,1.688A.187.187,0,0,1,1.688,1.5H3.563a.187.187,0,0,1,.188.188v.375a.187.187,0,0,1-.187.188H1.688A.187.187,0,0,1,1.5,2.063Zm0,1.5A.187.187,0,0,1,1.688,3H3.563a.187.187,0,0,1,.188.188v.375a.187.187,0,0,1-.187.188H1.688A.187.187,0,0,1,1.5,3.563Zm6,7.125a.187.187,0,0,1-.187.188H5.438a.187.187,0,0,1-.187-.187V9.938a.187.187,0,0,1,.188-.187H7.313a.187.187,0,0,1,.188.188Zm0-4.687v2.25a.375.375,0,0,1-.375.375H1.875A.375.375,0,0,1,1.5,7.875V5.625a.375.375,0,0,1,.375-.375h5.25A.375.375,0,0,1,7.5,5.625Z'
                                />
							</svg>
                            {' '}
                            Biling
						</span>
                        {fiv && (
                            <div className={classes.dropdownsNav}>
                                <p>&#62; Shipping Plans</p>
                                <p>&#62; Shipping Rate Calculator</p>
                                <p>&#62; COD Remittance</p>
                                <p>&#62; Wallet Transactions</p>
                                <p>&#62; Shipping Charges</p>
                            </div>
                        )}
                    </p>
                    {/* problem here */}
                    <p
                        onMouseEnter={() => {
                            setSix(true);
                        }}
                        onMouseLeave={() => setSix(false)}
                        style={{display: 'flex', alignContent: 'center'}}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                            >
								<path
                                    id='control_tower_icon_12x12'
                                    data-name='control tower icon 12x12'
                                    d='M2.83,4.5h.632c.206,0,.349-.254.279-.5A3.628,3.628,0,0,1,3.741,2c.071-.243-.072-.5-.279-.5H2.83a.315.315,0,0,0-.289.263,5.483,5.483,0,0,0,0,2.473A.315.315,0,0,0,2.83,4.5ZM1.686.547C1.792.3,1.649,0,1.424,0H.762A.306.306,0,0,0,.485.218,8.131,8.131,0,0,0,0,3,7.945,7.945,0,0,0,.5,5.786.3.3,0,0,0,.774,6h.653c.225,0,.368-.3.262-.548a6.39,6.39,0,0,1,0-4.905ZM11.514.218A.306.306,0,0,0,11.237,0h-.664c-.225,0-.369.3-.263.545a6.428,6.428,0,0,1,.005,4.9c-.107.25.034.551.261.551h.661a.306.306,0,0,0,.276-.218,8.2,8.2,0,0,0,0-5.565ZM9.17,1.5H8.537c-.206,0-.349.254-.279.5A3.628,3.628,0,0,1,8.259,4c-.07.243.072.5.279.5H9.17a.314.314,0,0,0,.289-.263,5.482,5.482,0,0,0,0-2.473A.314.314,0,0,0,9.17,1.5ZM6.989,3.847A1.764,1.764,0,0,0,7.2,3,1.375,1.375,0,0,0,6,1.5,1.375,1.375,0,0,0,4.8,3a1.764,1.764,0,0,0,.21.847L2.564,11.192a.414.414,0,0,0,.161.49l.553.289a.282.282,0,0,0,.392-.2L4.593,9H7.407l.922,2.769a.282.282,0,0,0,.392.2l.553-.289a.414.414,0,0,0,.161-.49L6.989,3.847ZM5.093,7.5,6,4.777,6.907,7.5Z'
                                />
							</svg>
                            {' '}
                            Control Tower
						</span>
                    </p>
                    {/* problem above */}
                    <p
                        onMouseEnter={() => {
                            setSev(true);
                        }}
                        onMouseLeave={() => setSev(false)}
                        style={{marginLeft: '1rem'}}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                            >
								<path
                                    id='report_icon_12x12'
                                    data-name='report icon 12x12'
                                    d='M4.545,9.941a.228.228,0,0,0-.212-.153.224.224,0,0,0-.209.145l-.16.36a.321.321,0,0,1-.614-.049L3,9.061l-.221.747a.915.915,0,0,1-.854.692H1.667a.378.378,0,0,1,0-.75h.258a.238.238,0,0,0,.222-.18L2.525,8.29A.509.509,0,0,1,3,7.905a.509.509,0,0,1,.474.385l.289.976A.879.879,0,0,1,5.139,9.6a.237.237,0,0,0,.195.147V7.82L8,4.841V3.75H5.167a.536.536,0,0,1-.5-.562V0H.5A.533.533,0,0,0,0,.563V11.438A.533.533,0,0,0,.5,12h7a.533.533,0,0,0,.5-.562V10.5l-2.667,0A.892.892,0,0,1,4.545,9.941ZM8,2.857a.6.6,0,0,0-.146-.4L5.815.164A.473.473,0,0,0,5.46,0H5.333V3H8ZM6,8.132V9.75H7.437l3.368-3.815L9.391,4.344,6,8.132Zm5.845-4.21-.664-.747a.49.49,0,0,0-.75,0l-.568.639L11.277,5.4l.568-.639A.65.65,0,0,0,11.845,3.922Z'
                                    fill='#707070'
                                />
							</svg>
                            {' '}
                            Reports
						</span>
                    </p>
                    <p
                        onMouseEnter={() => {
                            setEth(true);
                        }}
                        onMouseLeave={() => setEth(false)}
                    >
						<span>
							<svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='8'
                                height='12'
                                viewBox='0 0 8 12'
                            >
								<path
                                    id='ticket_icon_12x12'
                                    data-name='ticket icon 12x12'
                                    d='M2.667,6.5H9.333v4H2.667ZM11,8.5a1,1,0,0,0,1,1v2a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1v-2a1,1,0,0,0,1-1,1,1,0,0,0-1-1v-2a1,1,0,0,1,1-1H11a1,1,0,0,1,1,1v2A1,1,0,0,0,11,8.5ZM10,6.333a.5.5,0,0,0-.5-.5h-7a.5.5,0,0,0-.5.5v4.333a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5Z'
                                    transform='translate(12.5) rotate(90)'
                                />
							</svg>
                            {' '}
                            Tickets
						</span>
                    </p>
                </div>
                <div className={classes.infosNav}>
                    <p>
						<span>
							<span>{<img src={wallet}/>}</span>
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
                    <p>{<img src={noti}/>}</p>
                    <p
                        style={{position: 'relative'}}
                        onMouseLeave={() => setUser(false)}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            onMouseEnter={() => setUser(true)}
                        >
                            <path
                                id='user_icon'
                                data-name='user icon'
                                d='M16,16a5,5,0,1,0-5-5A5,5,0,0,0,16,16Zm0,2.5c-3.337,0-10,1.675-10,5V26H26V23.5C26,20.175,19.338,18.5,16,18.5Z'
                                transform='translate(-6 -6)'
                                fill='#707070'
                            />
                        </svg>
                        {user && (
                            <div className={classes.userPanelNav}>
                                <div
                                    style={{
                                        display: 'flex',
                                        padding: '1rem',
                                        justifyContent: 'space-between',
                                        backgroundColor: '#2C67F1',
                                        alignItems: 'center',
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                    }}
                                >
                                    <div>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='20'
                                            height='20'
                                            viewBox='0 0 20 20'
                                        >
                                            <path
                                                id='user_icon'
                                                data-name='user icon'
                                                d='M16,16a5,5,0,1,0-5-5A5,5,0,0,0,16,16Zm0,2.5c-3.337,0-10,1.675-10,5V26H26V23.5C26,20.175,19.338,18.5,16,18.5Z'
                                                transform='translate(-6 -6)'
                                                fill='#FFF'
                                            />
                                        </svg>
                                    </div>
                                    <div style={{color: '#fff'}}>Aman Kumar</div>
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        padding: '0.5rem',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <p
                                        style={{
                                            justifyContent: 'left',
                                            padding: '0.5rem',
                                            margin: 0,
                                        }}
                                    >
                                        Edit Profile
                                    </p>
                                    <p
                                        style={{
                                            justifyContent: 'left',
                                            padding: '0.5rem',
                                            margin: 0,
                                        }}
                                    >
                                        Wallet
                                    </p>
                                    <p
                                        style={{
                                            justifyContent: 'left',
                                            padding: '0.5rem',
                                            margin: 0,
                                        }}
                                    >
                                        Settings
                                    </p>
                                    <p
                                        style={{
                                            padding: '0.5rem',
                                        }}
                                    >
                                        LOG OUT
                                    </p>
                                </div>
                            </div>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Navbar;